import React from "react";
import styles from "@/styles/Patient.module.css";
import { Icon } from "@iconify/react";
const DifferenceCard = ({ data }) => {
  return (
    <div className={`container ${styles.VarComp}`}>
      <div className="flex justify-center flex-col items-center gap-20">
        <div
          className={`${styles.Heading} ${styles.maxheadingWid} ${data?.HeadingClass}`}
        >
          <span>{data?.HeadingFirst}</span>{" "}
          <div className={styles.GradHead}>{data?.HeadingSec}</div>
        </div>
        <p className={styles.Para}>{data?.para}</p>
        <div className={styles.CardGrp}>
          {data.differenceCard.map((item, index) => (
            <div
              key={index}
              className={`${styles.diffSec} ${styles.BenefitCard} flex-align-start}`}
              style={{ background: item?.cardBg }}
            >
              <h2>{item.title}</h2>
              <ul>
                {item.list.map((list, index) => (
                  <li key={index}>
                    <Icon
                      icon="ic:round-check-circle"
                      width={28}
                      height={28}
                      color="#1AC55E"
                    ></Icon>
                    <span className="flex-1">{list.listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifferenceCard;
