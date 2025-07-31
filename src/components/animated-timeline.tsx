import { timeline } from "@/data/content";
import { AnimateOnScroll } from "./animate-on-scroll";

export function AnimatedTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 -ml-px h-full w-0.5 bg-border"></div>
      {timeline.map((event, index) => (
        <AnimateOnScroll key={index} className="fade-in-up">
          <div className="relative mb-12">
            <div className="flex items-center md:justify-normal md:odd:flex-row-reverse">
              <div className="flex-1 md:w-5/12"></div>
              <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -ml-4 z-10">
                <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-background">
                  <span className="text-primary-foreground font-bold text-sm">
                    {event.year}
                  </span>
                </div>
              </div>
              <div className="ml-12 md:ml-0 md:w-5/12 bg-card p-6 rounded-lg shadow-md md:odd:text-right md:even:text-left">
                <h3 className="font-bold text-xl">{event.title}</h3>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
