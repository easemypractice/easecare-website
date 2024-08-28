import { Icon } from "@iconify/react";
import React from "react";
import styles from "@/styles/Patient.module.css";
import Image from "next/image";
import Link from "next/link";

const BenefitCard = ({ data, cardType }) => {
  // console.log(data);
  return (
    <>
      {data?.map((item, index) => (
        <div
          style={{ backgroundColor: item?.cardBgColor }}
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
                width={item.IconHeight || "39"}
                height={item.IconWidth || "39"}
                style={{ strokeWidth: item.strockWidth || "1" }}
              />
            </div>
            {item.headingLink && (
              <Link href={item.headingLink}>
                <h4 className={`${item.HeadingWidth}`}>{item.heading}</h4>
              </Link>
            )}
            {!item.headingLink && (
              <h4 className={`${item.HeadingWidth}`}>{item.heading}</h4>
            )}
          </div>
          {cardType === "benefit" && (
            <>
              <ul>
                {item?.desc?.map((item) => (
                  <li key={item?.name}>
                    <Icon
                      icon="ic:round-check-circle"
                      width={25}
                      height={25}
                      color="#1AC55E"
                    ></Icon>
                    <span className="flex-1">{item?.name}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center">{item?.para}</p>
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
