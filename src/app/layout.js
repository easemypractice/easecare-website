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
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
