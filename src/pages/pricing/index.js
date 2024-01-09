import RootLayout from "@/app/layout";
import CtaSection from "@/component/home/cta";
import ClarityHospital from "@/component/pricing/clarityHospital";
import PricingBanner from "@/component/pricing/pricingBanner";
import React from "react";

const Pricing = () => {
  return (
    <RootLayout>
      <PricingBanner />
      <ClarityHospital />
      <CtaSection />
    </RootLayout>
  );
};

export default Pricing;
