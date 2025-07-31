import { AnimateOnScroll } from "@/components/animate-on-scroll";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read the terms and conditions for Dvija Softech.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center">
              Terms and Conditions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
            <div className="prose prose-invert max-w-4xl mx-auto text-lg text-muted-foreground">
                <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using this website and the software services offered (the "Service") operated by Dvija Softech ("us", "we", or "our").</p>
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
                
                <h2 className="text-primary">1. Accounts</h2>
                <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

                <h2 className="text-primary">2. Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Dvija Softech and its licensors. The Service is protected by copyright, trademark, and other laws of both the foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Dvija Softech.</p>

                <h2 className="text-primary">3. Links To Other Web Sites</h2>
                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Dvija Softech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

                <h2 className="text-primary">4. Termination</h2>
                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>

                <h2 className="text-primary">5. Limitation Of Liability</h2>
                <p>In no event shall Dvija Softech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                
                <h2 className="text-primary">6. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is established, without regard to its conflict of law provisions.</p>
                
                <h2 className="text-primary">7. Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                <h2 className="text-primary">8. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
            </div>
        </div>
      </section>
    </>
  );
}
