import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://localspotlightmail.com"),
  title: "Local Spotlight Mail | Premium Co-op Postcard Mailers",
  description: "Get your business in front of targeted local doors for pennies per home. Exclusive category slots available.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Local Spotlight Mail | Premium Co-op Postcard Mailers",
    description: "Get your business in front of targeted local doors for pennies per home. Exclusive category slots available.",
    url: "https://localspotlightmail.com",
    siteName: "Local Spotlight Mail",
    images: [
      {
        url: "/assets/dog_with_card.png",
        width: 1200,
        height: 630,
        alt: "Local Spotlight Mail Header",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Spotlight Mail | Premium Co-op Postcard Mailers",
    description: "Get your business in front of targeted local doors for pennies per home. Exclusive category slots available.",
    images: ["/assets/dog_with_card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased text-gray-900 bg-gray-50 flex flex-col">
        {children}
      </body>
    </html>
  );
}
