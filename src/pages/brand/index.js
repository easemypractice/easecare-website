"use client";
import RootLayout from "@/app/layout";
import BrandBanner from "@/component/brand/brandBanner";
import BrandColor from "@/component/brand/brandColor";
import ClarityIcon from "@/component/brand/clarityIcon";
import ClarityLogo from "@/component/brand/clarityLogo";
import ClarityWordmark from "@/component/brand/clarityWordmark";
import NamingUssage from "@/component/brand/namingUssage";
import React from "react";

const BrandLayout = () => {
  return (
    <RootLayout>
      <BrandBanner />
      <div className="box-clarity">
        <NamingUssage />
        <ClarityWordmark />
        <ClarityLogo />
        <ClarityIcon />
        <BrandColor />
      </div>
    </RootLayout>
  );
};

export default BrandLayout;
