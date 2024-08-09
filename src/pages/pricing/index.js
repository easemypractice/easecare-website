"use client";
import RootLayout from "@/app/layout";
import CtaSection from "@/component/home/cta";
import ClarityHospital from "@/component/pricing/clarityHospital";
import PricingBanner from "@/component/pricing/pricingBanner";
import PricingTable from "@/component/pricing/pricingTable";
import React from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";
import { useRouter } from "next/router";
const Pricing = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  return (
    <Layout>
      <HeadPart
        title={"How much does clinic management software cost?"}
        description={
          "Discover clear and competitive pricing of our Clinic Management Software product. Free & Trial facility available for every Clinic & Doctor."
        }
        imageUrl={"images/ogImage/PricingOg.png"}
        pageLink={slug}
      />
      <PricingBanner />
      <ClarityHospital />
      <PricingTable />
      <CtaSection />
    </Layout>
  );
};

export default Pricing;
