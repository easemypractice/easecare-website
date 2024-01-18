import HomeBanner from "@/component/home/banner";
import CommitmentSection from "@/component/home/commitment";
import CtaSection from "@/component/home/cta";
import DataSecuritySection from "@/component/home/data-security";
import EhrPlatformSection from "@/component/home/ehr-platform";
import HighlightLayout from "@/component/home/highlight";
import IntegrationsMigrations from "@/component/home/integrations-migrations";
import Testimonail from "@/component/home/testimonial";
import { Box } from "@radix-ui/themes";
import Head from "next/head";
import React from "react";

const HomeLayout = () => {
  return (
    <div>
      <Head>
        <title>{"Clarity is a better way to manage practice"}</title>
        <meta
          name="description"
          content={
            "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
          }
        />
        <meta
          property="og:title"
          content={"Clarity is a better way to manage practice"}
        />
        <meta
          property="og:description"
          content={
            "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
          }
        />
        {/* <meta property="og:image" content={imageUrl} /> */}
      </Head>
      <HomeBanner />
      <HighlightLayout />
      <EhrPlatformSection />
      <Box className="py-20">
        <IntegrationsMigrations />
      </Box>
      <DataSecuritySection />
      <CommitmentSection />
      <Testimonail />

      <CtaSection />
    </div>
  );
};

export default HomeLayout;
