"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "./animate-on-scroll";
import React, { useRef, useEffect } from "react";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <AnimateOnScroll className="fade-in-up">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            ProEdge Innovations
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-200">
          <p
            className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl"
          >
            Innovating for a Smarter Future. Engineering Excellence, Driving Progress.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-400">
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/50">
              <Link href="/contact">
                Contact Us <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
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

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    const mouse = { x: width / 2, y: height / 2 };
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 1;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > width || this.x < 0) this.vx *= -1;
        if (this.y > height || this.y < 0) this.vy *= -1;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * 1;
            this.y += Math.sin(angle) * 1;
        }
      }
      draw() {
        ctx!.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim();
        ctx!.globalAlpha = 0.5;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const particles = Array.from({ length: 150 }, () => new Particle());

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      
      ctx!.fillStyle = `hsl(${bgColor})`;
      ctx!.fillRect(0,0,width,height);
      
      const gradient = ctx!.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsla(${primaryColor}, 0.1)`);
      gradient.addColorStop(1, `hsla(${bgColor}, 0.1)`);
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 100){
                ctx!.beginPath();
                ctx!.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim();
                ctx!.lineWidth = 0.2;
                ctx!.globalAlpha = (100 - dist) / 100;
                ctx!.moveTo(particles[i].x, particles[i].y);
                ctx!.lineTo(particles[j].x, particles[j].y);
                ctx!.stroke();
            }
        }
      }

      requestAnimationFrame(animate);
    }
    animate();
    
    return () => {
        window.removeEventListener('mousemove', ()=>{});
        window.removeEventListener('resize', ()=>{});
    }

  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};
