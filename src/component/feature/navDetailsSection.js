"use client";
import Image from "next/image";
import React, { useState } from "react";
import checkedIcon from "@/images/checkedIcon.svg";
import { Icon } from "@iconify/react";
import styles from "@/styles/Patient.module.css";
import ReadMore from "../patientManagement/ReadMore";
import CustomBlockText from "../customBlockText";
// import ReadMore from "../ReadMore";

const NavDetailsSection = ({ data }) => {
  const firstPath = data ? data?.NacSec?.map((item) => item.path) : [];
  const [path, setPath] = useState(firstPath[0] || "");
  return (
    <>
      {data && (
        <div style={{ margin: "50px 0px" }}>
          <div className={`Choose_clearity cloudBased ${styles.benefitGrp}`}>
            <CustomBlockText blocks={data?.title} />
            <div className="Clearity_Features">
              <>
                <ul>
                  {data?.NacSec?.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setPath(`${item.path}`);
                      }}
                      className={`${path === item?.path && "active"}`}
                    >
                      <Image src={checkedIcon} />
                      <span>{item?.path}</span>
                    </li>
                  ))}
                </ul>
                {data?.NacSec?.map((item, index) => (
                  <React.Fragment key={index}>
                    {path === item.path && (
                      <div className="right pt-10">
                        <div className="iconContainer">
                          <Icon
                            icon={item.myIcon.name}
                            width={item?.iconSize ? item?.iconSize : "48"}
                            color="white"
                          ></Icon>
                        </div>
                        <ReadMore>{item?.contant}</ReadMore>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavDetailsSection;
