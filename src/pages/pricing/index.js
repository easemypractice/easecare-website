import RootLayout from "@/app/layout";
import CtaSection from "@/component/home/cta";
import ClarityHospital from "@/component/pricing/clarityHospital";
import PricingBanner from "@/component/pricing/pricingBanner";
import PricingTable from "@/component/pricing/pricingTable";
import React from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";
import PricingPreview from "@/images/pricing-preview.jpg";
const Pricing = () => {
  return (
    <Layout>
      <HeadPart
        title={"Pricing - Clarity"}
        description={
          "Use Easecare Clarity for free with your whole team. Upgrade to enable unlimited file uploads, patients and additional features.          "
        }
        imageUrl={PricingPreview}
      />
      <PricingBanner />
      <ClarityHospital />
      <PricingTable />
      <CtaSection />
    </Layout>
  );
};

export default Pricing;
