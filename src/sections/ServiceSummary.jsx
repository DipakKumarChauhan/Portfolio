import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = ({ onReady }) => {
  // Notify parent when component is mounted and ready
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // Horizontal parallax-style motion: headings scroll ke sath x-axis par move hote hain
  useGSAP(() => {
    gsap.to('#title-service-1', {
      xPercent: 40,
      scrollTrigger: {
        trigger: '#title-service-1',
        scrub: 3, // scrub: scroll tied animation
      },
    });
    gsap.to('#title-service-2', {
      xPercent: -25,
      scrollTrigger: {
        trigger: '#title-service-1',
        scrub: 3,
      },
    });
    gsap.to('#title-service-3', {
      xPercent: 20,
      scrollTrigger: {
        trigger: '#title-service-1',
        scrub: 2,
      },
    });
    
  });

  return (
    <section className="mt-10 overflow-hidden font-light leading-snug text-center mb-20 contact-text-responsive">
      <div id="title-service-1">
        <p>Architecture</p>
      </div>

      <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16">
        <p className="font-normal">Code</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>APIs</p>
         <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>System</p>
      </div>

      <div id="title-service-3" className="flex items-center justify-center gap-3 translate-x-0">
        <p className="font-normal">Scale</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Deploy</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Serve</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
