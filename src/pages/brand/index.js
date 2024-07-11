"use client";
import BrandBanner from "@/component/brand/brandBanner";
import BrandColor from "@/component/brand/brandColor";
import ClarityIcon from "@/component/brand/clarityIcon";
import ClarityLogo from "@/component/brand/clarityLogo";
import ClarityWordmark from "@/component/brand/clarityWordmark";
import NamingUssage from "@/component/brand/namingUssage";
import React from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";
import BrandPreiviewImage from "@/images/brand-preview.jpg";
const BrandLayout = () => {
  return (
    <Layout>
      <HeadPart
        title={"Brand Guidelines - Clarity"}
        description={
          "Explore our brand guidelines for healthcare software design, ensuring consistent visuals and messaging across platforms."
        }
        imageUrl={BrandPreiviewImage}
      />
      <BrandBanner />
      <div className="box-clarity">
        <NamingUssage />
        <ClarityWordmark />
        <ClarityLogo />
        <ClarityIcon />
        <BrandColor />
      </div>
    </Layout>
  );
};

export default BrandLayout;
