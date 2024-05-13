"use client";
import { Box, Flex, Grid, Heading, Text, Button } from "@radix-ui/themes";
import React from "react";
import ShieldIcon from "@/images/Shield.svg";
import SecurityIcon from "@/images/security.svg";
import DoconLogo from "@/images/docon2.svg";
import SrlLogo from "@/images/srl2.svg";
import PractoLogo from "@/images/practo2.svg";
import KivLogo from "@/images/kiv2.svg";
import MobileDemoImage from "@/images/mob.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
const DataSecuritySection = () => {
  return (
    <div className="data-security bg-teal py-20">
      <div className="container">
        <Grid columns="2" width="auto" className="data-security-inner">
          <Box className=" ">
            <Text as="p" className="headingup-16 mb-4">
              Security
            </Text>
            <Box className="data-security-right ">
              <Box>
                {" "}
                <Image src={SecurityIcon} alt={SecurityIcon} />
              </Box>
              <Box className="dr-security">
                <Heading as="h2" className="integration-heading mb-5">
                  Data Security You Can Trust
                </Heading>
                <Text as="p" className="big-paragraph-green mb-6">
                  Your trust is our top priority.
                </Text>
                <Text as="p" className="big-paragraph mb-6">
                  As a company committed to your well-being, we place utmost
                  importance on safeguarding your information.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="mobile-demo-side ">
            <Box className="ehr-cards integrated-billing mb-5">
              <Box className="flex-align">
                <Box className="box-heading-icon military-card-icon">
                  {/* <Image src={ShieldIcon} alt={ShieldIcon} /> */}
                  <Icon
                    icon="clarity:shield-line"
                    color="#8512E0"
                    width={"24"}
                  />
                </Box>
                <Heading as={"h3"}>Military-Grade Encryption</Heading>
              </Box>
              <Text as="p" className="big-paragraph mt-5">
                Top-tier{" "}
                <span className="purple-text-medium">
                  256-AES bit encryption
                </span>{" "}
                ensures your data is safe from unauthorized access.
              </Text>
            </Box>
            <Box className="ehr-cards integrated-billing mb-5">
              <Box className="flex-align">
                <Box className="box-heading-icon sharing-third-iconbg">
                  {/* <Image src={ShieldIcon} alt={ShieldIcon} /> */}
                  <Icon
                    icon="fluent:people-prohibited-20-regular"
                    color="#3278B1"
                    width={"24"}
                  />
                </Box>
                <Heading as={"h3"}>No Third-Party Sharing</Heading>
              </Box>
              <Text as="p" className="big-paragraph mt-5 ">
                Your sensitive information stays confidential—never shared with
                third parties.
              </Text>
            </Box>
            <Box className="ehr-cards integrated-billing ">
              <Box className="flex-align">
                <Box className="box-heading-icon doc-icon-bg">
                  {/* <Image src={ShieldIcon} alt={ShieldIcon} /> */}
                  <Icon icon="maki:doctor" color="#19BB7D" width={"24"} />
                </Box>
                <Heading as={"h3"}>Patient-Doctor Confidentiality</Heading>
              </Box>
              <Text as="p" className="big-paragraph mt-5">
                Patient records are exclusively linked to you for utmost
                privacy.
              </Text>
            </Box>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default DataSecuritySection;
