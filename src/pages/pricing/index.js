import RootLayout from "@/app/layout";
import CtaSection from "@/component/home/cta";
import ClarityHospital from "@/component/pricing/clarityHospital";
import PricingBanner from "@/component/pricing/pricingBanner";
import PricingTable from "@/component/pricing/pricingTable";
import React from "react";
import { Layout } from "../../app/layout";

const Pricing = () => {
  return (
    <Layout>
      <PricingBanner />
      <ClarityHospital />
      <PricingTable />
      <CtaSection />
    </Layout>
  );
};

export default Pricing;
