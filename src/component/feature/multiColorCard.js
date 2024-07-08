import React from "react";
import styles from "@/styles/Patient.module.css";
import { Icon } from "@iconify/react";
import CustomBlockText from "../customBlockText";

const MultiColorCardSec = ({ data }) => {
  return (
    <>
      {data && (
        <div
          style={{
            backgroundColor: data?.sectionBg?.hex || "#FCFBF6",
            padding: "30px 0px 78px",
          }}
        >
          <div className={`container ${styles.benefitGrp}`}>
            <div className="flex justify-center flex-col items-center">
              <div
                className="flex justify-center flex-col items-center"
                style={{ gap: "50px" }}
              >
                {data?.title && <CustomBlockText blocks={data?.title} />}
                <div className={styles.CardGrp}>
                  {data?.type?.multiColorCards?.map((item, index) => (
                    <React.Fragment key={index}>
                      <MultiColorCard
                        data={item}
                        cardType={data?.type?.cardType}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const MultiColorCard = ({ data }) => {
  return (
    <>
      <div
        className={`${styles.BenefitCard} ${styles.VarCard} flex-row`}
        style={{ backgroundColor: `${data?.backGroundColor?.hex}` }}
      >
        {data?.myIcon && (
          <div
            className={`${styles.BenefitIcon} ${styles.FeaturesIcon}`}
            style={{ backgroundColor: `${data?.iconBackGround?.hex}1A` }}
          >
            <Icon icon={data?.myIcon?.name} color={"#8512E0"} width={"39"} />
          </div>
        )}
        <div className={`flex gap-3 flex-col justify-flex-start flex-1`}>
          <CustomBlockText blocks={data.multiColorCard} />
        </div>
      </div>
    </>
  );
};
export default MultiColorCardSec;
