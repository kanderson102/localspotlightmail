"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
        <div className="mb-8">
          <a href="/" className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-2 text-sm" style={{ color: "var(--accent)", textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "var(--font-montserrat)", color: "var(--primary)" }}>
          Privacy Policy
        </h1>
        
        <div className="prose prose-emerald max-w-none text-gray-600 text-sm leading-relaxed space-y-6">
          <p><strong>Effective Date: July 9, 2026</strong></p>
          
          <p>
            The Local Spotlight (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you provide to us through our website.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>Information We Collect</h3>
          <p>
            When you submit a form, request category availability details, or contact us through our website, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Business name and category</li>
            <li>Contact person name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any custom messages or details you voluntarily provide</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>How We Use Your Information</h3>
          <p>
            We may use your information to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verify category availability in your target territory.</li>
            <li>Contact you regarding ad bookings, layout reviews, and campaign updates.</li>
            <li>Send transactional receipts, invoices, and scan tracking performance reports.</li>
            <li>Respond to your support questions and customer service inquiries.</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>Sharing of Information</h3>
          <p>
            We do not sell, rent, or share your mobile phone number, contact details, or SMS consent with third parties for their independent marketing purposes. We may share your information with trusted service providers who help us operate our business (such as web hosting, payment processors like Stripe, or email delivery systems) under strict data protection boundaries.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>SMS Communications</h3>
          <p>
            If you provide your mobile phone number and consent to receive text messages from us, you may receive SMS notifications regarding your ad reservations, proof approvals, or campaign dates. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying <strong>STOP</strong> to any message.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>Data Security</h3>
          <p>
            We implement appropriate physical, technical, and organizational security measures to protect your information against unauthorized access, loss, or alteration. However, no electronic transmission over the internet or storage method is completely secure.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h3 className="text-lg font-bold text-gray-800 pt-4" style={{ color: "var(--primary)" }}>Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, please contact:
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
