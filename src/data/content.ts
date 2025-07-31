import type { Product, TimelineEvent, TeamMember, Solution } from '@/lib/types';
import { Cpu, Server, Terminal } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: 'QuantumLeap Engine',
    slug: 'quantumleap-engine',
    category: 'Software',
    tagline: 'High-Throughput Data Processing Framework.',
    description: 'QuantumLeap Engine is an enterprise-grade, distributed data processing framework engineered for sub-millisecond latency and massive scalability. It enables organizations to build real-time applications that can ingest, process, and analyze petabytes of data on the fly. Its core is built on a resilient, fault-tolerant architecture ensuring 99.999% uptime for mission-critical workloads.',
    features: ['Distributed In-Memory Computing', 'Real-time Stream & Batch Processing', 'Advanced AI/ML Model Integration', 'Secure, Multi-Tenant Architecture', 'Automated Resource Management', 'Low-Level API for Custom Connectors'],
    useCases: ['Real-time Fraud Detection Systems', 'IoT Data Ingestion & Analytics Platforms', 'Live User Behavior Tracking & Personalization', 'Algorithmic Trading & Risk Analysis'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 2,
    name: 'Photon Core',
    slug: 'photon-core',
    category: 'Hardware',
    tagline: 'Next-Gen AI/ML Accelerator Card.',
    description: 'Photon Core is a specialized ASIC-based accelerator designed to dramatically speed up deep learning model training and inference. By optimizing data pathways and utilizing next-generation memory, Photon Core delivers up to a 10x performance increase over traditional GPUs for specific AI workloads, all while consuming significantly less power. It is designed for seamless integration into existing data center infrastructure.',
    features: ['Custom ASIC for Neural Networks', 'High-Bandwidth On-Chip Memory', 'PCIe Gen 5.0 Interface', 'Liquid & Air Cooling Compatibility', 'Energy-Efficient, Low-TDP Design', 'SDK for PyTorch & TensorFlow'],
    useCases: ['Large Language Model (LLM) Training', 'High-Resolution 3D Rendering & Simulation', 'Genomic Sequencing & Drug Discovery', 'Autonomous Vehicle Perception Systems'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 3,
    name: 'Nexus Platform',
    slug: 'nexus-platform',
    category: 'Services',
    tagline: 'Unified Multi-Cloud Management & Orchestration.',
    description: 'The Nexus Platform provides a single pane of glass for managing and orchestrating infrastructure across AWS, Azure, and Google Cloud. It automates provisioning, enforces security policies, and optimizes costs, allowing DevOps teams to focus on application delivery instead of cloud complexity. Nexus abstracts away provider-specific APIs, enabling true cloud portability.',
    features: ['Multi-Cloud Provisioning via IaC', 'Continuous Cost Optimization & Reporting', 'Unified Security & Compliance Policies', 'Automated CI/CD Pipeline Integration', '24/7 Global Expert Support', 'Kubernetes Cluster Management'],
    useCases: ['Enterprise Cloud Governance & Control', 'FinOps & Cloud Cost Management', 'Automated SaaS Application Deployment', 'Disaster Recovery & Business Continuity'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
    {
    id: 4,
    name: 'Synapse IDE',
    slug: 'synapse-ide',
    category: 'Software',
    tagline: 'The AI-Powered Collaborative Development Environment.',
    description: 'Synapse IDE is a cloud-native development environment designed for modern engineering teams. It features real-time collaboration, AI-powered code completion and review, and pre-configured, containerized environments to eliminate setup friction. Synapse ensures that your team can code, debug, and ship software faster and more efficiently than ever before.',
    features: ['Real-time Collaborative Coding & Debugging', 'AI Code Generation & Refactoring', 'One-Click Containerized Dev Environments', 'Extensive Plugin & Theme Marketplace', 'Built-in Security Code Analysis', 'Seamless Git & CI/CD Integration'],
    useCases: ['Distributed & Remote Software Teams', 'Onboarding New Engineers', 'Corporate Coding Bootcamps & Training', 'Secure Open-Source Project Collaboration'],
    image: 'https://placehold.co/600x400.png',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
];

export const timeline: TimelineEvent[] = [
    { year: '2018', title: 'The Spark: A Vision for a New Framework', description: 'In a university lab, our founders, frustrated by the limitations of existing data tools, conceptualized a new, hyper-efficient data processing architecture.' },
    { year: '2019', title: 'ProEdge Innovations Founded', description: 'With a small seed investment, ProEdge Innovations was officially incorporated. The team began building the first prototype from a humble garage office.' },
    { year: '2021', title: 'QuantumLeap Engine 1.0 Launch', description: 'After two years of intensive development, we launched our flagship product, securing our first Fortune 500 company as a beta partner.' },
    { year: '2022', title: 'Series A Funding & Team Growth', description: 'Secured $15M in Series A funding led by Innovate Capital, allowing us to triple our engineering team and accelerate product development.' },
    { year: '2023', title: 'Photon Core Unveiled', description: 'We diversified into hardware, unveiling the Photon Core AI accelerator and demonstrating its superior performance at the Global Tech Summit.' },
    { year: '2024', title: 'Global Expansion & Nexus Platform', description: 'Opened our EMEA headquarters in London and launched the Nexus Platform, reaching 100 employees and achieving profitability.' },
];

export const team: TeamMember[] = [
    { name: 'Dr. Evelyn Reed', role: 'Founder & CEO', avatar: 'https://placehold.co/400x400.png', bio: 'With a Ph.D. in Distributed Systems from MIT, Evelyn is the architect of our core technology and leads the company\'s strategic vision.' },
    { name: 'Marcus Thorne', role: 'Chief Technology Officer', avatar: 'https://placehold.co/400x400.png', bio: 'A veteran of Silicon Valley, Marcus leads our engineering organization, translating ambitious research into robust, scalable products.' },
    { name: 'Jasmine Patel', role: 'VP of Product', avatar: 'https://placehold.co/400x400.png', bio: 'Jasmine meticulously aligns our product roadmap with customer needs, ensuring every feature delivers tangible value and an exceptional user experience.' },
    { name: 'Liam Chen', role: 'Head of Design', avatar: 'https://placehold.co/400x400.png', bio: 'Liam is the creative visionary behind our brand. He believes that powerful technology should be accessible and beautiful, a principle he applies to every interface.' },
];

export const solutions: Solution[] = [
    {
        icon: Terminal,
        title: 'Developer Platforms',
        description: 'Accelerate your development lifecycle with our suite of integrated tools, from collaborative IDEs to powerful debugging platforms.'
    },
    {
        icon: Server,
        title: 'Cloud Orchestration',
        description: 'Leverage our robust and scalable cloud services to deploy, manage, and optimize your applications with confidence and ease.'
    },
    {
        icon: Cpu,
        title: 'AI Acceleration Hardware',
        description: 'Gain a competitive edge with our purpose-built hardware, designed for maximum performance in AI and data-intensive tasks.'
    }
];
