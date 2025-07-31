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
           We build robust software solutions that empower businesses to achieve new heights of productivity and innovation.
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

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const mouse = { x: width / 2, y: height / 2 };
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);
        
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = 2;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'hsla(var(--primary), 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                if (!ctx) return;
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 100;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }
        }

        let particles: Particle[] = [];
        const init = () => {
            particles = [];
            const gap = 20;
            for (let y = 0; y < height; y += gap) {
                for (let x = 0; x < width; x += gap) {
                    particles.push(new Particle(x, y));
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            for (const particle of particles) {
                particle.update();
                particle.draw();
            }
            requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};
