import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import React from "react";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import PatientManagmentBanner from "@/component/patientManagement/banner";

import BenefitPatients from "@/component/patientManagement/banefits";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import Divider from "@/component/patientManagement/divider";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import contactImg from "@/images/contactPanaImg.svg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import ChallangeFaced from "@/component/patientManagement/challangeFaced";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import BestPractice from "@/component/patientManagement/bestPractice";
import FAQs from "@/component/patientManagement/faqs";
const PatientManagement = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity - Features"}
        description={
          "Easecare Clarity is a tool to remove barriers. Powerful yet simple to use, it helps you to manage clinic, make better decisions and execute faster."
        }
        imageUrl={FeaturesPreviewImage}
      />
      <PatientManagmentBanner />
      <BenefitPatients />
      <Divider />
      <ContactUsPatients
        image={contactImg}
        content="Want to explore the optimum benefits of the best patient data management system?"
        btnText="Contact us today"
      />
      <VarientTypes />
      <FeaturesPatient />
      <ContactUsPatients
        image={featureImg}
        content="Want to explore more features? Contact EaseCare-Clarity today and get a free demo!"
        btnText="Contact us today"
      />
      <ChallangeFaced />
      <SelectRight />
      <div className="my-6">
        <ContactUsPatients
          image={cuateImg}
          content="Finding the best clinic patient management system? EaseCare-Clarity is your destination. Reach out to us and you will not regret your decision!"
          btnText="Get a free Demo"
        />
      </div>
      <div style={{ backgroundColor: "#FCFBF6" }}>
        <BestPractice />
      </div>
      <FAQs />
    </Layout>
  );
};

export default PatientManagement;
