import type { Product, TimelineEvent, TeamMember, Solution } from '@/lib/types';
import { Cpu, Server, Terminal } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: 'QuantumLeap Engine',
    slug: 'quantumleap-engine',
    category: 'Software',
    tagline: 'The next-generation data processing framework.',
    description: 'QuantumLeap Engine is a revolutionary data processing framework designed for unparalleled speed and efficiency. It leverages advanced algorithms to handle massive datasets with ease, providing real-time insights and analytics.',
    features: ['Real-time data streaming', 'Scalable microservices architecture', 'Advanced AI/ML integration', 'Secure by design'],
    useCases: ['Financial market analysis', 'Large-scale scientific research', 'Real-time logistics tracking'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 2,
    name: 'Photon Core',
    slug: 'photon-core',
    category: 'Hardware',
    tagline: 'High-performance computing, redefined.',
    description: 'Photon Core is our flagship hardware solution, a custom-built processing unit designed for intensive computing tasks. Its unique architecture minimizes latency and maximizes throughput for AI and machine learning workloads.',
    features: ['Custom silicon architecture', 'Liquid cooling system', 'Modular and upgradeable', 'Energy-efficient design'],
    useCases: ['AI model training', '3D rendering farms', 'Cryptographic analysis'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 3,
    name: 'Nexus Platform',
    slug: 'nexus-platform',
    category: 'Services',
    tagline: 'Your unified cloud management solution.',
    description: 'The Nexus Platform is a comprehensive suite of cloud services that simplifies infrastructure management. Deploy, monitor, and scale your applications across multiple cloud providers from a single, intuitive dashboard.',
    features: ['Multi-cloud compatibility', 'Automated scaling and load balancing', 'CI/CD pipeline integration', '24/7 expert support'],
    useCases: ['Enterprise cloud migration', 'SaaS application hosting', 'DevOps automation'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
    {
    id: 4,
    name: 'Synapse IDE',
    slug: 'synapse-ide',
    category: 'Software',
    tagline: 'The collaborative development environment for teams.',
    description: 'Synapse IDE is a real-time, collaborative coding environment that streamlines teamwork. It offers powerful debugging tools, language support, and seamless integration with version control systems.',
    features: ['Real-time pair programming', 'Integrated debugging tools', 'Extensive plugin marketplace', 'Containerized development environments'],
    useCases: ['Remote software development teams', 'Coding bootcamps and education', 'Open-source project collaboration'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
];

export const timeline: TimelineEvent[] = [
    { year: '2018', title: 'The Spark of an Idea', description: 'Our founders met and sketched out the initial vision for what would become ProEdge Innovations.' },
    { year: '2019', title: 'Company Founded', description: 'ProEdge Innovations was officially incorporated, and the journey began in a small garage.' },
    { year: '2021', title: 'QuantumLeap Engine Launch', description: 'We launched our first flagship product, revolutionizing data processing for our first enterprise clients.' },
    { year: '2022', title: 'Series A Funding', description: 'Secured $15M in funding to expand our team and accelerate product development.' },
    { year: '2023', title: 'Photon Core Unveiled', description: 'Entered the hardware market with our high-performance computing solution.' },
    { year: '2024', title: 'Global Expansion', description: 'Opened our first international office and reached 100 employees worldwide.' },
];

export const team: TeamMember[] = [
    { name: 'Dr. Evelyn Reed', role: 'Founder & CEO', avatar: 'https://placehold.co/400x400.png', bio: 'With a Ph.D. in computer science, Evelyn drives the company\'s vision and technological strategy.' },
    { name: 'Marcus Thorne', role: 'Chief Technology Officer', avatar: 'https://placehold.co/400x400.png', bio: 'Marcus leads our engineering teams, turning ambitious ideas into reality with his vast experience in hardware and software.' },
    { name: 'Jasmine Patel', role: 'VP of Product', avatar: 'https://placehold.co/400x400.png', bio: 'Jasmine ensures our products meet and exceed customer expectations, guiding the product lifecycle from concept to launch.' },
    { name: 'Liam Chen', role: 'Head of Design', avatar: 'https://placehold.co/400x400.png', bio: 'Liam is the creative force behind our brand and user experience, crafting intuitive and beautiful interfaces.' },
];

export const solutions: Solution[] = [
    {
        icon: Terminal,
        title: 'Developer Tools',
        description: 'Accelerate your development cycle with our suite of integrated tools, from collaborative IDEs to powerful debugging platforms.'
    },
    {
        icon: Server,
        title: 'Cloud Infrastructure',
        description: 'Leverage our robust and scalable cloud services to deploy and manage your applications with confidence and ease.'
    },
    {
        icon: Cpu,
        title: 'Custom Hardware',
        description: 'Gain a competitive edge with our purpose-built hardware, designed for maximum performance in AI and data-intensive tasks.'
    }
];
