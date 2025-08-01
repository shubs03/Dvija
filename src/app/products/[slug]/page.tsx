import { products } from '@/data/content';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter(p => p.slug !== params.slug).slice(0,2);

  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll className="fade-in-up">
              <Badge variant="outline" className="text-base py-1 px-4 rounded-full">{product.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-4">{product.name}</h1>
              <p className="mt-6 text-xl text-muted-foreground">{product.tagline}</p>
              <p className="mt-8 text-lg text-foreground/80">{product.description}</p>
              <Button asChild size="lg" className="mt-10">
                <Link href={product.link}>Request a Demo</Link>
              </Button>
            </AnimateOnScroll>
            <AnimateOnScroll className="fade-in-up animate-delay-200">
               <Carousel className="w-full max-w-2xl mx-auto">
                <CarouselContent>
                  {product.gallery.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg border">
                        <Image src={img} alt={`${product.name} gallery image ${index + 1}`} fill className="object-cover" data-ai-hint="product screenshot" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12" />
                <CarouselNext className="-right-4 md:-right-12" />
              </Carousel>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">
                <AnimateOnScroll className="fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
                    <ul className="mt-8 space-y-5">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                                <span className="text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </AnimateOnScroll>
                 <AnimateOnScroll className="fade-in-up animate-delay-200">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ideal For</h2>
                    <ul className="mt-8 space-y-5">
                        {product.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start">
                                <ArrowRight className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                                <span className="text-lg">{useCase}</span>
                            </li>
                        ))}
                    </ul>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

       <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
            <AnimateOnScroll>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">Explore Other Products</h2>
            </AnimateOnScroll>
            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {otherProducts.map((p, index) => (
                    <AnimateOnScroll key={p.id} className={`fade-in-up animate-delay-${index * 200}`}>
                        <Link href={`/products/${p.slug}`} className="block group">
                          <Card className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group-hover:-translate-y-1 h-full bg-secondary/30">
                            <h3 className="font-bold text-xl">{p.name}</h3>
                            <p className="mt-2 text-muted-foreground">{p.tagline}</p>
                            <span className="mt-6 inline-flex items-center text-primary font-semibold">
                                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                           </Card>
                        </Link>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
       </section>
    </>
  );
}
