"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "./animate-on-scroll";
import React, { useRef, useEffect, useState } from "react";

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
  const [stars, setStars] = useState<any[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const numStars = 1000;
  const starRadius = '0.' + Math.floor(Math.random() * 9) + 1;
  const cRadius = 100;
  
  const focalLength = 500;
  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  let speed = 2;


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    const onResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', onResize);
    onResize();

    let tempStars: any[] = [];
    for (let i = 0; i < numStars; i++) {
      tempStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * window.innerWidth
      });
    }
    setStars(tempStars);

    const handleMouseMove = (e: MouseEvent) => {
        setMouse({x: e.clientX, y: e.clientY});
    }
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        tempStars.forEach(star => {
            star.z -= speed;

            if (star.z <= 0) {
                star.x = Math.random() * canvas.width;
                star.y = Math.random() * canvas.height;
                star.z = canvas.width;
            }

            const scale = focalLength / (focalLength + star.z);
            const r = parseFloat(starRadius) * scale;
            const x = (star.x - centerX) * scale + centerX;
            const y = (star.y - centerY) * scale + centerY;

            // Interaction with mouse
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < cRadius) {
                 const newX = (x-mouse.x) * (cRadius/distance) + mouse.x;
                 const newY = (y-mouse.y) * (cRadius/distance) + mouse.y;
                 context.lineTo(newX, newY);
            }

            context.beginPath();
            context.arc(x, y, r, 0, Math.PI * 2);
            context.fillStyle = 'hsl(var(--primary))';
            context.fill();
        })
        animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  return <canvas 
    ref={canvasRef} 
    style={{
      width: '100%',
      height: '100%',
      contain: 'layout paint size',
    }}
  />;
};