import { AnimatedTimeline } from "@/components/animated-timeline";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/data/content";
import { Building, Target, Users } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and team behind ProEdge Innovations.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About ProEdge Innovations
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate innovators, engineers, and problem-solvers
              dedicated to building the future of technology, one line of code at a time.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <AnimateOnScroll className="fade-in-up">
                    <Card className="text-center h-full">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To empower businesses with transformative technology, fostering innovation and driving progress in a rapidly evolving digital landscape.</p>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
                <AnimateOnScroll className="fade-in-up animate-delay-200">
                     <Card className="text-center h-full">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                                <Building className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To be the leading architect of intelligent systems, creating a future where technology and humanity converge for a smarter, more connected world.</p>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
                <AnimateOnScroll className="fade-in-up animate-delay-400">
                     <Card className="text-center h-full">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Our Values</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Innovation, Integrity, Collaboration, and Customer Success are the cornerstones of our company culture and guide every decision we make.</p>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              From a small garage to a global presence, our journey has been one of continuous growth and innovation.
            </p>
          </AnimateOnScroll>
          <div className="mt-16">
            <AnimatedTimeline />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Meet the Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              The brilliant minds guiding ProEdge Innovations towards a brighter future.
            </p>
          </AnimateOnScroll>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <AnimateOnScroll key={member.name} className={`fade-in-up animate-delay-${index * 200}`}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="professional headshot" />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
