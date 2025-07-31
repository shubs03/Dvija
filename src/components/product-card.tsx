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
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <div className="relative aspect-video rounded-md overflow-hidden mb-4">
            <Image 
                src={product.image}
                alt={product.name}
                fill
                data-ai-hint={`${product.category} technology`}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <Badge variant="outline" className="w-fit">{product.category}</Badge>
        <CardTitle className="pt-2">{product.name}</CardTitle>
        <CardDescription>{product.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/products/${product.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
