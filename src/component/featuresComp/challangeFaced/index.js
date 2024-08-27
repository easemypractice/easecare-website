import React from "react";
import styles from "@/styles/Patient.module.css";
import Image from "next/image";
import challangeImg from "@/images/doctors-cuate.svg";
// import CustomBlockText from "@/component/customBlockText";
import { urlFor } from "@/app/lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { Heading } from "@radix-ui/themes";
const ChallangeFaced = ({ data }) => {
  return (
    <>
      {/* {data && ( */}
      <div className={`container ${styles.benefitGrp}`}>
        <div className="flex justify-center flex-col items-center">
          {/* <CustomBlockText blocks={data?.title} /> */}
          <Heading
            as="h2"
            className={styles.Heading}
            style={{ paddingBottom: "0px" }}
          >
            <span>Challenges Faced By</span>{" "}
            <span className={styles.GradHead}>Healthcare Professionals</span>
          </Heading>
          <p className={styles.Para}>
            When healthcare professionals don&apos;t have access to Patient
            Management Software (PMS), below are some of the challenges they
            face during their work:
          </p>
          <div className={`${styles.challangeContainer}`}>
            {/* {data?.cardImage && ( */}
            <Image
              // src={`${urlFor(data?.cardImage)}`}
              // width={"530"}
              // height={"505"}
              // alt={data?.cardImage?.alt}
              src={challangeImg}
              alt="patient-management-software"
            />
            {/* )} */}
            <div className={styles.challangeRight}>
              {/* <BlockContent
                  blocks={data?.CardImageandList}
                  serializers={{
                    listItem: (props) => {
                      return (
                        <li>
                          <div className={styles.circle} />
                          <span className="flex-1">{props?.children}</span>
                        </li>
                      );
                    },
                  }}
                /> */}
              <ul>
                <li>
                  <div className={styles.circle} />
                  <span className="flex-1">
                    Inconsistent appointments can sometimes go over their
                    capacity. 
                  </span>
                </li>
                <li>
                  <div className={styles.circle} />
                  <span className="flex-1">
                    Inefficient workload burdening them along with increasing
                    the costs. 
                  </span>
                </li>
                <li>
                  <div className={styles.circle} />
                  <span className="flex-1">
                    Payment processes without proper patient scheduling software
                    will be long-winded and long 
                  </span>
                </li>
                <li>
                  <div className={styles.circle} />
                  <span className="flex-1">
                    Without having a proper patient record management system,
                    there will be a lack of reliable patient history records
                  </span>
                </li>
                <li>
                  <div className={styles.circle} />
                  <span className="flex-1">
                    A robust clinic patient management system makes it smoother
                    to share information across various departments and even
                    different medical settings
                  </span>
                </li>
                <li>
                  <div className={styles.circle} />
                  <span className="flex-1">
                    Unstructured patient information which they have to
                    brainstorm right from the start if a patient visits them
                    again to check his medical history. 
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default ChallangeFaced;
