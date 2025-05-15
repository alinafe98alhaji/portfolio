import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBg from "../components/ParticlesBg";
import { LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alinafe's Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable} relative antialiased bg-gray-900 text-white`}
>
<LazyMotion features={domAnimation}>

        {/* Navbar */}
        <header className="p-4 bg-gray-800">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative container mx-auto p-6">
  <ParticlesBg />
  {children}
</main>

        {/* Footer */}
        <footer className="p-4 bg-gray-800 text-center mt-10">
          <p>&copy; {new Date().getFullYear()} Spruce. All Rights Reserved.</p>
        </footer>
        </LazyMotion>
      </body>
    </html>
  );
}
