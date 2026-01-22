import type { Metadata } from "next";
import { Open_Sans, Jost, Poppins } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mahmoud AL-Bndkji Portfolio",
  description: "A Mobile Application Developer, My expertise spans Swift for iOS development, Kotlin for Android development, and Dart for Flutter.",
  keywords: "Mahmoud AL-Bndkji Portfolio, Software Engineer, Mobile Applicatoin Developer, Flutter Developer, Web Developer",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${openSans.variable} ${jost.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
