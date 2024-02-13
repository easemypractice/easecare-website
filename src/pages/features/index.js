"use client";
import Analytics from "@/component/features/analytics";
import Calendar from "@/component/features/calendar";
import ClinicManagement from "@/component/features/clinicManagement";
import FeaturesBanner from "@/component/features/featuresBanner";
import PatientManagement from "@/component/features/patientManagement";
import CtaSection from "@/component/home/cta";
import React from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
const FeaturesLayout = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity - Features"}
        description={
          "Easecare Clarity is a tool to remove barriers. Powerful yet simple to use, it helps you to manage clinic, make better decisions and execute faster."
        }
        imageUrl={FeaturesPreviewImage}
      />
      <FeaturesBanner />
      <PatientManagement />
      <ClinicManagement />
      <Analytics />
      <Calendar />
      <CtaSection />
    </Layout>
  );
};

export default FeaturesLayout;
