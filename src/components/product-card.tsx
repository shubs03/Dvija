import type { Product } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 border bg-secondary/30">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
            <Image 
                src={product.image}
                alt={product.name}
                fill
                data-ai-hint={`${product.category} technology`}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/0"></div>
              <Badge variant="secondary" className="absolute top-4 right-4">{product.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="mt-2 text-primary">{product.tagline}</CardDescription>
        <p className="text-sm text-muted-foreground line-clamp-3 mt-4 flex-grow">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full mt-4">
          <Link href={`/products/${product.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
