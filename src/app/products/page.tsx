"use client";

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { products } from '@/data/content';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Software', 'Hardware', 'Services'];

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = products.filter(
    (product) => filter === 'All' || product.category === filter
  );

  return (
    <>
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our ecosystem of powerful, reliable, and easy-to-use solutions 
              designed to solve your most complex challenges.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
      
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <AnimateOnScroll 
                key={product.id}
                className={cn('fade-in-up')}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
