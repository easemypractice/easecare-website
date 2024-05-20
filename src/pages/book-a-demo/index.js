import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import DemoComp from "@/component/demo";
import HeaderLayout from "@/component/header";
import React from "react";

const GetDemo = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity is a better way to manage practice"}
        description={
          "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
        }
        imageUrl={"/public/imags/priview.jpg"}
      />
      <DemoComp />
    </Layout>
  );
};

export default GetDemo;
