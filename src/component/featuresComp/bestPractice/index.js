import React from "react";
import BenefitCard from "../banefits/benefitCard";
import styles from "@/styles/Patient.module.css";
import { Heading } from "@radix-ui/themes";
const cardData = [
  {
    icon: "hugeicons:ai-innovation-01",
    iconColor: "#8F1BE4",
    heading: "Cutting-Edge and Advanced Solutions",
    description:
      "When it comes to providing the best services to our customers, quality and advanced technology fuel our expertise",
  },
  {
    icon: "fluent:person-support-20-regular",
    iconColor: "#19BB7D",
    heading: "Unwavering Support",
    description:
      "Our unwavering support to our customers even after the service is our greatest pride",
  },
  {
    icon: "streamline:user-check-validate",
    iconColor: "#3278B1",
    heading: "Industry Leading Expertise",
    description:
      "When it comes to healthcare software development, we have years of experience in this field making us the best choice for you",
  },
  {
    icon: "eos-icons:secure-data-outlined",
    iconColor: "#08C7FB",
    heading: "Data Security",
    description:
      "With constantly increasing digital threats, we recognize the importance of data security for our customers adopting various advanced solutions",
  },
];

// const data = {
//   HeadingFirst: "Exploring Patient Management",
//   HeadingSec: "Software- Types and Variations",
//   para: "Depending on the purpose and requirements, there are various types and variations of patient management software systems:",
//   cardType: "practice",
// };

const BestPractice = () => {
  return (
    <>
      <div
        className={`container ${styles.VarComp}`}
        style={{ backgroundColor: "#FCFBF6" }}
      >
        <div className="flex justify-center flex-col items-center gap-20">
          <Heading
            as="h2"
            className={`${styles.Heading} ${styles.maxheadingWid}`}
          >
            <span className={styles.GradHead}>
              Software- Types and Variations
            </span>
          </Heading>
          <p className={styles.Para}>
            Depending on the purpose and requirements, there are various types
            and variations of patient management software systems:
          </p>
          <div className={styles.CardGrp}>
            <BenefitCard data={cardData} cardType="practice" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPractice;
