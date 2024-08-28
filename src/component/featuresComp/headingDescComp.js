import React from "react";
import styles from "@/styles/Patient.module.css";
import { Heading } from "@radix-ui/themes";
import Link from "next/link";
const HeadingDescComp = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => (
          <div
            className={`container py-10 rounded-14`}
            style={{ backgroundColor: item?.backgroundColor }}
            key={index}
          >
            <div className="flex justify-center flex-col items-center ">
              <Heading
                as="h2"
                className={`${styles.Heading} ${styles.HeadingComp} ${item?.maxWidth} ${item?.HeadingClass}`}
              >
                <span>{item.HeadingFirst}</span>{" "}
                <span className={styles.GradHead}>{item?.HeadingSec}</span>
              </Heading>
              <p
                className={`${styles.Para} ${styles.ParaComp} ${item.paraClass}`}
              >
                {item?.para}
                {item?.wantAppInMobilePhone && (
                  <Link
                    className={`${styles.Para} ${styles.ParaComp} ${item.paraClass}`}
                    href="https://play.google.com/store/apps/details?id=com.easemypractice.atlas"
                  >
                    Play Store
                  </Link>
                )}
                {item?.wantAppInMobilePhone && " & "}
                {item?.wantAppInMobilePhone && (
                  <Link
                    className={`${styles.Para} ${styles.ParaComp} ${item.paraClass}`}
                    href="https://apps.apple.com/in/app/easecare-clarity/id6468764592"
                  >
                    App Store.
                  </Link>
                )}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default HeadingDescComp;
