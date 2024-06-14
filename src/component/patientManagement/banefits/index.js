import React from "react";
import styles from "@/styles/Patient.module.css";
import BenefitCard from "./benefitCard";
const data = [
  {
    icon: "teenyicons:appointments-outline",
    heading: "Flexible Appointments",
    desc: [
      {
        name: "Our software not only makes you offer your patients personalized sessions but also makes it time-efficient for them.",
      },
      {
        name: "Manage Patient appointments with a mobile app or through the website while you can track everything from billing to measuring customer satisfaction.",
      },
    ],
  },
  {
    icon: "icon-park-outline:bill",
    heading: "Easy Billing",
    desc: [
      {
        name: "Systematize all your financial processes from keeping the records of payments to bill creation. ",
      },
      {
        name: "Bulk printed prescriptions for the ease of the patients along with the brand name on it, doing marketing of your brand at the same time.",
      },
    ],
  },
  {
    icon: "material-symbols-light:patient-list-outline",
    heading: "Patient Records",
    desc: [
      {
        name: "Have a pre-existing record of the situation of your patients from health conditions to medications to increase the succession rate during the treatment. ",
      },
      {
        name: "Improved and personalized care with the help of extensive reports and analytics.",
      },
    ],
  },
  {
    icon: "charm:shield-tick",
    heading: "Safety & Security",
    desc: [
      {
        name: "With our patient management software, be tention-fee about your data as our patient data management system provides unparalleled safety and confidentiality. ",
      },
      {
        name: "Along with providing various software solutions according to your needs and preferences, we adhere to relevant industry standards.",
      },
    ],
  },
];
const BenefitPatients = () => {
  return (
    <div className="container">
      <div className="flex justify-center flex-col items-center">
        <div className={styles.Heading}>
          Benefits of Patient{" "}
          <span className={styles.GradHead}>Management Software</span>
        </div>
        <div className={styles.CardGrp}>
          <BenefitCard data={data} cardType="benefit" />
        </div>
      </div>
    </div>
  );
};

export default BenefitPatients;
