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
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll className="fade-in-up">
              <Badge variant="outline">{product.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mt-2">{product.name}</h1>
              <p className="mt-4 text-xl text-muted-foreground">{product.tagline}</p>
              <p className="mt-6 text-base">{product.description}</p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </AnimateOnScroll>
            <AnimateOnScroll className="fade-in-up animate-delay-200">
               <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {product.gallery.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                        <Image src={img} alt={`${product.name} gallery image ${index + 1}`} fill className="object-cover" data-ai-hint="product screenshot" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
                <AnimateOnScroll className="fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
                    <ul className="mt-6 space-y-4">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </AnimateOnScroll>
                 <AnimateOnScroll className="fade-in-up animate-delay-200">
                    <h2 className="text-3xl font-bold tracking-tight">Ideal Use Cases</h2>
                    <ul className="mt-6 space-y-4">
                        {product.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start">
                                <ArrowRight className="h-6 w-6 text-primary mt-1 mr-4 shrink-0" />
                                <span>{useCase}</span>
                            </li>
                        ))}
                    </ul>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

       <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
            <AnimateOnScroll>
                <h2 className="text-3xl font-bold tracking-tight text-center">Explore Other Products</h2>
            </AnimateOnScroll>
            <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {otherProducts.map((p, index) => (
                    <AnimateOnScroll key={p.id} className={`fade-in-up animate-delay-${index * 200}`}>
                        <Link href={`/products/${p.slug}`} className="block bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <h3 className="font-bold text-xl">{p.name}</h3>
                            <p className="mt-2 text-muted-foreground">{p.tagline}</p>
                            <span className="mt-4 inline-flex items-center text-primary font-semibold">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </Link>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
       </section>
    </>
  );
}
