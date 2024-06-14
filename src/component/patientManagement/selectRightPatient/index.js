"use client";
import Image from "next/image";
import React, { useState } from "react";
import checkedIcon from "@/images/checkedIcon.svg";
import { Icon } from "@iconify/react";
import styles from "@/styles/Patient.module.css";
const SelectRight = () => {
  const [path, setPath] = useState("access-requirement");
  return (
    <div className="Choose_clearity cloudBased">
      <h1 className={styles.maxheadingWid}>
        How to Select the Right Patient Management Software?
      </h1>
      {/* <p>
        The Best Cloud-Based Practice Management Software for Doctors & Clinics.
        Here&apos;s why you
        <br /> should choose us as one of the best healthcare software
        outsourcing companies in India:
      </p> */}
      <div className="Clearity_Features">
        <ul>
          <li
            onClick={() => {
              setPath("access-requirement");
            }}
            className={`${path === "access-requirement" && "active"}`}
          >
            <Image src={checkedIcon} />
            <span>Assessing Your Requirements</span>
          </li>
          <li
            onClick={() => {
              setPath("budget");
            }}
            className={`${path === "budget" && "active"}`}
          >
            <Image src={checkedIcon} />
            <span>Budget</span>
          </li>
          <li
            onClick={() => {
              setPath("software-feature");
            }}
            className={`${path === "software-feature" && "active"}`}
          >
            <Image src={checkedIcon} />
            <span>Examine the Software Features</span>
          </li>
          <li
            className={`${path === "friendliness" && "active"}`}
            onClick={() => {
              setPath("friendliness");
            }}
          >
            <Image src={checkedIcon} />
            <span>User-Friendliness</span>
          </li>
          <li
            className={`${path === "cloud-based" && "active"}`}
            onClick={() => {
              setPath("cloud-based");
            }}
          >
            <Image src={checkedIcon} />
            <span>Cloud-Based Solutions</span>
          </li>
        </ul>
        {path === "access-requirement" && (
          <div className="right pt-10">
            <div className="iconContainer">
              <Icon
                icon="carbon:document-requirements"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              The first thing to look for when you are looking for good patient
              management software is to analyze the requirements of your clinic.
            </p>
          </div>
        )}
        {path === "budget" && (
          <div className="right pt-10">
            <div className="iconContainer">
              <Icon icon="ep:money" width="48" height="48" color="white"></Icon>
            </div>
            <p>
              Managing a good budget is another thing that should be taken into
              consideration while looking for software to enhance your medical
              environment.
            </p>
          </div>
        )}
        {path === "software-feature" && (
          <div className="right pt-10">
            <div className="iconContainer">
              <Icon
                icon="mdi:feature-search-outline"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              Getting to know the features of the software in detail is a must
              before you decide to take it. To examine which software is best
              for you, take a look at your requirements.
            </p>
          </div>
        )}
        {path === "friendliness" && (
          <div className="right pt-10">
            <div className="iconContainer">
              <Icon
                icon="hugeicons:touch-interaction-04"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              It is better to look for a tool that is user-friendly so that you
              don’t have to invest your time and money in small things again and
              again.
            </p>
          </div>
        )}
        {path === "cloud-based" && (
          <div className="right pt-10">
            <div className="iconContainer">
              <Icon
                icon="ic:baseline-cloud-queue"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              As safety and security are non-negotiable, look for tools that are
              cloud-based for better accessibility, security, and
              cost-effectiveness.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectRight;