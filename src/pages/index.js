"use client";
import HeadPart from "@/component/Head/head";
import HomeBanner from "@/component/home/banner";
import CommitmentSection from "@/component/home/commitment";
import CtaSection from "@/component/home/cta";
import DataSecuritySection from "@/component/home/data-security";
import IntegrationsMigrations from "@/component/home/integrations-migrations";
import Testimonail from "@/component/home/testimonial";
import { Box } from "@radix-ui/themes";
import React from "react";
import { Layout } from "@/app/layout";
import CloudBased from "@/component/home/cloudBased";
import ChooseClearity from "@/component/home/chooseClearity.js";
import DownloadApp from "@/component/home/download";
const HomeLayout = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity is a better way to manage practice - EaseCare Clarity"}
        description={
          "Easecare Clarity is one of the best modern practice management systems. It provides a secure and hassle-free onboarding platform for clinics, doctors and Patients."
        }
        imageUrl={"images/ogImage/homePageOg.png"}
      />
      <HomeBanner />
      <CloudBased />
      <Box className="py-20">
        <IntegrationsMigrations />
      </Box>
      <DataSecuritySection />
      <ChooseClearity />
      <DownloadApp />
      <CommitmentSection />
      <Testimonail />
      <CtaSection />
    </Layout>
  );
};

export default HomeLayout;
