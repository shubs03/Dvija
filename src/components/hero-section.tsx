"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "./animate-on-scroll";
import React, { useRef, useEffect, useState } from "react";
import createGlobe from "cobe";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const x = mousePosition.x;
  const y = mousePosition.y;

  const rotateX = y ? (y - window.innerHeight / 2) / (window.innerHeight / 2) * -15 : 0;
  const rotateY = x ? (x - window.innerWidth / 2) / (window.innerWidth / 2) * 15 : 0;
  
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <AnimateOnScroll className="fade-in-up">
           <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            style={{ 
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.3s ease-out'
             }}
          >
            ProEdge Innovations
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-200">
          <p
            className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl"
          >
           We build robust software solutions that empower businesses to achieve new heights of productivity and innovation.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-400">
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glowing-btn">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/50 glowing-btn">
              <Link href="/contact">
                Contact Us <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-20 bg-border/50"></div>
      </div>
    </section>
  );
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1.1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.2, 0.2],
      markers: [],
       onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          phi += 0.005
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    setTimeout(() => canvasRef.current!.style.opacity = '1');

    return () => globe.destroy();
  }, []);

  return <canvas 
    ref={canvasRef} 
    onPointerDown={(e) => {
      // @ts-ignore
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
      canvasRef.current!.style.cursor = 'grabbing';
    }}
    onPointerUp={() => {
      pointerInteracting.current = null;
      canvasRef.current!.style.cursor = 'grab';
    }}
    onPointerOut={() => {
      pointerInteracting.current = null;
      canvasRef.current!.style.cursor = 'grab';
    }}
    onMouseMove={(e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        // @ts-ignore
        pointerInteractionMovement.current = delta / 200;
      }
    }}
    onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
             // @ts-ignore
            pointerInteractionMovement.current = delta / 100;
        }
    }}
    style={{
      width: '100%',
      height: '100%',
      contain: 'layout paint size',
      opacity: 0,
      transition: 'opacity 1s ease',
      cursor: 'grab'
    }}
  />;
};
