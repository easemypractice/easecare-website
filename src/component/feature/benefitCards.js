import React from "react";
import styles from "@/styles/Patient.module.css";
import CustomBlockText from "../customBlockText";
import Card from "./card";
const CardsGroups = ({ data }) => {
  return (
    <>
      {data && (
        <div
          style={{ backgroundColor: data?.sectionBg?.hex, padding: "12px 0px" }}
        >
          <div
            className={`container ${styles.benefitGrp}`}
            style={{ margin: "50px auto" }}
          >
            <div className="flex justify-center flex-col gap-20 items-center">
              <div style={{ paddingBottom: "20px" }}>
                <CustomBlockText blocks={data?.title} />
              </div>
              <div
                className={`${styles.CardGrp}`}
                style={{
                  gridTemplateColumns:
                    data?.cardsPerRow === 3 ? "auto auto auto" : "auto auto",
                }}
              >
                {data?.type?.benefitCards?.map((item, index) => (
                  <React.Fragment key={index}>
                    <Card data={item} cardType={data?.type?.cardType} />
                  </React.Fragment>
                ))}
                {data?.type?.varientCards?.map((item, index) => (
                  <React.Fragment key={index}>
                    <Card data={item} cardType={data?.type?.cardType} />
                  </React.Fragment>
                ))}
                {data?.type?.practiceCards?.map((item, index) => (
                  <React.Fragment key={index}>
                    <Card data={item} cardType={data?.type?.cardType} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardsGroups;
