"use client";
import Image from "next/image";
import React, { useState } from "react";
import checkedIcon from "@/images/checkedIcon.svg";
import { Icon } from "@iconify/react";
const ChooseClearity = () => {
  const [path, setPath] = useState("onBoarding");
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
          <li
            onClick={() => {
              setPath("onBoarding");
            }}
            className={`${path === "onBoarding" && "active"}`}
          >
            <Image src={checkedIcon} />
            <span>Easy Onboarding</span>
          </li>
          <li
            onClick={() => {
              setPath("get-started");
            }}
            className={`${path === "get-started" && "active"}`}
          >
            <Image src={checkedIcon} />
            <span>Get Started Rapidly</span>
          </li>
          <li
            onClick={() => {
              setPath("nominal-cost");
            }}
            className={`${path === "nominal-cost" && "active"}`}
          >
            <Image src={checkedIcon} />
            <span>Nominal Operational Costs</span>
          </li>
          <li
            className={`${path === "increased-roi" && "active"}`}
            onClick={() => {
              setPath("increased-roi");
            }}
          >
            <Image src={checkedIcon} />
            <span>Increased ROI</span>
          </li>
          <li
            className={`${path === "communication" && "active"}`}
            onClick={() => {
              setPath("communication");
            }}
          >
            <Image src={checkedIcon} />
            <span>Hassle-Free Communication</span>
          </li>
          <li
            className={`${path === "ip-protection" && "active"}`}
            onClick={() => {
              setPath("ip-protection");
            }}
          >
            <Image src={checkedIcon} />
            <span>IP Protection and Security</span>
          </li>
          <li
            className={`${path === "download" && "active"}`}
            onClick={() => {
              setPath("download");
            }}
          >
            <Image src={checkedIcon} />
            <span>Software Download not Required</span>
          </li>
          <li
            className={`${path === "support" && "active"}`}
            onClick={() => {
              setPath("support");
            }}
          >
            <Image src={checkedIcon} />
            <span>24*7 Customer Support</span>
          </li>
        </ul>
        {path === "get-started" && (
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
              As soon as you connect with us, we are here to closely look at
              your requirements and design a software solution that not only
              solves your problem but helps you in collecting more and more
              revenue.
            </p>
          </div>
        )}
        {path === "onBoarding" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="iconamoon:enter-light"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              Connecting with EaseCare is hassle-free. With an easy onboarding
              process, we have a lot of platforms you can use to get in touch
              with us to take your healthcare practice to the next level.
            </p>
          </div>
        )}
        {path === "nominal-cost" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="akar-icons:price-cut"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              Pay only for the work done and nothing else according to our plans
              or the worked hours. At EaseCare, we offer our services at
              competitive prices.
            </p>
          </div>
        )}
        {path === "increased-roi" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="f7:return"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              At EaseCare, our motive is not only to offer you any software. We
              closely get to know your requirements and then put our knowledge
              and expertise into execution with the purpose to increase your
              Return on Investment.
            </p>
          </div>
        )}
        {path === "communication" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="healthicons:communication-outline"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              With the help of our overall solution software, it becomes
              effortless for healthcare professionals, staff members, and
              patients as well to communicate seamlessly.
            </p>
          </div>
        )}
        {path === "ip-protection" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="icon-park-outline:protect"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              In the age of cyber crimes, intellectual property, and other
              security concerns matter a lot to us. We ensure to provide you
              with advanced security solutions.
            </p>
          </div>
        )}
        {path === "download" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="mynaui:download"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              No need to download the software separately as all the data is
              cloud-based.
            </p>
          </div>
        )}
        {path === "support" && (
          <div className="right">
            <div className="iconContainer">
              <Icon
                icon="tabler:hours-24"
                width="48"
                height="48"
                color="white"
              ></Icon>
            </div>
            <p>
              Get the unwavering support from our team anytime. We are available
              on SMS, Mail, and WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseClearity;
