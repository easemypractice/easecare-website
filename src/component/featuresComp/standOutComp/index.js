import React from "react";
import styles from "@/styles/Patient.module.css";
import LaptopImg from "@/images/lapStandOut.png";
import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
const StandOutComp = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => (
          <div className="container" key={index}>
            <div className="flex justify-center flex-col items-center ">
              <Heading
                as="h2"
                className={`${styles.Heading} ${item?.maxWidth} ${item?.HeadingClass}`}
              >
                <span>{item.HeadingFirst}</span>{" "}
                <span className={styles.GradHead}>{item?.HeadingSec}</span>
              </Heading>
              <p className={`${styles.Para} ${item.paraClass}`}>{item?.para}</p>
              <p className={`${styles.Para} ${item.paraClass} mt-5`}>
                {item?.paraTwo}
              </p>
              <div
                className={`${styles.CardGrp} ${item?.cardClass} ${styles.standCard}`}
              >
                <div
                  className="flex items-center mob-gap-30"
                  style={{ margin: "30px 0px 0px" }}
                >
                  <div className={styles.StandOutImgList}>
                    {item?.leftList?.map((item, index) => (
                      <div key={index} className={styles.listGrpStand}>
                        <div className={`${styles.BenefitIcon}`}>
                          <Icon
                            icon={item.listIcon}
                            color={"white"}
                            width={item?.IconWidth || 30}
                            // height={"30"}
                            style={{ strokeWidth: item.strockWidth || "1" }}
                          />
                        </div>
                        <Text>
                          {item?.listname}
                          <div
                            className={`flex items-center tab-none mob-none`}
                          >
                            <Text>{item?.dash}</Text>
                            <div className={styles.point} />
                          </div>
                        </Text>
                      </div>
                    ))}
                  </div>
                  <Image
                    src={LaptopImg}
                    className={`mob-none ${styles.StandImage}`}
                  />
                  <div className={styles.StandOutImgList}>
                    {item?.rightList?.map((item, index) => (
                      <div key={index} className={styles.listGrpStand}>
                        <div className="flex items-center tab-none mob-none">
                          <div className={styles.point} />
                          <Text>-------------</Text>
                        </div>
                        <div className={`${styles.BenefitIcon}`}>
                          <Icon
                            icon={item.listIcon}
                            color={"white"}
                            width={item?.IconWidth || 30}
                            // height={"30"}
                            style={{ strokeWidth: item.strockWidth || "1" }}
                          />
                        </div>
                        <Text>{item?.listname}</Text>
                      </div>
                    ))}
                  </div>
                </div>
                <Image src={LaptopImg} className="desktop-hidden mob-visible" />

                <Link href={"/book-a-demo"}>
                  <button
                    className={`purple-btn w-full desktop-hidden mob-visible`}
                  >
                    Book Free Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default StandOutComp;
