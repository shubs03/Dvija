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
              Last Updated: January 01, 2025
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="prose prose-invert max-w-4xl mx-auto text-lg text-muted-foreground">
            <p>
              The Privacy Notice for Dvija Softech Pvt. Ltd. (‘We’, ‘Us’, or ‘Our’) describes how and in what way we might access, collect, store, use, and/or share (‘process’) your personal information when you use our service (‘Services’), including when you:
            </p>
            <ul>
              <li>Visit our website at https://dvijasoftech.com or any website of ours that links to this Privacy Notice</li>
              <li>Download and use our mobile application (Paarsh EDU), or any other application of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p>
              Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at dvijasoftech@gmail.com.
            </p>

            <h2>SUMMARY OF KEY POINTS</h2>
            <p>Key points of the policy summarized for clarity. Full details follow below in the full Privacy Policy content.</p>

            <h2>TABLE OF CONTENTS</h2>
            <ul>
              <li>WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ul>

            <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
            <p>We collect personal data you provide like names, emails, passwords, payment data, geolocation info, and usage data. Sensitive information is not processed.</p>

            <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p>To provide services, manage accounts, deliver marketing, respond to requests, fulfill orders, and ensure safety.</p>

            <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
            <p>Only in necessary scenarios like business transfers.</p>

            <h2>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
            <p>With your consent, we access your social profile data to register or log you in. We advise reviewing your social media privacy settings.</p>

            <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p>Only as long as needed for business or legal reasons. Then we delete or anonymize it.</p>

            <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p>Through appropriate organizational and technical safeguards, but no method is 100% secure.</p>

            <h2>7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p>You can request to review, update, delete, or withdraw your consent regarding your personal data.</p>

            <h2>8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p>Currently we don’t respond to DNT browser signals due to a lack of a standard method.</p>

            <h2>9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p>Yes. We update this policy as needed and indicate changes by revising the date at the top.</p>

            <h2>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p>You may contact our Data Protection Officer via email at info@dvijasoftech.com or by mail:</p>
            <address>
              Dvija Softech Pvt Ltd<br />
              Data Protection Officer<br />
              01, Bhakti Apartment Near Hotel Rasoi<br />
              Suchita Nagar Mumbai Naka<br />
              Nashik, Maharashtra 422009<br />
              India
            </address>

            <h2>11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p>
              Depending on your country’s laws, you may request access to, update, or delete your data by submitting a data subject access request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
