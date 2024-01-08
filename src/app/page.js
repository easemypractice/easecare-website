import React from "react";
import styles from "./page.module.css";
import HomeLayout from "@/pages/home";
import HeaderLayout from "@/component/header";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeLayout />
    </main>
  );
}
