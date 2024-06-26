"use client";
import HeadPart from "@/component/Head/head";
import HomeBanner from "@/component/home/banner";
import CommitmentSection from "@/component/home/commitment";
import CtaSection from "@/component/home/cta";
import DataSecuritySection from "@/component/home/data-security";
import EhrPlatformSection from "@/component/home/ehr-platform";
import HighlightLayout from "@/component/home/highlight";
import IntegrationsMigrations from "@/component/home/integrations-migrations";
import Testimonail from "@/component/home/testimonial";
import { Box } from "@radix-ui/themes";
import React from "react";
import HomePreview from "../../public/images/preview.jpg";
import { Layout } from "@/app/layout";
import CloudBased from "@/component/home/cloudBased";
import ChooseClearity from "@/component/home/chooseClearity.js";
import DownloadApp from "@/component/home/download";
import Image from "next/image";

const HomeLayout = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity is a better way to manage practice"}
        description={
          "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
        }
        imageUrl={"/public/images/preview.jpg"}
      />
      <HomeBanner />
      <CloudBased />
      {/* <HighlightLayout /> */}
      {/* <EhrPlatformSection /> */}
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
