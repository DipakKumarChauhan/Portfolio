import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";
import SafeIcon from "../utils/SafeIcon";

const Works = ({ onReady }) => {
  // Notify parent when component is mounted and ready
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `A collection of projects I built while exploring new concepts, each one marking a step forward in my growth as a developer.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef((val) => val);
  const moveY = useRef((val) => val);

    // Cursor se attached preview image: motion ko smooth rakhne ke liye quickTo use kiya
  useGSAP(() => {
    gsap.set(previewRef.current, { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    // Project rows ka fade/slide-in on scroll
    gsap.from(".project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".project",
        start: "top 80%",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    if (projects[index].image) {
      gsap.to(previewRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    // Increase offset to prevent obscuring links
    mouse.current.x = e.clientX + 150;
    mouse.current.y = e.clientY + 24;
    if (typeof moveX.current === "function") moveX.current(mouse.current.x);
    if (typeof moveY.current === "function") moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen relative mb-16">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0 project" // z-index lower than the ContactSummary
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >

            {/* title + link to project */}
            {/* <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <FiArrowUpRight className="md:size-6 size-5" />
            </div> */}

            {/* This is a Test Title  */}
            
            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <div className="flex items-center gap-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-colors duration-300"
                  >
                    <span>Live</span>
                    <SafeIcon 
                      Icon={FiArrowUpRight} 
                      iconName="live-link-arrow"
                      className="size-4"
                    />
                  </a>
                )}
                <a 
                  href={project.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-colors duration-300"
                >
                  <span>GitHub</span>
                  <SafeIcon 
                    Icon={FiArrowUpRight} 
                    iconName="github-link-arrow"
                    className="size-4"
                  />
                </a>
              </div>
            </div>


            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* framework badges */}
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black/60"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview hidden for now */}
          </div>
        ))}
        {/* desktop floating preview */}
        <div
          ref={previewRef}
          className="fixed top-0 left-0 pointer-events-none z-[999] w-[400px] aspect-video overflow-hidden border-4 border-black bg-white opacity-0 shadow-2xl"
        >
          {currentIndex !== null && projects[currentIndex].image && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
