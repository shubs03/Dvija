"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "./animate-on-scroll";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export function HeroSection() {

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
            <Globe />
        </div>
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-sm z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0"></div>


      <div className="container mx-auto px-4 z-10 text-center">
        <AnimateOnScroll className="fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            ProEdge Innovations
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-200">
          <p
            className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl"
          >
            Innovating for a Smarter Future. Engineering Excellence, Driving Progress.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-400">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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


function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const locationToAngles = (lat: number, long: number) => {
    return [Math.PI / 180 * (lat - 90), Math.PI / 180 * (long + 90)]
  }
  const [currentPhi, setCurrentPhi] = useState(0);

  useEffect(() => {
    let phi = currentPhi;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    if(!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251/255, 100/255, 21/255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.0060], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        setCurrentPhi(phi);
        state.width = width * 2
        state.height = width * 2
      }
    })
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center">
        <canvas
            ref={canvasRef}
            className="w-full h-full"
        />
    </div>
  )
}