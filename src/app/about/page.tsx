import { AnimatedTimeline } from "@/components/animated-timeline";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/data/content";
import { Building, Target, Users } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and team behind Dvija Softech.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Dvija Softech
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate innovators, engineers, and problem-solvers
              dedicated to building intuitive software solutions for complex business needs.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <AnimateOnScroll className="fade-in-up">
                    <Card className="text-center h-full p-6">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To empower businesses in the service, agriculture, and education sectors with robust, user-friendly software that streamlines operations, fosters growth, and enhances user engagement.</p>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
                <AnimateOnScroll className="fade-in-up animate-delay-200">
                     <Card className="text-center h-full p-6">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                                <Building className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To become a leading provider of specialized software solutions, recognized for our innovation, quality, and commitment to solving the real-world challenges of our clients.</p>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
                <AnimateOnScroll className="fade-in-up animate-delay-400">
                     <Card className="text-center h-full p-6">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">Our Values</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Customer-centricity, Integrity, and Continuous Improvement are the pillars of our culture, guiding every project and partnership we undertake.</p>
                        </CardContent>
                    </Card>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              From a single idea to a suite of powerful products, our journey is one of passion and perseverance.
            </p>
          </AnimateOnScroll>
          <div className="mt-20">
            <AnimatedTimeline />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Meet the Leadership
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              The dedicated minds guiding Dvija Softech to new heights.
            </p>
          </AnimateOnScroll>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <AnimateOnScroll key={member.name} className={`fade-in-up animate-delay-${index * 200}`}>
                <Card className="text-center border-0 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                  <CardContent className="pt-8">
                    <Avatar className="h-28 w-28 mx-auto mb-6 ring-4 ring-secondary">
                      <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="professional headshot" />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="mt-4 text-muted-foreground">{member.bio}</p>
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
