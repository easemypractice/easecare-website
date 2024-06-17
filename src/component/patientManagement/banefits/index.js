import React from "react";
import styles from "@/styles/Patient.module.css";
import BenefitCard from "./benefitCard";

const BenefitPatients = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="container" key={index}>
          <div className="flex justify-center flex-col items-center">
            <div
              className={`${styles.Heading} ${item?.maxWidth} ${item?.HeadingClass}`}
            >
              {item.HeadingFirst}{" "}
              <span className={styles.GradHead}>{item?.HeadingSec}</span>
            </div>
            <p className={`${styles.Para} ${item.paraClass}`}>{item?.para}</p>
            <div className={styles.CardGrp}>
              <BenefitCard data={item.benefitData} cardType={item.cardType} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BenefitPatients;
