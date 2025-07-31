"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

const taglines = [
  "Innovating for a Smarter Future.",
  "Engineering Excellence, Driving Progress.",
  "Your Partner in Digital Transformation.",
];

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isTaglineVisible, setIsTaglineVisible] = useState(true);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const taglineInterval = setInterval(() => {
      setIsTaglineVisible(false);
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsTaglineVisible(true);
      }, 500); // fade out duration
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(taglineInterval);
    };
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          data-ai-hint="abstract technology"
          fill
          priority
          className="object-cover opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <AnimateOnScroll className="fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            ProEdge Innovations
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll className="fade-in-up animate-delay-200">
          <p
            className={cn(
              "mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl transition-opacity duration-500",
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
            <Button asChild size="lg" variant="outline">
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
