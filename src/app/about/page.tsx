import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/data/content";
import {
  Building,
  Target,
  Users,
  Puzzle,
  Rocket,
  BotMessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the mission, vision, and team behind Dvija Softech.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Dvija Softech
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Dvija Softech Pvt. Ltd. is a tech-driven company offering smart
              digital solutions for the beauty care and education sectors. Our
              key products—Glowvita Salon and Paarsh EDU help salons manage
              bookings and operations, and enable educators to create and
              deliver online courses. We focus on user-friendly, scalable
              platforms that simplify business and learning experiences through
              automation and innovation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
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
                  <p className="text-muted-foreground">
                    To deliver high-quality, easy-to-use digital solutions that
                    empower salons and educators by automating operations,
                    enhancing engagement, and enabling scalable growth through
                    technology.
                  </p>
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
                  <p className="text-muted-foreground">
                    To become a leading global platform that transforms service
                    experiences in beauty and education through innovative,
                    accessible, and user-centric technology.
                  </p>
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
                  <p className="text-muted-foreground">
                    Customer-centricity, Integrity, and Continuous Improvement
                    are the pillars of our culture, guiding every project and
                    partnership we undertake.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Our development process is transparent, collaborative, and focused
              on delivering results that exceed expectations.
            </p>
          </AnimateOnScroll>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimateOnScroll className="fade-in-up">
              <Card className="text-center h-full p-6">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                    <Puzzle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">1. Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We begin by understanding your unique challenges and goals
                    to ensure our solution aligns perfectly with your vision.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll className="fade-in-up animate-delay-200">
              <Card className="text-center h-full p-6">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">2. Design & Develop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team designs a user-centric prototype and develops a
                    robust, scalable architecture tailored to your needs.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll className="fade-in-up animate-delay-400">
              <Card className="text-center h-full p-6">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                    <BotMessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">3. Deploy & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We handle seamless deployment and provide ongoing support to
                    ensure your software runs smoothly and efficiently.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll className="fade-in-up animate-delay-600">
              <Card className="text-center h-full p-6">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-xl p-4 w-fit">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">4. Iterate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe in continuous improvement, gathering feedback to
                    enhance and evolve your solution over time.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
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
              <AnimateOnScroll
                key={member.name}
                className={`fade-in-up animate-delay-${index * 200}`}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-secondary/30">
                  <CardContent className="pt-8">
                    <Avatar className="h-28 w-28 mx-auto  mb-6 ring-4 ring-background">
                      <AvatarImage
                        src={member.avatar}
                        alt={member.name}
                        className="object-cover"
                        data-ai-hint="professional headshot"
                      />
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
