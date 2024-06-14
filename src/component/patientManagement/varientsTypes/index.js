import React from "react";
import styles from "@/styles/Patient.module.css";
import BenefitCard from "../banefits/benefitCard";
import contactImg from "@/images/contactPanaImg.svg";
const data = [
  {
    icon: "mage:health-square",
    heading: "Electronic Health Records (EHR) Systems",
    description:
      "Electronic Health Records popularly known as EHR software digitalize all patient data enhance decision-making and seamless access to all medical records in the future.",
  },
  {
    icon: "oui:app-monitoring",
    heading: "Telemedicine and Remote Patient Monitoring Solutions",
    description:
      "This type of software allows for remote consultation for the comfort of patients as they can connect to any doctor regardless of their location.",
  },
  {
    icon: "fluent-mdl2:medical",
    heading: "Medical Practice Management Software",
    description:
      "These types of software help you in enhancing patient experiences as they streamline all the operations within the medical settings.",
  },
  {
    icon: "ph:hospital",
    heading: "Hospital Management Software",
    description:
      "Specifically designed for hospitals, this type of software helps hospitals to increase efficiency and productivity by managing overall hospital operations from administrative tasks to managing patient records.",
  },
];
const VarientTypes = () => {
  return (
    <div className={`container ${styles.VarComp}`}>
      <div className="flex justify-center flex-col items-center gap-20">
        <div className={`${styles.Heading} ${styles.maxheadingWid}`}>
          <span>Exploring Patient Management</span>{" "}
          <span className={styles.GradHead}>
            Software- Types and Variations
          </span>
        </div>
        <p className={styles.Para}>
          Depending on the purpose and requirements, there are various types and
          variations of patient management software systems:
        </p>
        <div className={styles.CardGrp}>
          <BenefitCard data={data} cardType="varient" />
        </div>
      </div>
    </div>
  );
};

export default VarientTypes;