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
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center">
              Terms and Conditions
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="prose prose-invert max-w-4xl mx-auto text-lg text-muted-foreground">
                {/* <p><strong>Last Updated:</strong> August 1, 2025</p> */}

                <h2 className="text-primary-foreground">AGREEMENT TO OUR LEGAL TERMS</h2>
                <p>We are Dvija Softech Pvt. Ltd. (“Company,” “We,” “Our”). We operate this website, as well as other related products and services that link to these legal terms (the “Legal Terms”) (collectively, the “Services”).</p>
                <p>You can contact us by email at info@dvijasoftech.com.</p>
                <p>These Legal Terms constitute a legally binding agreement made between you (“You”), whether personally or on behalf of an entity, and Dvija Softech Pvt. Ltd., concerning your access to and use of the Services. By accessing the Services, you agree that you have read, understood, and agreed to be bound by these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, YOU MUST IMMEDIATELY STOP USING THE SERVICES.</p>

                <h2 className="text-primary-foreground">TABLE OF CONTENTS</h2>
                <ul>
                  <li>1. OUR SERVICES</li>
                  <li>2. INTELLECTUAL PROPERTY RIGHTS</li>
                  <li>3. USER REPRESENTATIONS</li>
                  <li>4. PROHIBITED ACTIVITIES</li>
                  <li>5. USER GENERATED CONTRIBUTIONS</li>
                  <li>6. CONTRIBUTION LICENSE</li>
                  <li>7. SERVICES MANAGEMENT</li>
                  <li>8. TERM AND TERMINATION</li>
                  <li>9. MODIFICATIONS AND INTERRUPTIONS</li>
                  <li>10. GOVERNING LAW</li>
                  <li>11. DISPUTE RESOLUTION</li>
                  <li>12. CORRECTIONS</li>
                  <li>13. DISCLAIMER</li>
                  <li>14. LIMITATIONS OF LIABILITY</li>
                  <li>15. INDEMNIFICATION</li>
                  <li>16. USER DATA</li>
                  <li>17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
                  <li>18. MISCELLANEOUS</li>
                  <li>19. CONTACT US</li>
                </ul>

                <h2 className="text-primary-foreground">1. OUR SERVICES</h2>
                <p>Use of our Services in locations where it violates local laws is your responsibility. Ensure compliance with applicable laws in your jurisdiction.</p>

                <h2 className="text-primary-foreground">2. INTELLECTUAL PROPERTY RIGHTS</h2>
                <p>All content and trademarks are owned or licensed by us and are protected under intellectual property laws. The content is for your personal or internal business use only.</p>

                <h2 className="text-primary-foreground">3. USER REPRESENTATIONS</h2>
                <p>You represent that you are legally capable, not a minor, will not access Services via non-human means, or use them for illegal purposes.</p>

                <h2 className="text-primary-foreground">4. PROHIBITED ACTIVITIES</h2>
                <p>You may not misuse the Services in any way such as scraping data, spreading malware, impersonating others, or infringing copyrights.</p>

                <h2 className="text-primary-foreground">5. USER GENERATED CONTRIBUTIONS</h2>
                <p>We may allow you to post content. You must ensure your Contributions do not violate any rights or laws.</p>

                <h2 className="text-primary-foreground">6. CONTRIBUTION LICENSE</h2>
                <p>You retain ownership of your Contributions but grant us the right to use and display them. We are not liable for your posted content.</p>

                <h2 className="text-primary-foreground">7. SERVICES MANAGEMENT</h2>
                <p>We reserve the right to monitor, restrict, or remove content or access to the Services at our discretion.</p>

                <h2 className="text-primary-foreground">8. TERM AND TERMINATION</h2>
                <p>We may terminate or suspend access to the Services at any time without notice for violations of these Terms.</p>

                <h2 className="text-primary-foreground">9. MODIFICATIONS AND INTERRUPTIONS</h2>
                <p>We may change, suspend, or discontinue Services at any time. We are not liable for any interruptions or downtime.</p>

                <h2 className="text-primary-foreground">10. GOVERNING LAW</h2>
                <p>These Terms are governed by the laws of India. You consent to the jurisdiction of courts in Pune, Maharashtra.</p>

                <h2 className="text-primary-foreground">11. DISPUTE RESOLUTION</h2>
                <p>Disputes shall be resolved through arbitration in Pune, India, under English language proceedings.</p>

                <h2 className="text-primary-foreground">12. CORRECTIONS</h2>
                <p>We reserve the right to correct any errors or omissions in our Services without prior notice.</p>

                <h2 className="text-primary-foreground">13. DISCLAIMER</h2>
                <p>The Services are provided “as-is”. We disclaim all warranties and are not liable for any inaccuracies or errors.</p>

                <h2 className="text-primary-foreground">14. LIMITATIONS OF LIABILITY</h2>
                <p>Our liability is limited to the amount paid by you (if any). We are not responsible for any indirect damages.</p>

                <h2 className="text-primary-foreground">15. INDEMNIFICATION</h2>
                <p>You agree to indemnify and hold us harmless against any claims arising out of your use of the Services.</p>

                <h2 className="text-primary-foreground">16. USER DATA</h2>
                <p>We may store and use data you provide. You are responsible for your own data. We are not liable for data loss.</p>

                <h2 className="text-primary-foreground">17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
                <p>You agree to electronic communications and signatures and waive any rights requiring non-electronic forms.</p>

                <h2 className="text-primary-foreground">18. MISCELLANEOUS</h2>
                <p>These Terms are the full agreement between you and us. They operate to the fullest extent of the law and may not be interpreted against us.</p>

                <h2 className="text-primary-foreground">19. CONTACT US</h2>
                <p>If you have questions, contact us at info@dvijasoftech.com or call us at +91 9689131527.</p>
            </div>
        </div>
      </section>
    </>
  );
}
