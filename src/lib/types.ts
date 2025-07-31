export interface Product {
  id: number;
  name: string;
  slug: string;
  category: 'Salon & Spa' | 'Agriculture' | 'E-Learning';
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  image: string;
  gallery: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description:string;
}

export interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    bio: string;
}

export interface Solution {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}
