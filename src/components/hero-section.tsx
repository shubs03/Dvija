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
      <div className="absolute inset-0 z-0 bg-[#0a192f]">
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
            Dvija Softech
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-200">
          <p
            className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl"
          >
           We build intuitive software solutions that empower businesses in the service, agriculture, and education sectors to achieve new heights.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-400">
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glowing-btn">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent glowing-btn">
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.onresize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const stars: {x: number, y: number, z: number}[] = [];
    const numStars = 800;

    for (let i = 0; i < numStars; i++) {
      stars[i] = {
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      };
    }
    
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX - width/2;
        mouseY = e.clientY - height/2;
    };
    document.addEventListener('mousemove', handleMouseMove);


    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'hsla(222, 47%, 11%, 1)';
      ctx.fillRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      
      const speed = 0.5;

      stars.forEach(star => {
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }
        
        const k = 128.0 / star.z;
        const px = star.x * k + mouseX / 8;
        const py = star.y * k + mouseY / 8;

        if (px >= -width/2 && px <= width/2 && py >= -height/2 && py <= height/2) {
          const size = (1 - star.z / width) * 4;
          const shade = parseInt(((1 - star.z / width) * 255).toString());
          ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
          ctx.beginPath();
          ctx.arc(px, py, size/2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.restore();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', handleMouseMove);
      window.onresize = null;
    };
  }, []);

  return <canvas 
    ref={canvasRef} 
    style={{
      width: '100%',
      height: '100%',
      contain: 'layout paint size',
    }}
  />;
};
