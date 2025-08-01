import { AnimateOnScroll } from "@/components/animate-on-scroll";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for Dvija Softech.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="prose prose-invert max-w-4xl mx-auto text-lg text-muted-foreground">
                <p>Dvija Softech ("us", "we", or "our") operates this website and the software services offered (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                
                <h2 className="text-primary-foreground">1. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <h3>Types of Data Collected</h3>
                <ul>
                    <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, and Usage Data.</li>
                    <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
                </ul>

                <h2 className="text-primary-foreground">2. Use of Data</h2>
                <p>Dvija Softech uses the collected data for various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>

                <h2 className="text-primary-foreground">3. Data Transfer</h2>
                <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.</p>

                <h2 className="text-primary-foreground">4. Disclosure Of Data</h2>
                <h3>Legal Requirements</h3>
                <p>Dvija Softech may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of Dvija Softech</li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                </ul>

                <h2 className="text-primary-foreground">5. Security of Data</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                
                <h2 className="text-primary-foreground">6. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h2 className="text-primary-foreground">7. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us by visiting the contact page on our website.</p>
            </div>
        </div>
      </section>
    </>
  );
}
