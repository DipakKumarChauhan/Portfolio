import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import SafeIcon from "../utils/SafeIcon";
import gsap from "gsap";

const Contact = () => {
  // Section description text (CTA style)
  const text = `Got a question, how or project Idea?
    I'd love to hear from you and discus further!`;
  // Marquee ke items: repeating text for footer strip (optimized with Array.fill)
  const items = Array(5).fill("just imagin, I code");
  // GSAP: social links ko scroll par slide-up + fade-in effect dena
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        {/* Heading + paragraph (white theme) */}
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        {/* Contact details: email, mobile, social links */}
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
              dipakofficialcse@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Mobile</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +91 7439357350
              </p>
            </div>
            
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => {
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200 flex items-center gap-1"
                    >
                      <SafeIcon 
                        Icon={social.Icon} 
                        iconName={`social-${social.name}`}
                        className="text-2xl"
                        fallback={<span className="text-xs">{"{"}
                          {social.name}
                          {"}"}</span>}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom marquee: subtle brand/tagline motion */}
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;