"use client";
import Image from "next/image";
import React, { useState } from "react";
import checkedIcon from "@/images/checkedIcon.svg";
import { Icon } from "@iconify/react";
import styles from "@/styles/Patient.module.css";
import ReadMore from "../ReadMore";
import Link from "next/link";

const SelectRight = ({ data }) => {
  const firstPath = data.RightData.map((item) => item.path);
  const [path, setPath] = useState(firstPath[0]);
  return (
    <div className="Choose_clearity cloudBased">
      {data.Heading ? (
        <h2 className={styles.maxheadingWid}>{data.Heading}</h2>
      ) : (
        <div className={`${styles.Heading} ${data.HeadingClass}`}>
          {data.HeadingFirst}{" "}
          <div className={styles.GradHead}>{data?.HeadingSec}</div>
        </div>
      )}
      {data.Para && (
        <p className={`${styles.Para} ${data?.ParaClass}`}>{data?.Para}</p>
      )}
      <div className="Clearity_Features">
        <>
          <ul>
            {data?.RightData?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setPath(`${item.path}`);
                }}
                className={`${path === item.path && "active"}`}
              >
                <Image src={checkedIcon} />
                <span>{item.listItem}</span>
              </li>
            ))}
          </ul>
          {data?.RightData?.map((item, index) => (
            <React.Fragment key={index}>
              {path === item.path && (
                <>
                  <div className="right pt-10">
                    <div className="iconContainer">
                      <Icon
                        icon={item.Icon}
                        width={item?.IconWidth ? item?.IconWidth : "48"}
                        height={item?.IconHeight ? item?.IconHeight : "48"}
                        color="white"
                      ></Icon>
                    </div>
                    <ReadMore>{item.ListData}</ReadMore>
                    {item?.btnText && (
                      <Link
                        href={item?.btnLink}
                        className="purple-btn max-w-content"
                      >
                        {item?.btnText}
                      </Link>
                    )}
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </>
      </div>
    </div>
  );
};

export default SelectRight;
