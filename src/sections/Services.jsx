import React, { use, useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { serviceData } from "../constants";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive';

// Services: offerings list with scroll-triggered reveal animations
// ScrollTrigger + sticky cards: har card viewport top par stick hoti feel deti hai

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const text = `I Am AI, Deep Learning, Machine Learning Enthusiast.
  I am also a Web Developer with more hands-on experience on Backend.
  I love to work on new and exciting projects.`;

  const serviceRef = useRef([]);
  const isDesktop = useMediaQuery({minWidth: "48rem"});
  useGSAP(() => {
    serviceRef.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black ">
      <AnimatedHeaderSection 
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={""}
        textColor={"text-white"}
        withScrollTrigger={false}
      />

      {serviceData.map((service, index) => (
        <div
          ref={(el) => (serviceRef.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 top-0"
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              {/* Service title */}
              <h2 className="text-3xl lg:text-4xl font-bold">
                {service.title}
              </h2>

              {/* Service description */}
              <p className="text-lg leading-relaxed tracking-wide lg:text-xl text-white/60 text-pretty">
                {service.description}
              </p>

              {/* Nested items */}
              <div className="flex flex-col gap-4">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex items-start text-xl font-semibold">
                      <span className="mr-4 text-white/30 text-base font-mono">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>

                    {/* Item description */}
                    <p className="ml-9 text-sm text-white/50">
                      {item.description}
                    </p>

                    {/* Divider except last */}
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-3 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Services
