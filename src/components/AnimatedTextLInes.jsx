import React, { useRef } from 'react'
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

// Lines ko split karke line-by-line animate karte hain (staggered reveal)

gsap.registerPlugin(ScrollTrigger);
export const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter(line => line.trim() !== "");

  useGSAP(()=>{
    if(lineRefs.current.length > 0){
        gsap.from(lineRefs.current, {
            y:100,
            opacity: 0 ,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger: {
                trigger: containerRef.current,
            }
        })
    //   gsap.set(lineRefs.current, {y:20, autoAlpha:0});
    //   gsap.to(lineRefs.current,{});
  }})

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span key = {index} 
        ref = {(el)=>(lineRefs.current [index] = el)}
        className='block leading-relaxed tracking-wide
        text-pretty'>{line}</span>
      ))}
    </div>
  );
};
