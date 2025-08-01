import Link from 'next/link';
import { Logo } from './icons';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },

];

const productLinks = [
    { href: "/products/glowvitasalon", label: "GlowVitaSalon" },
    { href: "/products/nursery-solution", label: "Nursery Solution" },
    { href: "/products/educationalsmart-card", label: "EducationalSmart Card" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/uploads/dvijalogo.jpg" className="h-14 w-auto text-primary" />
              {/* <span className="text-xl font-bold">Dvija Softech</span> */}
            </Link>
            <p className="mt-4 text-muted-foreground">
             We create intuitive, scalable software solutions designed to streamline operations, enhance productivity, and drive growth for today’s fast-moving businesses.
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
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Products</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/products" className="text-muted-foreground hover:text-primary">All Products</Link></li>
                {productLinks.map(link => (
                    <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dvija Softech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
