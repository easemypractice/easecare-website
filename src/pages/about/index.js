import AboutBanner from "@/component/about/aboutBanner";
import AboutInfo from "@/component/about/aboutInfo";
import React from "react";
import { Layout } from "../../app/layout";
import Head from "next/head";
// import AboutPreviewImage from "@/images/about-preview.svg";
import AboutPreviewImage from "../public/images/about-preview.svg";
import HeadPart from "@/component/Head/head";

const AboutUsLayout = () => {
  return (
    <Layout>
      <HeadPart
        title={"About - Clarity"}
        description={"We’re bringing magic back to healthcare software."}
        imageUrl={AboutPreviewImage}
      />
      <AboutBanner />
      <AboutInfo />
    </Layout>
  );
};

export default AboutUsLayout;
