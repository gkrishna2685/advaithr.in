import React from "react"
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Advait Infotech - Complete IT Infrastructure & Manpower Solutions",
  description:
    "Your trusted technology and workforce partner delivering reliable, scalable, and cost-effective IT and manpower solutions across India. IT Rentals, Repairs, AMC, IT & Non-IT Staffing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
