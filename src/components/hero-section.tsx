"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { AnimateOnScroll } from "./animate-on-scroll";

export function HeroSection() {

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-background"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(var(--primary),0.5),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-20%] left-0 right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(var(--accent),0.4),rgba(255,255,255,0))]"></div>
         <div className="absolute bottom-0 left-[20%] right-0 top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(var(--primary),0.3),rgba(255,255,255,0))] animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[20%] left-0 right-[20%] top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(var(--accent),0.2),rgba(255,255,255,0))] animate-[float-reverse_10s_ease-in-out_infinite]"></div>
      </div>
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80 backdrop-blur-xl z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-0"></div>

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
