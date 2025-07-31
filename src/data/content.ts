import type { Product, TimelineEvent, TeamMember, Solution } from '@/lib/types';
import { BookOpen, Sprout, WandSparkles } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: 'GlowVitaSalon',
    slug: 'glowvitasalon',
    category: 'Salon & Spa',
    tagline: 'The All-in-One Platform for Salon and Spa Management.',
    description: 'GlowVitaSalon is a comprehensive booking and management platform designed for the beauty industry. It empowers salon owners to streamline their operations, from appointment scheduling and staff management to inventory control and product sales. Vendors can create beautiful storefronts, manage their daily sales with a powerful built-in CRM, and engage customers with integrated marketing tools.',
    features: ['Online Appointment Booking', 'Vendor & Staff Management', 'Integrated Point-of-Sale (POS)', 'E-commerce for Beauty Products', 'Customer Relationship Management (CRM)', 'Automated Marketing Campaigns'],
    useCases: ['Hair Salons & Barbershops', 'Nail Salons & Spas', 'Beauty & Wellness Centers', 'Independent Stylists & Therapists'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 2,
    name: 'Nursery Solution',
    slug: 'nursery-solution',
    category: 'Agriculture',
    tagline: 'Comprehensive Management Software for Plant Nurseries.',
    description: 'Nursery Solution is a powerful ERP system built to handle the unique complexities of the horticulture industry. It provides a centralized platform to manage everything from inventory and supplier relations to sowing schedules and sales. Track plant growth, manage bookings and billing, handle HR tasks, and generate detailed reports to optimize every aspect of your nursery business.',
    features: ['Live Inventory & Stock Control', 'Supplier & Purchase Management', 'Sowing & Batch Management', 'Booking & Billing System', 'Integrated HR Management Module', 'Advanced Analytics & Reporting'],
    useCases: ['Wholesale Plant Nurseries', 'Retail Garden Centers', 'Commercial Growers & Farms', 'Landscaping Businesses'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 3,
    name: 'EducationalSmart Card',
    slug: 'educationalsmart-card',
    category: 'E-Learning',
    tagline: 'Your Gateway to Lifelong Learning and Certification.',
    description: 'EducationalSmart Card is a dynamic e-learning platform connecting students with expert instructors across various domains. Students can register, purchase courses, and access high-quality video lectures at their own pace. Upon completion, they receive a verified certificate. Instructors can build their brand, upload recorded sessions, and manage their student base, making education accessible to all.',
    features: ['Extensive Course Catalog', 'On-Demand Video Lectures', 'Student Registration & Progress Tracking', 'Instructor Portals & Dashboards', 'Secure Payment Gateway', 'Verified Course Certification'],
    useCases: ['Students & Lifelong Learners', 'Professional Skill Development', 'Corporate Training Programs', 'Expert Instructors & Coaches'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
];

export const timeline: TimelineEvent[] = [
    { year: '2020', title: 'The Idea: A Better Way for Niche Businesses', description: 'Our founders identified a gap in the market for high-quality, specialized software for service-based businesses.' },
    { year: '2021', title: 'Dvija Softech is Born', description: 'With a clear vision, Dvija Softech was founded to create intuitive and powerful software solutions.' },
    { year: '2022', title: 'Launch of GlowVitaSalon & Nursery Solution', description: 'We launched our first two products, bringing modern management tools to salons and nurseries.' },
    { year: '2023', title: 'Entering Ed-Tech with EducationalSmart Card', description: 'We expanded our portfolio with EducationalSmart Card, making quality education more accessible.' },
    { year: '2024', title: 'Growing Our Community', description: 'Celebrating over 1,000 active businesses on our platforms and continuing to innovate and improve our offerings.' },
];

export const team: TeamMember[] = [
    { name: 'Aarav Sharma', role: 'Founder & CEO', avatar: 'https://placehold.co/400x400.png', bio: 'A visionary leader with a passion for building software that solves real-world problems and empowers entrepreneurs.' },
    { name: 'Priya Singh', role: 'Chief Technology Officer', avatar: 'https://placehold.co/400x400.png', bio: 'The technical architect behind our platforms, Priya ensures our products are scalable, secure, and reliable.' },
    { name: 'Rohan Mehta', role: 'VP of Product', avatar: 'https://placehold.co/400x400.png', bio: 'Rohan is dedicated to understanding our customers\' needs and translating them into elegant, user-friendly features.' },
    { name: 'Anika Gupta', role: 'Head of Customer Success', avatar: 'https://placehold.co/400x400.png', bio: 'Anika leads our support and success teams, ensuring every client has the resources they need to thrive.' },
];

export const solutions: Solution[] = [
    {
        icon: WandSparkles,
        title: 'Salon & Spa Solutions',
        description: 'Empower your beauty business with our all-in-one management and booking platform, designed for growth.'
    },
    {
        icon: Sprout,
        title: 'Nursery & Agri-Tech',
        description: 'Streamline your horticulture operations, from inventory to sales, with our comprehensive nursery management system.'
    },
    {
        icon: BookOpen,
        title: 'E-Learning Platforms',
        description: 'Create, manage, and sell online courses with our flexible and user-friendly educational platform for instructors and students.'
    }
];
