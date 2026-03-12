import { socials } from '../constants';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { Link } from 'react-scroll';
import { FiArrowUpRight } from 'react-icons/fi';
import SafeIcon from '../utils/SafeIcon';

const Navbar = () => {
    const navRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const tl = useRef(null);
    const iconTl = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true);

    // GSAP Animations setup: navbar right se slide-in + links/contact fade-in
    useGSAP(() => {
        gsap.set(navRef.current, { xPercent: 100 }); // Navbar ko off-screen start karna
        gsap.set([linksRef.current, contactRef.current], {
            autoAlpha: 0, // opacity 0 + visibility hidden
            x: -20, // thoda left shift for slide-in
        }); // Links aur contact info ke liye initial state

        tl.current = gsap
            .timeline({ paused: true }).to(navRef.current, {
                xPercent: 0, // Original position par aao
                duration: 0.5,
                ease: "power3.Out"
            }) // Navbar slide-in
            .to(linksRef.current, {
                autoAlpha: 1, // Fade in
                x: 0, // Original position
                stagger: 0.1, // Har link thoda delay se
                duration: 0.5,
                ease: "power2.Out",

            },
                "<" // Pichle animation ke sath start karo
            ).to(contactRef.current, {
                autoAlpha: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.Out",
            }, "<+0.2");

        // Burger icon lines ko cross me animate karna
        iconTl.current = gsap
            .timeline({ paused: true })
            .to(topLineRef.current, {
                rotate: 45,
                y: 3.3,
                duration: 0.5,
                ease: "power2.inOut",
            })
            .to(bottomLineRef.current, {
                rotate: -45,
                y: -3.3,
                duration: 0.3,
                ease: "power2.inOut",
            }, "<");


    }, []); // Mount par sirf ek baar run kare

    // Scroll par burger button hide/show logic
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handelScroll = () => {
            const currentScrollY = window.scrollY;
            // Don't hide burger if navbar is open
            if (!isOpen) {
                setShowBurger(lastScrollY > currentScrollY || currentScrollY < 10);
            }
            lastScrollY = currentScrollY;
        }
        window.addEventListener("scroll", handelScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handelScroll);
        }
    }, [isOpen]);

    // Toggle menu: open hoga toh play, close hoga toh reverse
    const toggleMenu = () => {
        if (isOpen) {
            tl.current.reverse();
            iconTl.current.reverse();
        } else {
            tl.current.play();
            iconTl.current.play();
        }
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav
                ref={navRef}
                className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
                <div className='flex flex-col text-3xl gap-y-2 md:text-4xl lg:text-6xl'>
                    {(["home", "services", "about", "work", "contact"]).map((section, index) => (
                        <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                            <Link
                                className="transition-all duration-300 cursor-pointer hover:text-white  "
                                to={`${section}`}
                                smooth
                                offset={0}
                                duration={2000}
                                onClick={toggleMenu}
                            >
                                {section}
                            </Link>
                        </div>
                    ))}
                </div>
                <div
                    ref={contactRef}
                    className='flex flex-row flex-nowrap items-start justify-between gap-6 md:gap-8'
                >
                    <div className='font-light'>
                        <p className='tracking-wider text-white/60'>Resume</p>
                        <a
                            href="https://drive.google.com/file/d/1PcpSMbXV9pRoSaC7DNeY2GJ0myJ6l7UI/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 text-lg tracking-widest hover:text-white transition-colors duration-200'>
                            View
                            <FiArrowUpRight className="size-4 md:size-5" />
                        </a>
                    </div>
                    <div>
                        <p className='tracking-wider text-white/50'>Social Media</p>
                        <div className='flex flex-row flex-nowrap items-center gap-4 md:gap-8'>
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
                                            iconName={`navbar-social-${social.name}`}
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
            </nav>
            <div className={`fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-400 rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10 ${isOpen ? 'bg-black' : 'bg-white'}`}
                onClick={toggleMenu}
                style={showBurger ?
                    { clipPath: "circle(50.3% at 50% 50%)", ...(isOpen ? {} : { mixBlendMode: "difference" }) }
                    : { clipPath: "circle(0% at 50% 50%)", ...(isOpen ? {} : { mixBlendMode: "difference" }) }}>
                {/* Burger icon lines: GSAP se rotate/translate hote hain */}
                <span
                    ref={topLineRef}
                    className={`block w-8 h-0.5 rounded-full origin-venter ${isOpen ? 'bg-white' : 'bg-black'}`}>

                </span>
                <span
                    ref={bottomLineRef}
                    className={`block w-8 h-0.5 rounded-full origin-venter ${isOpen ? 'bg-white' : 'bg-black'}`}>

                </span>
            </div>
        </>


    )
}

export default Navbar