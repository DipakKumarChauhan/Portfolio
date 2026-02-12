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

// Loading fallback - shows while lazy sections load
const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      <p className="text-white/50 text-sm">Loading section...</p>
    </div>
  </div>
);


////////////////////////////////// Main App.jsx File ///////////////////////////////////////

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  // Loader: wait for 3D assets OR timeout after 2 seconds
  useEffect(() => {
    // If 3D assets loaded, show content
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsReady(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
    
    // Fallback: Show content after 2 seconds even if progress stuck
    const fallbackTimeout = setTimeout(() => {
      if (!isReady) {
        console.log('Loader timeout - showing content');
        setIsReady(true);
      }
    }, 2000);
    
    return () => clearTimeout(fallbackTimeout);
  }, [progress, isReady]);

  // Preload lazy sections after app is ready (helps with first load)
  useEffect(() => {
    if (isReady) {
      // Preload sections progressively
      const preloadTimers = [
        setTimeout(() => {
          import('./sections/ServiceSummary').catch(console.error);
          import('./sections/Services').catch(console.error);
        }, 100),
        setTimeout(() => {
          import('./sections/About').catch(console.error);
          import('./sections/Works').catch(console.error);
        }, 500),
        setTimeout(() => {
          import('./sections/ContactSummary').catch(console.error);
          import('./sections/Contact').catch(console.error);
        }, 1000),
      ];
      
      return () => preloadTimers.forEach(clearTimeout);
    }
  }, [isReady]);
  return (
    
    // ReactLenis root: poori app par smooth scrolling apply hota hai
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      {/* Loading screen with fallback */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress || 0)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress || 0}%` }}
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