import gsap from "gsap";

/**
 * Creates a seamless horizontal looping animation for marquee effects
 * 
 * This function creates an infinite horizontal loop animation where items
 * seamlessly wrap around from end to start without any visible gaps or jumps.
 * 
 * @param {Array|NodeList} items - DOM elements to animate
 * @param {Object} config - Animation configuration options
 * @param {number} [config.speed=1] - Animation speed multiplier (higher = faster)
 * @param {boolean} [config.reversed=false] - Whether to reverse animation direction
 * @param {number} [config.paddingRight=0] - Right padding between loop cycles (in pixels)
 * @param {number} [config.repeat=-1] - Number of repeats (-1 = infinite loop)
 * @param {boolean} [config.paused=false] - Start animation in paused state
 * @param {boolean|number} [config.snap=1] - Snap values for smoother animation
 * @returns {gsap.core.Timeline} GSAP timeline with seamless loop animation
 * 
 * @example
 * const timeline = horizontalLoop(elements, {
 *   speed: 1,
 *   reversed: false,
 *   paddingRight: 30,
 *   repeat: -1
 * });
 * 
 * // Control the timeline
 * timeline.pause();
 * timeline.play();
 * timeline.timeScale(2); // Double speed
 * 
 * @source Inspired by GSAP forums
 * @link https://greensock.com/forums/topic/27962-marquee-with-scroll-direction/
 */
export function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  
  // Safety check: Filter out null/undefined items and ensure array is not empty
  items = items.filter(item => item !== null && item !== undefined);
  if (items.length === 0) {
    console.warn("horizontalLoop: No valid items to animate");
    return gsap.timeline(); // Return empty timeline
  }
  
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () =>
        tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0]?.offsetLeft || 0,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 150,
    snap =
      config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
    
  // Convert x values to xPercent for responsiveness
  gsap.set(items, {
    xPercent: (i, el) => {
      if (!el) return 0; // Safety check
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  
  gsap.set(items, { x: 0 });
  
  // Calculate total width of all items including padding
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
    
  // Create seamless loop animation for each item
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      
    // Animate item from start to loop point
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      // Then wrap it back to continue seamlessly
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  
  // Helper function to jump to specific index
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  
  // Add navigation methods to timeline
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  
  // Pre-render for better performance
  tl.progress(1, true).progress(0, true);
  
  // Handle reversed configuration
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  
  return tl;
}

