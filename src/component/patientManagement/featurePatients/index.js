import React from "react";
import styles from "@/styles/Patient.module.css";
import { Icon } from "@iconify/react";
const featureData = [
  {
    icon: "teenyicons:appointments-outline",
    bgColor: "#E8D2F9",
    IconbgColor: "#8512E01A",
    heading: "Appointment Scheduling",
    description:
      "Scheduling the appointments automatically, quickly, and seamlessly whenever it is confirmed from the side of the patients",
  },
  {
    icon: "material-symbols-light:patient-list-outline",
    bgColor: "#D0F4FF",
    IconbgColor: "#08C7FB1A",
    heading: "Patient Records Management",
    description:
      "Keep the whole record of every patient with the help of a patient record management system to connect better with them when they visit you again",
  },
  {
    icon: "healthicons:communication-outline",
    bgColor: "#D3F2E6",
    IconbgColor: "#19BB7D1A",
    heading: "Communication Tools",
    description:
      "PMS facilitates effective and secure communication between patients and service providers",
  },
  {
    icon: "carbon:report",
    bgColor: "#FFF2DD",
    IconbgColor: "#FAE2BB",
    heading: "Inventory Management",
    description:
      "Keep track of the stock of each and every single thing in your clinic through accurate inventory management",
  },
  {
    icon: "carbon:dashboard",
    bgColor: "#FFE9E2",
    IconbgColor: "#8512E01A",
    heading: "Patient Portal",
    description:
      "Offer your patients maximum convenience through a patient portal to access test results, prescriptions, and medical history",
  },
  {
    icon: "carbon:document-requirements",
    bgColor: "#E0E1FD",
    IconbgColor: "#08C7FB1A",
    heading: "Analytics and Reporting",
    description:
      "Through detailed insights into the practice performance, patient demographics, and outcomes professionals make better decisions",
  },
];
const FeaturesPatient = () => {
  return (
    <div style={{ backgroundColor: "#FCFBF6", paddingBottom: "78px" }}>
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <div className={styles.Heading}>
            Features of Patient{" "}
            <span className={styles.GradHead}>Management Software</span>
          </div>
          <div className={styles.CardGrp}>
            <FeaturesCard data={featureData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturesCard = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div
          className={`${styles.BenefitCard} ${styles.VarCard} flex-row`}
          style={{ backgroundColor: `${item.bgColor}` }}
          key={index}
        >
          <div
            className={`${styles.BenefitIcon} ${styles.FeaturesIcon}`}
            style={{ backgroundColor: `${item.IconbgColor}` }}
          >
            <Icon icon={item.icon} color={"#8512E0"} width="39" height="39" />
          </div>
          <div className={`flex gap-3 flex-col justify-flex-start flex-1`}>
            <h4>{item.heading}</h4>
            <p className={item.displayClass}>{item?.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default FeaturesPatient;
