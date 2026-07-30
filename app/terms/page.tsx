"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-card">
        <div className="legal-header">
          <a href="/" className="legal-back-btn">
            ← Back to Home
          </a>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-meta">Effective Date: July 9, 2026</p>
        </div>

        <div className="legal-body">
          <p>
            Welcome to The Local Spotlight (&quot;The Local Spotlight,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website, newsletter, advertising services, or other services we provide, you agree to these Terms of Service.
          </p>

          <h2 className="legal-section-title">1. Use of Our Website</h2>
          <p>
            Our website is intended to provide information about The Local Spotlight, local businesses, community events, advertising opportunities, and related services. You agree to use our website only for lawful purposes and not to engage in any activity that could interfere with its operation or security.
          </p>

          <h2 className="legal-section-title">2. Advertising Services</h2>
          <p>
            The Local Spotlight provides shared direct mail advertising opportunities through community postcards, digital promotions, and other marketing initiatives. Submission of an advertising inquiry does not guarantee placement. Advertising opportunities are subject to availability, category approval, and payment. We reserve the right to decline advertising that is misleading, unlawful, offensive, or inconsistent with our community standards.
          </p>

          <h2 className="legal-section-title">3. Payments</h2>
          <p>
            Payment terms will be communicated prior to publication. Advertising placements are not guaranteed until payment arrangements have been completed (via our Stripe links or alternative agreed invoicing) and all required advertising materials have been received. Unless otherwise agreed in writing, advertising fees are non-refundable once design work has begun or materials have been submitted for production.
          </p>

          <h2 className="legal-section-title">4. Advertiser Responsibilities</h2>
          <p>
            Advertisers are responsible for providing accurate information, logos, high-resolution images, website links, QR code destinations, and other marketing materials by the requested deadlines. The Local Spotlight is not responsible for delays or print omissions caused by incomplete or late submissions from advertisers. Advertisers warrant they have the legal right to use any branding and content they provide.
          </p>

          <h2 className="legal-section-title">5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, branding, layouts, and original materials, is the property of The Local Spotlight unless otherwise noted. No content may be copied, reproduced, or distributed without prior written permission.
          </p>

          <h2 className="legal-section-title">6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or businesses (including Stripe for checkout processing). The Local Spotlight is not responsible for the content, products, services, or privacy practices of those third-party websites.
          </p>

          <h2 className="legal-section-title">7. Disclaimer</h2>
          <p>
            While we strive to provide accurate and up-to-date information, The Local Spotlight makes no warranties regarding the completeness, accuracy, or reliability of information provided on this website. All services are provided &quot;as is&quot; without warranties of any kind.
          </p>

          <h2 className="legal-section-title">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, The Local Spotlight shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website, postal distribution, or advertising services.
          </p>

          <h2 className="legal-section-title">9. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service at any time. Changes will become effective when posted on this page with an updated effective date.
          </p>

          <h2 className="legal-section-title">10. Contact Us</h2>
          <p>
            If you have questions regarding these Terms of Service, please contact us:
          </p>

          <div className="legal-contact-box">
            <p><strong>The Local Spotlight</strong></p>
            <p>Email: <a href="mailto:kyle@localspotlightmail.com">kyle@localspotlightmail.com</a></p>
            <p>Website: <a href="https://localspotlightmail.com">localspotlightmail.com</a></p>
            <p>Phone: 407-461-5219</p>
          </div>
        </div>
      </div>

      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} The Local Spotlight Mailer. All rights reserved. | <a href="/privacy">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

