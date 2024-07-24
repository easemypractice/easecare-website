"use client";
import AboutBanner from "@/component/about/aboutBanner";
import AboutInfo from "@/component/about/aboutInfo";
import React from "react";
import { Layout } from "../../app/layout";
import Head from "next/head";
// import AboutPreviewImage from "@/images/about-preview.svg";
import AboutPreviewImage from "../../../public/images/about-preview.svg";
import HeadPart from "@/component/Head/head";

const AboutUsLayout = () => {
  return (
    <Layout>
      <HeadPart
        title={"Enhancing Healthcare Industry with EaseCare Clarity"}
        description={
          "Learn about our mission to innovate healthcare solutions. Discover Easecare Clarity's commitment to excellence in software and customer success."
        }
        pageLink={"about-us"}
        imageUrl={"images/ogImage/AboutUsOg.png"}
      />
      <AboutBanner />
      <AboutInfo />
    </Layout>
  );
};

export default AboutUsLayout;
