import Link from 'next/link';
import { Logo } from './icons';
import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'Github' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">ProEdge Innovations</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Engineering excellence for a smarter future.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold">Products</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/products" className="text-muted-foreground hover:text-primary">All Products</Link></li>
                <li><Link href="/products/quantumleap-engine" className="text-muted-foreground hover:text-primary">QuantumLeap</Link></li>
                <li><Link href="/products/photon-core" className="text-muted-foreground hover:text-primary">Photon Core</Link></li>
                <li><Link href="/products/nexus-platform" className="text-muted-foreground hover:text-primary">Nexus Platform</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ProEdge Innovations, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
