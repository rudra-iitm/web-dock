import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FlickeringGrid from "@/components/ui/flickering-grid";
import {
  ClerkProvider,
} from '@clerk/nextjs';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

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
          <div className="relative min-h-screen">
            <FlickeringGrid
              className="fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
              squareSize={4}
              gridGap={8}
              color="#60A5FA"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
