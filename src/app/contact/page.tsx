import { ContactForm } from "@/components/contact-form";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Dvija Softech team. We\'re here to answer your questions.',
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "info@dvijasoftech.com",
    href: "mailto:info@dvijasoftech.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8421581510",
    href: "8421581510",
  },
  {
    icon: MapPin,
    title: "Office",
    value:
      "02, Bhakti Apartment, near Hotel Rasoi, Suchita Nagar, Mumbai Naka, Nashik, Maharashtra, India - 422009",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind, a question about our products, or just want to say hello? We’d love to hear from you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll className="fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
                For immediate assistance, please use the contact details provided.
              </p>
              <div className="mt-10 space-y-8">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <detail.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{detail.title}</h3>
                      {detail.href ? (
                         <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors text-base">
                            {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-base">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="fade-in-up animate-delay-200">
               <div className="bg-card p-8 rounded-xl shadow-lg border">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">We're excited to hear from you!</p>
                 <ContactForm />
               </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
