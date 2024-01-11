"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import HeaderLayout from "@/component/header";
import Footer from "@/component/footer";
import '@/styles/mediaQuery.css'
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <HeaderLayout />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
