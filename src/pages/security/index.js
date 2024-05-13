"use client"
import { Box, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";

const Security = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity - Security at Clarity"}
        // description={
        //   "Easecare Clarity streamline appointments, patients' health records, billing, and care tracking and is built for high-performance modern healthcare teams."
        // }
        // imageUrl={AboutPreviewImage}
      />
      <Box className="heading-box-security">
        <Box className="container-privacy">
          <Heading as="h3">Security at Clarity</Heading>
        </Box>
      </Box>
      <Box className="privacy-content">
        <Box className="container-privacy">
          <Box className="privacy-content-box">
            <Text as="p">
              At Clarity, we prioritize the utmost safety and security of our
              customers&apos; data. We highly appreciate contributions from our
              community to help identify vulnerabilities in our EHR, EMR, and
              Telemedicine solutions.
            </Text>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">How to Report an Issue:</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                By accessing or using Clarity, you agree to be bound by these
                terms and conditions. If you do not agree with any part of these
                terms, you may not use Clarity.
              </Text>
              <Text as="p">
                If you come across an issue that falls outside our predefined
                scope, please reach out by emailing{" "}
                <Link href="mailto:security@easecare.co." className="purple-color">
                  security@easecare.co.
                </Link>
                <br />
                Provide the following details:
              </Text>

              <ul className="list-main">
                <li>A summary of the issue and its potential impact.</li>
                <li>A breakdown of the steps to replicate the issue.</li>
                <li>Details about the environment you are using.</li>
                <li>
                  Any available proof-of-concept code to exploit the
                  vulnerability.
                </li>
              </ul>
              <Text as="p">
                Upon receiving your email, our dedicated team will promptly
                investigate the reported issue. We&apos;ll keep you informed of the
                progress and may request additional details if necessary. Once
                resolved, we will update our valued customers.
              </Text>
              <Text as="p">
                We believe in recognizing your efforts; hence, for any valid
                vulnerabilities with a CVSS score of 4 or higher, we will reach
                out to express our gratitude with a financial reward.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">Focus Areas:</Heading>
            <Box className="privacy-text-list">
              <ul className="list-main">
                <li>x Authentication bypass and privilege escalation.</li>
                <li>xExposure of personally identifiable information (PII).</li>
                <li>xAccess to data outside of the authenticated account.</li>
                <li>xSQL injection and remote command execution.</li>
              </ul>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">In Scope:</Heading>
            <Box className="privacy-text-list">
              <ul className="list-main">
                <li>https://easecare.co</li>
                <li>https://clarity.easecare.co</li>
                <li>https://clarity-api.easecare.co</li>
                <li>
                  Clarity Zendesk, Intercom, Slack, GitHub, and Front apps.
                </li>
                <li>Clarity Desktop (macOS, Windows).</li>
              </ul>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">Out-of-Scope:</Heading>
            <Box className="privacy-text-list">
              <ul className="list-main">
                <li>Automated scanning of any kind.</li>
                <li>
                  Social engineering, particularly involving Clarity employees.
                </li>
                <li>Denial of Service attacks.</li>
                <li>
                  Attacks requiring physical access to the victim&apos;s computer.
                </li>
                <li>Theoretical attacks without proof of exploitability.</li>
                <li>Man-in-the-middle attacks.</li>
                <li> Clickjacking on pages with no sensitive actions.</li>
                <li>
                  High-privilege users using a bug to sabotage/deface their own
                  account.
                </li>
                <li>
                  Logic bugs allowing an attacker to bypass limits on free
                  accounts.
                </li>
              </ul>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">We Kindly Ask You:</Heading>
            <Box className="privacy-text-list">
              <ul className="list-main">
                <li>
                  Only test vulnerabilities on your own account or with explicit
                  permission.
                </li>
                <li>
                  Make a good-faith effort to avoid privacy violations, data
                  copying or destruction, and service interruption.
                </li>
                <li>
                  If you gain remote access to our systems, refrain from
                  expanding or elevating access to other servers.
                </li>
                <li>
                  Do not make the vulnerability public before reporting it to us
                  and provide adequate time for us to address the issue.
                </li>
              </ul>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">Safe Harbor:</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                Conducting activities in accordance with this policy is
                considered authorized. We will not initiate legal action against
                you. If third-party legal action arises, we will affirm that
                your actions align with this policy.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Security;
