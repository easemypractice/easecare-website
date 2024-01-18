"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import HeaderLayout from "@/component/header";
import Footer from "@/component/footer";
import FaviconIcon from "./favicon.ico";
import "@/styles/mediaQuery.css";
import LoadingBar from "../component/loadingBar/loadingBar";
import Head from "next/head";
import HomePreviewImage from "@/images/home-preview.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{"Clarity is a better way to manage practice"}</title>
        <meta
          name="description"
          content={
            "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
          }
        />
        <meta
          property="og:title"
          content={"Clarity is a better way to manage practice"}
        />
        <meta
          property="og:description"
          content={
            "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
          }
        />
        <meta property="og:image" content={HomePreviewImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content="image/jpg" />
      </head>
      <body className={"body"}>
        {/* heelo
        <LoadingBar /> */}

        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
export const Layout = ({ children }) => {
  return (
    <div className="main-content">
      <Theme>
        <HeaderLayout />
        <main>{children}</main>
        <Footer />
      </Theme>
    </div>
  );
};
