import React from "react";
import styles from "@/styles/Patient.module.css";
import Image from "next/image";
import challangeImg from "@/images/doctors-cuate.svg";
const ChallangeFaced = () => {
  return (
    <div className="container">
      <div className="flex justify-center flex-col items-center gap-">
        <div className={`${styles.Heading} ${styles.headingPadding}`}>
          Challenges Faced By{" "}
          <span className={styles.GradHead}>Healthcare Professionals</span>
        </div>
        <p className={styles.Para}>
          When healthcare professionals don’t have access to Patient Management
          Software (PMS), below are some of the challenges they face during
          their work:
        </p>
        <div className={`container ${styles.challangeContainer}`}>
          <Image src={challangeImg} />
          <div className={styles.challangeRight}>
            <div className="flex gap-3">
              <div className={styles.circle} />
              <div className={`${styles.challangeText} flex-1`}>
                Inconsistent appointments can sometimes go over their capacity.
              </div>
            </div>
            <div className="flex gap-3">
              <div className={styles.circle} />
              <div className={`${styles.challangeText} flex-1`}>
                Inefficient workload burdening them along with increasing the
                costs. 
              </div>
            </div>
            <div className="flex gap-3">
              <div className={styles.circle} />
              <div className={`${styles.challangeText} flex-1`}>
                Payment processes without proper patient scheduling software
                will be long-winded and long
              </div>
            </div>
            <div className="flex gap-3">
              <div className={styles.circle} />
              <div className={`${styles.challangeText} flex-1`}>
                Without having a proper patient record management system, there
                will be a lack of reliable patient history records.
              </div>
            </div>
            <div className="flex gap-3">
              <div className={styles.circle} />
              <div className={`${styles.challangeText} flex-1`}>
                A robust clinic patient management system makes it smoother to
                share information across various departments and even different
                medical settings
              </div>
            </div>
            <div className="flex gap-3">
              <div className={styles.circle} />
              <div className={`${styles.challangeText} flex-1`}>
                Unstructured patient information which they have to brainstorm
                right from the start if a patient visits them again to check his
                medical history.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallangeFaced;
