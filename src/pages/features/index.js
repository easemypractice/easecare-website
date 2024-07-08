"use client";
import Analytics from "@/component/features/analytics";
import Calendar from "@/component/features/calendar";
import ClinicManagement from "@/component/features/clinicManagement";
import FeaturesBanner from "@/component/features/featuresBanner";
import CtaSection from "@/component/home/cta";
import React, { useEffect, useState } from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import Link from "next/link";
import { getFeatureData, getSlugs } from "@/utils/service";
import HeroComp from "@/component/feature/HeroComp";
import { useRouter } from "next/router";
import ImageWithContent from "@/component/features/imageWithContent";
import BenefitCard from "@/component/patientManagement/banefits/benefitCard";
import CardsGroups from "@/component/feature/benefitCards";
const FeaturesLayout = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  const [data, setData] = useState([]);
  useEffect(() => {
    getFeaturesData(slug);
  }, [slug]);

  const getFeaturesData = async (slug) => {
    await getFeatureData(slug).then((res) => {
      setData(res);
    });
  };
  console.log(data);
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Layout>
            <HeadPart
              title={"Clarity - Features"}
              description={
                "Easecare Clarity is a tool to remove barriers. Powerful yet simple to use, it helps you to manage clinic, make better decisions and execute faster."
              }
              imageUrl={FeaturesPreviewImage}
            />
            <FeaturesBanner data={item.heroComp} />
            {item.imageWithContent.map((item, index) => (
              <React.Fragment key={index}>
                <ImageWithContent data={item} />
              </React.Fragment>
            ))}
            <CardsGroups data={item.whyEaseCareClarity} />
          </Layout>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default FeaturesLayout;
