import React from "react";
import styles from "@/styles/Patient.module.css";
import { Icon } from "@iconify/react";

const FeaturesPatient = ({ data }) => {
  return (
    <div style={{ backgroundColor: "#FCFBF6", paddingBottom: "78px" }}>
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <div className={`${styles.Heading} ${data.HeadingClass}`}>
            {data.HeadingFirst}{" "}
            <div className={styles.GradHead}>{data?.HeadingSec}</div>
          </div>
          <p className={`${styles.Para} ${data?.ParaClass}`}>{data?.Para}</p>
          <div className={styles.CardGrp}>
            <FeaturesCard data={data.CardData} />
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
            <Icon
              icon={item.icon}
              color={"#8512E0"}
              width={item.IconWidth || "39"}
              height={item.IconHeight || "39"}
              style={{ strokeWidth: item.strokeWidth || "1" }}
            />
          </div>
          <div className={`flex gap-3 flex-col justify-flex-start flex-1`}>
            <h4 className={`${item?.headingClass}`}>{item.heading}</h4>
            <p className={item.displayClass}>{item?.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default FeaturesPatient;
