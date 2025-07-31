"use client";

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { products } from '@/data/content';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products
    .filter(product => filter === 'All' || product.category === filter)
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.tagline.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our ecosystem of powerful, reliable, and easy-to-use solutions 
              designed to solve your most complex challenges.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
      
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex justify-center flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={filter === category ? 'default' : 'outline'}
                    onClick={() => setFilter(category)}
                    className="capitalize rounded-full px-6"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
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
             {filteredProducts.length === 0 && (
              <div className="md:col-span-2 lg:col-span-3 text-center py-16">
                  <h3 className="text-2xl font-semibold">No Products Found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
