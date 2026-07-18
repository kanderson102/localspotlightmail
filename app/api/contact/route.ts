import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { town, businessName, contactName, email, phone, message } = await req.json();

    if (!email || !contactName) {
      return NextResponse.json(
        { error: "Contact name and email are required." },
        { status: 400 }
      );
    }

    const townName = town || "Markham Woods";
    const business = businessName ? businessName.trim() : "New Prospect";
    
    // Subject line formula: "The X Spotlight inquiry - Y"
    const subjectLine = `The ${townName} Spotlight inquiry - ${business}`;

    // Initialize Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Local Spotlight Mail <contact@localspotlightmail.com>",
        to: ["kyle@localspotlightmail.com"],
        replyTo: email,
        subject: subjectLine,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Town / Location:</strong> ${townName}</p>
          <p><strong>Business Name:</strong> ${business}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
          <hr/>
          <p><small>Submitted via localspotlightmail.com contact form</small></p>
        `,
      });
    } else {
      console.warn("RESEND_API_KEY is not set. Email notification skipped in dev mode.");
    }

    // Forward to Google Sheets Webhook if configured
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            town: townName,
            businessName: business,
            name: contactName,
            email,
            phone: phone || "",
            message: message || "",
          }),
        });
      } catch (sheetErr) {
        console.error("Failed to forward payload to Google Sheets webhook:", sheetErr);
      }
    }

    return NextResponse.json({ success: true, message: "Submission successful" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
