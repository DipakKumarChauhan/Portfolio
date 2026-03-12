import { useRef, useEffect } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLInes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";

const About = ({ onReady }) => {
  // Notify parent when component is mounted and ready
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // Intro lines: section ke liye short context text
  const text = `I’m someone who enjoys connecting logic with imagination — blending structure with creativity to make ideas come alive. For me, technology is not just problem-solving, it is a canvas to think differently.`;
  // Detailed about: line-by-line animate hoga
  const aboutText = `At my core, I am driven by curiosity. Whether it is exploring how systems work, simplifying complexity, or finding new ways to approach challenges, I see learning as a journey rather than a checkbox. I like to keep things simple, yet meaningful — building not just with code, but with perspective. My goal is to grow into someone whose work speaks louder than words.`;
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Section par subtle scale effect while scrolling
    gsap.to("#about", {
      scale: 0.98,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        duration: 1,
        markers: false,
      },
      ease: "power1.inOut",
    });

    // Image reveal: bottom-to-top clipPath animation
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });

    // Resume button entrance animation
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
      },
      delay: 0.5,
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black">
      {/* Heading + animated paragraph (white theme) */}
      <AnimatedHeaderSection
        subTitle={"A curious mind crafting creative code to turn ideas into impact"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {/* Image + about text lines */}
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/Dipak_pic.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <div className="flex flex-col gap-10 w-full">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          <div ref={buttonRef}>
            <a
              href="https://drive.google.com/file/d/1PcpSMbXV9pRoSaC7DNeY2GJ0myJ6l7UI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:px-12 md:py-6 md:text-xl"
            >
              <span className="relative z-10 transition-colors duration-300">
                View My Resume
              </span>
              <FiArrowUpRight className="relative z-10 text-2xl transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
