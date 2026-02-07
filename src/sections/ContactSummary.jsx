import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
    "let's connect",
  ];

  // Pinning: section scroll ke dauran screen par fixed rehta hai for impact
  
  useGSAP(() => {
   ScrollTrigger.create({
      trigger: containerRef.current,
      start: "center center",
      end: "+=800 center",
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      markers: false,
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
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
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;

// import { useRef } from "react";
// import Marquee from "../components/Marquee";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// // FIX #1: Import ScrollTrigger plugin - required for pinning functionality
// import { ScrollTrigger } from "gsap/all";

// // FIX #2: Register ScrollTrigger plugin - without this, pinning won't work at all
// gsap.registerPlugin(ScrollTrigger);

// const ContactSummary = () => {
//   const containerRef = useRef(null);
  
//   // FIX #3: Tripled items array to ensure seamless looping
//   // Original 5 items were too few, causing visible gaps in the marquee
//   // Need enough items to fill screen width + extra for smooth loop
//   const items = [
//     "Innovation",
//     "Precision",
//     "Trust",
//     "Collaboration",
//     "Excellence",
//     "Innovation",
//     "Precision",
//     "Trust",
//     "Collaboration",
//     "Excellence",
//     "Innovation",
//     "Precision",
//     "Trust",
//     "Collaboration",
//     "Excellence",
//   ];
  
//   // FIX #4: Increased items2 array from 5 to 16 items
//   // More items prevent the "stuck item" visual bug in the second marquee
//   const items2 = [
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//     "let's connect",
//   ];

//   // Pinning: section scroll ke dauran screen par fixed rehta hai for impact
//   useGSAP(() => {
//     // REMOVED: Empty gsap.to() animation that did nothing
//     // Reason: gsap.to() without properties to animate is useless
//     // gsap.to(containerRef.current, {
//     //   scrollTrigger: {
//     //     trigger: containerRef.current,
//     //     start: "center center",
//     //     end: "+=800 center",
//     //     scrub: 0.5,
//     //     pinSpacing: true,
//     //     markers: false,
//     //   },
//     // });
    
//     // FIX #5: Use ScrollTrigger.create() for pinning functionality
//     // This properly pins the section during scroll as intended
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "center center",
//       end: "+=800 center",
//       pin: true, // ADDED: This actually enables pinning
//       pinSpacing: true,
//       scrub: 0.5,
//       markers: false,
//     });
//   }, []);
  
//   return (
//     <section
//       ref={containerRef}
//       className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
//     >
//       {/* Top marquee: values/traits */}
//       <Marquee items={items} />
//       <div className="overflow-hidden font-light text-center contact-text-responsive">
//         {/* Center quote: bold/italic emphasis */}
//         <p>
//           " Let's build a <br />
//           <span className="font-normal">memorable</span> &{" "}
//           <span className="italic">inspiring</span> <br />
//            application <span className="text-gold">together</span> "
//         </p>
//       </div>
//       {/* Bottom marquee: CTA to contact */}
//       <Marquee
//         items={items2}
//         reverse={true}
//         className="text-black bg-transparent border-y-2"
//         iconClassName="stroke-gold stroke-2 text-primary"
//         icon="material-symbols-light:square"
//       />
//     </section>
//   );
// };

// export default ContactSummary;