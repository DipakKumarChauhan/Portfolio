import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { useState, useEffect } from 'react'
import { useProgress } from "@react-three/drei";
import { ReactLenis } from 'lenis/react'
import { Suspense, lazy } from 'react'; // Implementing Lazy loading
import ErrorBoundary from './utils/ErrorBoundary'


// Lenis smooth scrolling: page scroll ko buttery smooth banata hai
// useProgress: 3D assets (GLTF) load hone ka progress deta hai

// Lazy Loading
const ServiceSummary = lazy(() => import('./sections/ServiceSummary'));
const Services = lazy(() => import('./sections/Services'));
const About = lazy(() => import('./sections/About'));
const Works = lazy(() => import('./sections/Works'));
const ContactSummary = lazy(() => import('./sections/ContactSummary'));
const Contact = lazy(() => import('./sections/Contact'));

// Loading fallback
const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <p className="text-white/50">Loading section...</p>
  </div>
);


////////////////////////////////// Main App.jsx File ///////////////////////////////////////

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [fakeProgress, setFakeProgress] = useState(50) // Pehle hi user ko max progress dikha do taaki esa lage ki website jaldi load ho rahi hai

  // Jab loading 100% ho jaye, tab content dikhana start karte hain
  useEffect(() => {
    if (progress < 100) {
    setFakeProgress(p => Math.min(p + 0.5, 95));
  } else {
    setFakeProgress(100);
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
            Loading {Math.floor(fakeProgress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${fakeProgress}%` }}
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
      <ErrorBoundary componentName="Navbar">
        <Navbar/>
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Hero">
        <Hero/>
      </ErrorBoundary>
      
      {/* Lazy load heavy sections */}
      <ErrorBoundary componentName="ServiceSummary">
        <Suspense fallback={<SectionFallback />}>
          <ServiceSummary/>  
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Services">
        <Suspense fallback={<SectionFallback />}>
          <Services/> 
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary componentName="About">
        <Suspense fallback={<SectionFallback />}>
          <About/>
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Works">
        <Suspense fallback={<SectionFallback />}>
          <Works/>
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary componentName="ContactSummary">
        <Suspense fallback={<SectionFallback />}>
          <ContactSummary/>
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Contact">
        <Suspense fallback={<SectionFallback />}>
          <Contact/>
        </Suspense>
      </ErrorBoundary>
      </div>

    </ReactLenis>
  )
}

export default App