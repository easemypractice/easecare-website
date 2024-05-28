import Image from "next/image";
import React from "react";
import checkedIcon from "@/images/checkedIcon.svg";
import { Icon } from "@iconify/react";
const ChooseClearity = () => {
  return (
    <div className="Choose_clearity cloudBased">
      <h1>Why Choose EaseCare Clarity?</h1>
      <p>
        The Best Cloud-Based Practice Management Software for Doctors & Clinics.
        Here&apos;s why you
        <br /> should choose us as one of the best healthcare software
        outsourcing companies in India:
      </p>
      <div className="Clearity_Features">
        <ul>
          <li>
            <Image src={checkedIcon} />
            <span>Easy Onboarding</span>
          </li>
          <li className="active">
            <Image src={checkedIcon} />
            <span>Get Started Rapidly</span>
          </li>
          <li>
            <Image src={checkedIcon} />
            <span>Nominal Operational Costs</span>
          </li>
          <li>
            <Image src={checkedIcon} />
            <span>Increased ROI</span>
          </li>
          <li>
            <Image src={checkedIcon} />
            <span>Hassle-Free Communication</span>
          </li>
          <li>
            <Image src={checkedIcon} />
            <span>IP Protection and Security</span>
          </li>
          <li>
            <Image src={checkedIcon} />
            <span>Software Download not Required</span>
          </li>
          <li>
            <Image src={checkedIcon} />
            <span>24*7 Customer Support</span>
          </li>
        </ul>
        <div className="right">
          <div className="iconContainer">
            <Icon
              icon="heroicons:rocket-launch"
              width="48"
              height="48"
              color="white"
            ></Icon>
          </div>
          <p>
            As soon as your requirements are received, we <br />
            are dedicated to offering you the desired results
            <br /> as soon as possible.
          </p>
          <button>Know more</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseClearity;
