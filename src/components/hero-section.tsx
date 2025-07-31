"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "./animate-on-scroll";

const taglines = [
  "Innovating for a Smarter Future.",
  "Engineering Excellence, Driving Progress.",
  "Your Partner in Digital Transformation.",
];

export function HeroSection() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isTaglineVisible, setIsTaglineVisible] = useState(true);

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setIsTaglineVisible(false);
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsTaglineVisible(true);
      }, 500); // fade out duration
    }, 4000);

    return () => {
      clearInterval(taglineInterval);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        poster="https://placehold.co/1920x1080.png"
      >
        <source src="https://studiocdn.prod.web.prod.gcp.firebase.dev/assets/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80 backdrop-blur-sm z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-0"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <AnimateOnScroll className="fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            ProEdge Innovations
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-200">
          <p
            className={cn(
              "mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl transition-opacity duration-500",
              isTaglineVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {taglines[currentTaglineIndex]}
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
