"use client";
import RootLayout from "@/app/layout";
import Analytics from "@/component/features/analytics";
import Calendar from "@/component/features/calendar";
import ClinicManagement from "@/component/features/clinicManagement";
import FeaturesBanner from "@/component/features/featuresBanner";
import PatientManagement from "@/component/features/patientManagement";
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

const FeaturesLayout = () => {
  return (
    <RootLayout>
      <FeaturesBanner />
      <PatientManagement />
      <ClinicManagement />
      <Analytics />
      <Calendar />
      <CtaSection />
    </RootLayout>
  );
};

export default FeaturesLayout;
