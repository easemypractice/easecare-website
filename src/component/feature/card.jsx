import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/styles/Patient.module.css";
import CustomBlockText from "../customBlockText";
const Card = ({ data, cardType }) => {
  return (
    <div
      style={{ backgroundColor: data?.backGroundColor?.hex }}
      className={`${styles.BenefitCard} ${cardType === "varients" && styles.VarCard} ${cardType === "practice" && styles.PracticeCard}`}
    >
      <div
        className={`flex items-center flex-col gap-3 ${cardType === "varients" && "flex-row justify-flex-start"}`}
      >
        <div
          className={`${styles.BenefitIcon} ${cardType === "varients" && styles.VarIcon} ${cardType === "practice" && styles.PracticeIcon}`}
          style={{ backgroundColor: data?.iconBackGround?.hex }}
        >
          <Icon
            icon={data.myIcon?.name}
            color={
              cardType === "benefits"
                ? "white"
                : cardType === "varients"
                  ? data?.iconColor?.hex
                    ? data?.iconColor?.hex
                    : "#8512E0"
                  : cardType === "practice"
                    ? data?.iconColor?.hex
                    : undefined
            }
            width={data?.iconSize || "39"}
          />
        </div>
        <h4>{data.cardTitle}</h4>
      </div>
      <CustomBlockText
        blocks={data.benefitCard || data.varientCard || data.practiceCard}
      />
    </div>
  );
};

export default Card;
