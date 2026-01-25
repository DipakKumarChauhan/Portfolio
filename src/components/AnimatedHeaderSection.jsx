
import React, { useRef } from 'react'
import { AnimatedTextLines } from './AnimatedTextLInes';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

// AnimatedHeaderSection: heading + animated paragraph section
// withScrollTrigger true hoga toh scroll par animation trigger hogi
const AnimatedHeaderSection = ({subTitle,title,text,textColor, withScrollTrigger = false}) => {
     const contextRef = useRef(null);
        const headerRef = useRef(null);   
        
        // GSAP timeline: container slide-in, phir header fade/slide
        useGSAP(()=>{
           const tl = gsap.timeline({
            scrollTrigger:withScrollTrigger ? {
                trigger:contextRef.current,
                start:"top 80%",
            } : undefined,
           });
           tl.from(contextRef.current,{
            y:"50vh",
            duration:1,
            ease:"circ.out",
           });
    
             tl.from(headerRef.current,{
                opacity:0,
                y:"200",
                duration:1,
                ease:"circ.out",
             
             },"<+0.2");
    
        },[]);
  return (
    <div ref = {contextRef}>
                <div style = {{clickPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
                    <div ref = {headerRef} className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
                        <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`} >{subTitle}</p>
                        <div className='px-10'>
                            <h1
                            className={`flex flex-col  flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block`} 
                            >{title}</h1>  {/*Name in the Middle is Defined here*/}
                        </div>
                    </div>
                </div>
                <div className={`relative px-10 ${textColor}`}>
                    <div className='absolute inset-x-0 border-t-2'/>
                    <div className='py-12 sm:py-16 text-end'>
                        {/* AnimatedTextLines: text ko line-by-line animate karta hai */}
                        <AnimatedTextLines text = {text} className={`font-light uppercase value-text-responsive ${textColor}`}/>
                            
                    </div>
                    
                </div>
            </div>
  )
}

export default AnimatedHeaderSection