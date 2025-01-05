import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FlickeringGrid from "@/components/ui/flickering-grid";
import {
  ClerkProvider,
} from '@clerk/nextjs';
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Dock",
  description: "Run Node.js framework in your browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Footer />
          <FlickeringGrid
          className="z-0 relative inset-0"
          squareSize={4}
          gridGap={16}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        </body>
      </html>
    </ClerkProvider>
  );
}
