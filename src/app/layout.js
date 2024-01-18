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
import Logo from "@/images/logo.svg";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ title, description, image, children }) {
  const imageUrl = image || Logo;
  return (
    <html lang="en">
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
      </Head> */}
      <body className={"body"}>
        {/* heelo
        <LoadingBar /> */}
        <Layout title={title}> {children}</Layout>
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
