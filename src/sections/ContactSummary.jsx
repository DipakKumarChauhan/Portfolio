import { useRef, useMemo } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FiSquare } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  
  // Memoize arrays to prevent recreation on every render (prevents marquee resets)
  const items = useMemo(() => {
    const baseItems = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
    return Array(3).fill(baseItems).flat(); // Repeat 3 times = 15 items
  }, []);
  
  const items2 = useMemo(() => 
    Array(16).fill("let's connect"),
    []
  );

  // Pinning: section scroll ke dauran screen par fixed rehta hai for impact
  
  useGSAP(() => {
   const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=1000 top",
      pin: true,
      pinSpacing: true,
      markers: true, // 🔍 DEBUG MODE: Shows pin start/end markers on screen
    });
    return () => st.kill();
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12  relative z-50"
      style={{ willChange: 'auto' }}
    >
      {/* Top marquee: values/traits */}
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        {/* Center quote: bold/italic emphasis */}
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
           application <span className="text-gold">together</span> “
        </p>
      </div>
      {/* Bottom marquee: CTA to contact */}
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        Icon={FiSquare}
  iconClassName="text-[#C9A227]"
      />
    </section>
  );
};

export default ContactSummary;