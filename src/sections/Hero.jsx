
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/all';
import { Planet } from '../components/Planet';
import { Environment, Lightformer } from '@react-three/drei';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

// GSAP ScrollTrigger: scroll ke sath animations control karne ke liye
// React Three Fiber + drei: 3D scene banane ke liye

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 853px)' });

    // Header ke neeche intro text (short bio)
    const text =  `I Am AI,Deep Learning , Machine Learning Enthusiast.
                                I am also a Web Developer with more handson experience on Backend.
                                I love to work on new and exciting projects.`;
        

   
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
        {/* AnimatedHeaderSection: title/subtitle + animated paragraph */}
        <AnimatedHeaderSection subTitle={"404 No Bugs Found"}
         title = {"Dipak Kumar Chauhan"}
          text = {text} 
          textColor = {"text-black"}/>

        {/* Background 3D canvas: planet with lights and subtle motion */}
        <figure className='absolute inset-0 -z-50' style = {{width:"100vw" , height:"100vh"}}>
        <Canvas shadows camera = {{ position:[0,0,-10], fov:17.5,near:1,far:20}}>
            {/* Ambient + directional lights: scene ko illuminate karne ke liye */}
            <ambientLight intensity={0.5}/>
            <directionalLight 
                castShadow
                position={[10,10,5]} 
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10,0,-20]} intensity={0.5}/>
            <pointLight position={[0,-10,0]} intensity={1.5}/>
            {/* Float: object ko halka sa bobbing/rotation motion deta hai */}
            <Float speed = {0.5}>
            <Planet/>
            </Float>
            {/* Environment + Lightformer: fancy lighting reflections ke liye */}
            <Environment resolution = {256}>
                <group rotation = {[-Math.PI/3,4,1]} >
                    <Lightformer
                    form= {"circle"}
                    intensity={2}
                    position={[0,5,-9] }
                    scale={10}
                    />
                    <Lightformer
                    form= {"circle"}
                    intensity={2}
                    position={[0,3,1] }
                    scale={10}
                    />
                    <Lightformer
                    form= {"circle"}
                    intensity={2}
                    position={[-5,-1,-1] }
                    scale={10}
                    />
                    <Lightformer
                    form= {"circle"}
                    intensity={2}
                    position={[10,1,0] }
                    scale={16}
                    />
                    
                </group>
            </Environment>
        </Canvas>
        </figure>
    </section>
  )
}

export default Hero