import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import React from "react";
import styles from "../styles/Demo.module.css";
import { InlineWidget } from "react-calendly";
import Image from "next/image";
import check from "@/images/check.svg";
const ThankPage = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity is a better way to manage practice"}
        description={
          "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
        }
        imageUrl={"/public/imags/priview.jpg"}
      />
      <div className={`container purple ${styles.thanksPage}`}>
        {/* <div>
          <span>
            <Image src={check} width={32} height={32} alt="" />
          </span> */}
        <h2>We have received your query</h2>
        {/* </div> */}
        <p>
          Our experts will contact you within 24 working hours to continue the
          conversation.
        </p>
        <h1>What Next?</h1>
        <InlineWidget
          className={styles.Calender}
          styles={{
            height: "700px",
            // minHeight: "100%",
          }}
          url="https://calendly.com/easecare/30min"
        />
      </div>
    </Layout>
  );
};

export default ThankPage;
