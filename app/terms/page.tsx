"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
        <div className="mb-8">
          <a href="/" className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-2 text-sm" style={{ color: "var(--accent)", textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--primary)" }}>
          Terms of Service
        </h1>
        
        <div className="prose prose-emerald max-w-none text-gray-600 text-sm leading-relaxed space-y-6">
          <p><strong>Effective Date: July 9, 2026</strong></p>
          
          <p>
            Welcome to The Local Spotlight (&quot;The Local Spotlight,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website, newsletter, advertising services, or other services we provide, you agree to these Terms of Service.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>1. Use of Our Website</h3>
          <p>
            Our website is intended to provide information about The Local Spotlight, local businesses, community events, advertising opportunities, and related services. You agree to use our website only for lawful purposes and not to engage in any activity that could interfere with its operation or security.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>2. Advertising Services</h3>
          <p>
            The Local Spotlight provides shared direct mail advertising opportunities through community postcards, digital promotions, and other marketing initiatives. Submission of an advertising inquiry does not guarantee placement. Advertising opportunities are subject to availability, category approval, and payment. We reserve the right to decline advertising that is misleading, unlawful, offensive, or inconsistent with our community standards.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>3. Payments</h3>
          <p>
            Payment terms will be communicated prior to publication. Advertising placements are not guaranteed until payment arrangements have been completed (via our Stripe links or alternative agreed invoicing) and all required advertising materials have been received. Unless otherwise agreed in writing, advertising fees are non-refundable once design work has begun or materials have been submitted for production.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>4. Advertiser Responsibilities</h3>
          <p>
            Advertisers are responsible for providing accurate information, logos, high-resolution images, website links, QR code destinations, and other marketing materials by the requested deadlines. The Local Spotlight is not responsible for delays or print omissions caused by incomplete or late submissions from advertisers. Advertisers warrant they have the legal right to use any branding and content they provide.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>5. Intellectual Property</h3>
          <p>
            All content on this website, including text, graphics, logos, branding, layouts, and original materials, is the property of The Local Spotlight unless otherwise noted. No content may be copied, reproduced, or distributed without prior written permission.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>6. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites or businesses (including Stripe for checkout processing). The Local Spotlight is not responsible for the content, products, services, or privacy practices of those third-party websites.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>7. Disclaimer</h3>
          <p>
            While we strive to provide accurate and up-to-date information, The Local Spotlight makes no warranties regarding the completeness, accuracy, or reliability of information provided on this website. All services are provided &quot;as is&quot; without warranties of any kind.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>8. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, The Local Spotlight shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website, postal distribution, or advertising services.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>9. Changes to These Terms</h3>
          <p>
            We may update these Terms of Service at any time. Changes will become effective when posted on this page with an updated effective date.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>10. Contact Us</h3>
          <p>
            If you have questions regarding these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-xs space-y-1">
            <p><strong>The Local Spotlight</strong></p>
            <p>Email: <a href="mailto:kyle@localspotlightmail.com" className="text-emerald-700">kyle@localspotlightmail.com</a></p>
            <p>Website: <a href="https://localspotlightmail.com" className="text-emerald-700">localspotlightmail.com</a></p>
            <p>Phone: 407-461-5219</p>
          </div>
        </div>
      </div>
    </div>
  );
}
