import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products, solutions } from "@/data/content";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      <HeroSection />

      <section id="solutions" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Solutions for Every Scale
            </h2>
            <p className="mt-4 text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              We provide the tools and expertise to help you build, deploy, and
              manage applications with ease.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <AnimateOnScroll
                key={solution.title}
                className={`fade-in-up animate-delay-${index * 200}`}
              >
                <Card className="h-full border-transparent bg-gradient-to-br from-card to-secondary/20 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                      <solution.icon className="h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Explore Our Flagship Products
            </h2>
            <p className="mt-4 text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Powerful, reliable, and easy-to-use solutions designed to solve
              your most complex challenges.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <AnimateOnScroll
                key={product.id}
                className={`fade-in-up animate-delay-${index * 200}`}
              >
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="fade-in-up animate-delay-600 mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/products">
                See All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="about-preview" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll className="fade-in-up">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="ProEdge Innovations Team"
                  data-ai-hint="team meeting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="fade-in-up animate-delay-200">
              <span className="text-primary font-semibold tracking-wider uppercase">Our Mission</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2 sm:text-4xl">
                Driving Innovation, Building Futures
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                At ProEdge Innovations, we are dedicated to pushing the
                boundaries of technology. Our journey is one of constant
                learning, building, and delivering excellence for our partners.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 shrink-0" />
                  <span>
                    <strong>Customer-Centric:</strong> We succeed when our
                    customers succeed.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 shrink-0" />
                  <span>
                    <strong>Pioneering Spirit:</strong> We embrace challenges and
                    engineer novel solutions.
                  </span>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-10">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
