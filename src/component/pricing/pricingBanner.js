import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import AboutbannerImage from "@/images/about-b.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
const PricingBanner = () => {
  return (
    <Box className=" feature-banner pricing-baner ">
      <Box className="container  text-center">
        <Heading as="h2">Plans & Pricing</Heading>
        <Text as="p" className="feature-b-desc about-desc-w">
          Use Clarity for free with your whole team. Upgrade to enable unlimited
          usage, enhanced security controls, and additional features.
        </Text>
        <div className="mt-6">
          <Box className="grid-3">
            <Box className="plan-card">
              <Heading as="h3" className="">
                Free Plan
              </Heading>
              <Text as="p" className="avibality-seen">
                <Icon
                  icon="fluent:people-queue-20-regular"
                  width={"24"}
                  color="#A6A6A6"
                />{" "}
                Free for everyone
              </Text>
              <ul className="list-plan plan-list-free ">
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Unlimited Doctors
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Unlimited Staff Members
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Unlimited Patients
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Single Clinic Management
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Basic Analytics
                </li>
              </ul>
              <Box className="req-btn">
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/edit"
                  className="border-gray-btn"
                >
                  Request a callback
                </Link>
                {/* <Button className="border-gray-btn">Request a callback</Button> */}
              </Box>
            </Box>
            <Box className="plan-card plan-card-highlight">
              <Heading as="h3" className="">
                Essential plan
              </Heading>
              <Text as="p" className="avibality-seen">
                <Icon
                  icon="fluent:people-star-16-regular"
                  width={"24"}
                  color="#A6A6A6"
                />{" "}
                Best for MultiClinics
              </Text>
              <Heading as="h4" className="plan-subhead">
                Everything in free plus...
              </Heading>
              <ul className="list-plan">
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Unlimited File Uploads
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Multi Clinic Management
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Unlimited Patients
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Import Functionalities
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Advanced Analytics
                </li>
              </ul>
              <Box className="req-btn">
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/edit"
                  className="purple-btn"
                >
                  Request a callback
                </Link>
                {/* <Button className="purple-btn">Request a callback</Button> */}
              </Box>
            </Box>
            <Box className="plan-card">
              <Heading as="h3" className="">
                Growth
              </Heading>
              <Text as="p" className="avibality-seen">
                <Icon
                  icon="fluent:people-team-add-24-regular"
                  width={"24"}
                  color="#A6A6A6"
                />{" "}
                Best for All Clinics & Hospitals
              </Text>
              <Heading as="h4" className="plan-subhead">
                Everything from Essential Plus
              </Heading>
              <ul className="list-plan">
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Marketing plus Bundle
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Advanced Authentication
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Priority Support
                </li>
                <li>
                  <Icon
                    icon="solar:check-square-bold"
                    width={"24"}
                    className="icon-tick-plan"
                    color="#19BB7D"
                  />{" "}
                  Offline Service
                </li>
              </ul>
              <Box className="req-btn growth-btn">
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/edit"
                  className="border-gray-btn"
                >
                  Request a callback
                </Link>
                {/* <Button className="border-gray-btn">Request a callback</Button> */}
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default PricingBanner;
