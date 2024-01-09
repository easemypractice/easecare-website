import RootLayout from "@/app/layout";
import AboutBanner from "@/component/about/aboutBanner";
import AboutInfo from "@/component/about/aboutInfo";
import React from "react";

const AboutUsLayout = () => {
  return (
    <RootLayout>
      <AboutBanner />
      <AboutInfo />
    </RootLayout>
  );
};

export default AboutUsLayout;
