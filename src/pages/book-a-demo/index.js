import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import DemoComp from "@/component/demo";
import HeaderLayout from "@/component/header";
import React from "react";

const GetDemo = () => {
  return (
    <Layout>
      <HeadPart
        title={"Get FREE Clinic Management Software DEMO | Easecare"}
        description={
          "Take a FREE Demo of our latest clinic management softwares. Witness their capabilities and their impact on your business."
        }
        imageUrl={"/public/imags/priview.jpg"}
      />
      <DemoComp />
    </Layout>
  );
};

export default GetDemo;
