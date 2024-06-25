import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import HeroComp from "@/component/feature/HeroComp";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import { getFeaturesData } from "@/utils/service";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Feature = () => {
  const [featuresData, setFeaturesData] = useState([]);
  const router = useParams();
  useEffect(() => {
    getFeaturesData(router?.slug).then((res) => {
      setFeaturesData(res?.map((item) => item?.heroComp));
    });
  }, []);
  return (
    <Layout>
      <HeadPart
        title={"Clarity - Patient management"}
        description={
          "Easecare Clarity is a tool to remove barriers. Powerful yet simple to use, it helps you to manage clinic, make better decisions and execute faster."
        }
        // imageUrl={FeaturesPreviewImage}
      />
      {featuresData?.length > 0 &&
        featuresData?.map((section) => (
          <HeroComp key={section._key} section={section} />
        ))}
    </Layout>
  );
};

export default Feature;
