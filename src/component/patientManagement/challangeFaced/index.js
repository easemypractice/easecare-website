import React from "react";
import styles from "@/styles/Patient.module.css";
import Image from "next/image";
import challangeImg from "@/images/doctors-cuate.svg";
import PortableTextBlock from "@/component/potableTextBlock";
import CustomBlockText from "@/component/customBlockText";
import { urlFor } from "@/app/lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
const ChallangeFaced = ({ data }) => {
  return (
    <>
      {data && (
        <div className={`container ${styles.benefitGrp}`}>
          <div className="flex justify-center flex-col items-center">
            <CustomBlockText blocks={data?.title} />
            <div className={`${styles.challangeContainer}`}>
              {data?.cardImage && (
                <Image
                  src={`${urlFor(data?.cardImage)}`}
                  width={"530"}
                  height={"505"}
                  alt={data?.cardImage?.alt}
                />
              )}
              <div className={styles.challangeRight}>
                <BlockContent
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
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChallangeFaced;
