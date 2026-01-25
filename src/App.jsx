import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import About from './sections/About'
import Works from './sections/Works'
import ContactSummary from './sections/ContactSummary'
import Contact from './sections/Contact'
import { useState, useEffect } from 'react'
import { useProgress } from "@react-three/drei";
import { ReactLenis } from 'lenis/react'

// Lenis smooth scrolling: page scroll ko buttery smooth banata hai
// useProgress: 3D assets (GLTF) load hone ka progress deta hai

////////////////////////////////// Main App.jsx File ///////////////////////////////////////


const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  // Jab loading 100% ho jaye, tab content dikhana start karte hain
  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);
  return (
    
    // ReactLenis root: poori app par smooth scrolling apply hota hai
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      {/* Jab tak assets load ho rahe, simple loader dikhao */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
      {/* Neeche saari page sections render ho rahi hain */}
      <Navbar/>
      <Hero/>
      <ServiceSummary/>  
      <Services/> 
      <About/>
      <Works/>
      <ContactSummary/>
      <Contact/>
      </div>

    </ReactLenis>
  )
}

export default App