import React from "react";
import styles from "@/styles/Patient.module.css";
import { Heading } from "@radix-ui/themes";
const StandOutComp = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => (
          <div className="container" key={index}>
            <div className="flex justify-center flex-col items-center">
              <Heading
                as="h2"
                className={`${styles.Heading} ${item?.maxWidth} ${item?.HeadingClass}`}
              >
                <span>{item.HeadingFirst}</span>{" "}
                <span className={styles.GradHead}>{item?.HeadingSec}</span>
              </Heading>
              <p className={`${styles.Para} ${item.paraClass}`}>{item?.para}</p>
              <div className={`${styles.CardGrp} ${item?.cardClass}`}>
                {/* <BenefitCard data={item.benefitData} cardType={item.cardType} /> */}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default StandOutComp;
