import React from "react";
import HomeLayout from "@/pages/home";
import { Inter } from "next/font/google";
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
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <HeadPart
        title={"Clarity is a better way to manage practicey"}
        description={
          "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
        }
        // imageUrl={AboutPreviewImage}
      />
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
    </RootLayout>
  );
}
