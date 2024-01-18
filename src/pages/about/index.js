import AboutBanner from "@/component/about/aboutBanner";
import AboutInfo from "@/component/about/aboutInfo";
import React from "react";
import { Layout } from "../../app/layout";

const AboutUsLayout = () => {
  return (
    <Layout >
      <AboutBanner />
      <AboutInfo />
    </Layout>
  );
};

export default AboutUsLayout;
