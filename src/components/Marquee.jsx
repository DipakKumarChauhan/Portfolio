import React, { useRef } from "react";
import { PiStarFourFill } from 'react-icons/pi';
import SafeIcon from "../utils/SafeIcon";
import { useMarqueeAnimation } from "../hooks/useMarqueeAnimation";

/**
 * Horizontal marquee component with scroll-reactive animation
 * 
 * Creates an infinite horizontal scrolling marquee that reacts to user scroll.
 * The animation speeds up when scrolling and returns to normal when idle.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of text items to display in marquee
 * @param {string} [props.className="text-white bg-black"] - Additional CSS classes for styling
 * @param {React.Component} [props.Icon=PiStarFourFill] - Icon component to display between items
 * @param {string} [props.iconClassName=""] - CSS classes for icon styling
 * @param {boolean} [props.reverse=false] - Reverse animation direction
 * 
 * @example
 * <Marquee 
 *   items={["Item 1", "Item 2", "Item 3"]} 
 *   reverse={false}
 *   className="text-black bg-white"
 *   Icon={FiStar}
 *   iconClassName="text-gold"
 * />
 */
const Marquee = ({
  items,
  className = "text-white bg-black",
  Icon = PiStarFourFill,
  iconClassName = "",
  reverse = false,
}) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // Setup marquee animation with scroll reactivity
  useMarqueeAnimation({ itemsRef, items, reverse });
  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div className="flex flex-nowrap">
        {items.map((text, index) => (
          <span
            key={`${text}-${index}`}
            ref={(el) => (itemsRef.current[index] = el)}
            className="flex items-center px-16 gap-x-32 shrink-0 whitespace-nowrap"
          >
            {text} <SafeIcon Icon={Icon} iconName={`marquee-icon-${index}`} className={iconClassName} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;