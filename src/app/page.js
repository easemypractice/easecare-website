import Image from "next/image";
import styles from "./page.module.css";
import { Flex, Text, Button, Box, Grid } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";
export default function Home() {
  return (
    <main className={styles.main}>
      <Theme>Welcome EaseCare</Theme>
    </main>
  );
}
