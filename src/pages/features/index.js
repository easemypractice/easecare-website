"use client";
import Analytics from "@/component/features/analytics";
import Calendar from "@/component/features/calendar";
import ClinicManagement from "@/component/features/clinicManagement";
import FeaturesBanner from "@/component/features/featuresBanner";
import PatientManagement from "@/component/features/patientManagement";
import CtaSection from "@/component/home/cta";
import React from "react";
import { Layout } from "../../app/layout";

const FeaturesLayout = () => {
  return (
    <Layout>
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
