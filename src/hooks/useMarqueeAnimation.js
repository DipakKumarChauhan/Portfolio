import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { horizontalLoop } from "../utils/gsapHelpers";

gsap.registerPlugin(Observer);

/**
 * Custom hook for marquee scroll-reactive animation
 * 
 * This hook sets up a horizontal looping marquee animation that reacts to
 * user scroll direction and speed. The marquee speeds up when scrolling
 * and returns to normal speed when scroll stops.
 * 
 * @param {Object} params - Hook parameters
 * @param {React.RefObject} params.itemsRef - Ref to array of DOM elements to animate
 * @param {Array} params.items - Array of items (used for dependency tracking)
 * @param {boolean} params.reverse - Whether to reverse animation direction
 * 
 * @returns {void}
 * 
 * @example
 * const itemsRef = useRef([]);
 * useMarqueeAnimation({ 
 *   itemsRef, 
 *   items: ['Item 1', 'Item 2'], 
 *   reverse: false 
 * });
 */
export function useMarqueeAnimation({ itemsRef, items, reverse }) {
  useEffect(() => {
    let tl;
    let observer;
    let isMounted = true;
    
    // Capture ref value for cleanup (prevents stale ref warning)
    const currentItems = itemsRef.current;

    const setup = async () => {
      // Wait for fonts to load so widths/offsets are correct (prevents overlap)
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (!isMounted) return;

      // Safety check: ensure elements exist and filter out nulls
      if (!currentItems || currentItems.length === 0) return;
      const validItems = currentItems.filter(item => item !== null && item !== undefined);
      if (validItems.length === 0) return;

      // Clear ONLY animation properties (preserve xPercent - horizontalLoop needs it!)
      validItems.forEach(item => {
        if (item && item._gsap) {
          gsap.set(item, { clearProps: "x,y,rotation,scale,opacity" });
        }
      });

      // Create horizontal looping timeline
      tl = horizontalLoop(currentItems, {
        repeat: -1,
        paddingRight: 30,
        reversed: reverse,
      });

      // Add scroll-reactive speed control
      // Marquee speeds up when user scrolls, then returns to normal
      observer = Observer.create({
        onChangeY(self) {
          if (!tl) return; // Safety check
          
          let factor = 2.5;
          
          // Reverse direction based on scroll direction and reverse prop
          if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
            factor *= -1;
          }
          
          // Animate speed change: fast acceleration, then slow deceleration
          gsap
            .timeline({
              defaults: { ease: "none" },
            })
            .to(tl, { 
              timeScale: factor * 2.5,  // Speed up to 6.25x
              duration: 0.2,             // Quick acceleration
              overwrite: true 
            })
            .to(tl, { 
              timeScale: factor / 2.5,  // Slow down to normal
              duration: 1                // Gradual deceleration
            }, "+=0.3");                 // After 0.3s delay
        },
      });
    };

    setup();

    // Cleanup function to prevent memory leaks and remove old animations
    return () => {
      isMounted = false;
      
      // Kill observer first
      if (observer) {
        observer.kill();
        observer = null;
      }
      
      // Kill timeline
      if (tl) {
        tl.kill();
        tl = null;
      }
      
      // Clear ONLY animation properties (preserve xPercent - horizontalLoop needs it!)
      // Only clear properties if elements exist AND have GSAP properties
      if (currentItems && currentItems.length > 0) {
        currentItems.forEach(item => {
          if (item && item._gsap) {
            try {
              gsap.set(item, { clearProps: "x,y,rotation,scale,opacity" });
            } catch (e) {
              // Silently fail if element is no longer in DOM
              console.debug("Failed to clear GSAP props:", e);
            }
          }
        });
      }
    };
    // Note: itemsRef intentionally not in deps - refs are stable and shouldn't trigger re-runs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, reverse]);
}

