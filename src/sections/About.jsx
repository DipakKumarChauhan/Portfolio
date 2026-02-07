import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLInes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  // Intro lines: section ke liye short context text
  const text = `I’m someone who enjoys connecting logic with imagination — blending structure with creativity to make ideas come alive. For me, technology is not just problem-solving, it is a canvas to think differently.`;
  // Detailed about: line-by-line animate hoga
  const aboutText = `At my core, I am driven by curiosity. Whether it is exploring how systems work, simplifying complexity, or finding new ways to approach challenges, I see learning as a journey rather than a checkbox. I like to keep things simple, yet meaningful — building not just with code, but with perspective. My goal is to grow into someone whose work speaks louder than words.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    // Section par subtle scale effect while scrolling
    gsap.to("#about", {
      scale: 0.98,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        duration:1,
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
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
