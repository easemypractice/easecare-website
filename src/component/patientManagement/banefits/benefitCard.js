import { Icon } from "@iconify/react";
import React from "react";
import styles from "@/styles/Patient.module.css";
import Image from "next/image";

const BenefitCard = ({ data, cardType }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div
          className={`${styles.BenefitCard} ${cardType === "varient" && styles.VarCard} ${cardType === "practice" && styles.PracticeCard}`}
          key={index}
        >
          <div
            className={`flex items-center flex-col gap-3 ${cardType === "varient" && "flex-row justify-flex-start"}`}
          >
            <div
              className={`${styles.BenefitIcon} ${cardType === "varient" && styles.VarIcon} ${cardType === "practice" && styles.PracticeIcon}`}
            >
              <Icon
                icon={item.icon}
                color={
                  cardType === "benefit"
                    ? "white"
                    : cardType === "varient"
                      ? item.colorIcon
                        ? item.colorIcon
                        : "#8512E0"
                      : cardType === "practice"
                        ? item.iconColor
                        : undefined
                }
                width="39"
                height="39"
              />
            </div>
            <h4 className={`${item.HeadingWidth}`}>{item.heading}</h4>
          </div>
          {cardType === "benefit" && (
            <>
              <ul>
                {item?.desc?.map((item) => (
                  <li key={item?.name}>{item?.name}</li>
                ))}
              </ul>
              <p>{item?.para}</p>
            </>
          )}
          {cardType === "varient" && <p>{item?.description}</p>}
          {cardType === "practice" && <p>{item?.description}</p>}
        </div>
      ))}
    </>
  );
};

export default BenefitCard;
