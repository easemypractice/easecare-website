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

const HomeLayout = () => {
  return (
    <div>
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
