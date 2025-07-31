import { ContactForm } from "@/components/contact-form";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the ProEdge Innovations team. We\'re here to answer your questions.',
};

const contactDetails = [
  { icon: Mail, title: 'Email', value: 'hello@proedge.dev', href: 'mailto:hello@proedge.dev' },
  { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, title: 'Office', value: '123 Innovation Drive, Tech City, 12345' },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a question or want to work with us? We’d love to hear from you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimateOnScroll className="fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
                For immediate assistance, please use the contact details provided.
              </p>
              <div className="mt-8 space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start">
                    <div className="bg-primary/10 rounded-md p-3">
                      <detail.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{detail.title}</h3>
                      {detail.href ? (
                         <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image src="https://placehold.co/600x400.png" alt="Map to office" fill className="object-cover" data-ai-hint="city map" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="fade-in-up animate-delay-200">
               <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold tracking-tight">Send us a Message</h2>
                 <ContactForm />
               </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
