"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-card">
        <div className="legal-header">
          <a href="/" className="legal-back-btn">
            ← Back to Home
          </a>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Effective Date: July 9, 2026</p>
        </div>

        <div className="legal-body">
          <p>
            Local Spotlight Mail (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you provide to us through our website.
          </p>

          <h2 className="legal-section-title">Information We Collect</h2>
          <p>
            When you submit a form, request category availability details, or contact us through our website, we may collect:
          </p>
          <ul className="legal-list">
            <li>Business name and category</li>
            <li>Contact person name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any custom messages or details you voluntarily provide</li>
          </ul>

          <h2 className="legal-section-title">How We Use Your Information</h2>
          <p>
            We may use your information to:
          </p>
          <ul className="legal-list">
            <li>Verify category availability in your target territory.</li>
            <li>Contact you regarding ad bookings, layout reviews, and campaign updates.</li>
            <li>Send transactional receipts, invoices, and scan tracking performance reports.</li>
            <li>Respond to your support questions and customer service inquiries.</li>
          </ul>

          <h2 className="legal-section-title">Sharing of Information</h2>
          <p>
            We do not sell, rent, or share your mobile phone number, contact details, or SMS consent with third parties for their independent marketing purposes. We may share your information with trusted service providers who help us operate our business (such as web hosting, payment processors like Stripe, or email delivery systems) under strict data protection boundaries.
          </p>

          <h2 className="legal-section-title">SMS Communications</h2>
          <p>
            If you provide your mobile phone number and consent to receive text messages from us, you may receive SMS notifications regarding your ad reservations, proof approvals, or campaign dates. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying <strong>STOP</strong> to any message.
          </p>

          <h2 className="legal-section-title">Data Security</h2>
          <p>
            We implement appropriate physical, technical, and organizational security measures to protect your information against unauthorized access, loss, or alteration. However, no electronic transmission over the internet or storage method is completely secure.
          </p>

          <h2 className="legal-section-title">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="legal-section-title">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact:
          </p>

          <div className="legal-contact-box">
            <p><strong>Local Spotlight Mail</strong></p>
            <p>Email: <a href="mailto:kyle@localspotlightmail.com">kyle@localspotlightmail.com</a></p>
            <p>Website: <a href="https://localspotlightmail.com">localspotlightmail.com</a></p>
            <p>Phone: 407-461-5219</p>
          </div>
        </div>
      </div>

      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} Local Spotlight Mail. All rights reserved. | <a href="/terms">Terms of Service</a></p>
      </footer>
    </div>
  );
}


