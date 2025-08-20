import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noorul Ulama – Website Maintenance",
  description:
    "Our website is currently being updated with new features and improvements. Stay tuned for an improved experience!",
  keywords: ["Noorul Ulama", "Maintenance Page", "Website Update", "Coming Soon"],
  authors: [{ name: "Noorul Ulama" }],
  openGraph: {
    title: "Noorul Ulama – Website Maintenance",
    description:
      "We’re busy improving our website. Check back soon for exciting updates!",
    url: "https://your-domain.com", // replace with your domain
    siteName: "Noorul Ulama",
    images: [
      {
        url: "/og-image.png", // create a banner or use your logo
        width: 1200,
        height: 630,
        alt: "Noorul Ulama Maintenance Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noorul Ulama – Website Maintenance",
    description:
      "We’re working on something new. Stay tuned for the updated experience!",
    images: ["/og-image.png"], // same as Open Graph image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100`}
      >
        {children}
      </body>
    </html>
  );
}
