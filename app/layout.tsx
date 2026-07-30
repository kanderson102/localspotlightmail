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
  title: "Local Spotlight Mail | Premium Co-op Postcard Mailers",
  description: "Get your business in front of targeted local doors for pennies per home. Exclusive category slots available.",
  icons: {
    icon: "/favicon.svg",
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
