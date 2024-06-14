"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EaseCareLogo from "@/images/logo.svg";
import ClarityLogo from "@/images/clarity-logo.svg";
import { Icon } from "@iconify/react";
import callIcon from "@/images/call.svg";
import mailIcon from "@/images/mail.svg";
import locationIcon from "@/images/location.svg";
const Footer = () => {
  return (
    <Box className="footer" id="footer-easecare">
      <Box className="container footer-inner">
        {/* <Box>
          <Box className="flex-align footer-top">
            <Text as="p" className="contact">
              Contact us
            </Text>
            <Box className="footer-contact">
              <Link href="tel:8006777110">8006777110</Link> or{" "}
              <Link href="mailto:sales@easecare.com">sales@easecare.com</Link>
            </Box>
          </Box>
        </Box> */}
        <Box className=" justify-between footer-middle">
          <Box className="footer-links">
            <Heading as="h3">Contact Us</Heading>
            <p class="name-s">EASECARE HEALTHTECH LLP</p>
            <ul>
              <li class="footerCon">
                {/* Customer Care:{" "} */}
                <Image src={callIcon} width={17} height={17} alt="" />
                <Link href="tel:+91-8006777110">+91-8006777110</Link>
              </li>
              <li class="footerCon">
                {/* Email address:{" "} */}
                {/* <Image src={mailIcon} width={17} height={17} alt="" /> */}
                <Icon
                  icon="mdi:email-outline"
                  color="black"
                  width={"20"}
                  height={"20"}
                ></Icon>
                <Link href="mailto:hello@easecare.co">hello@easecare.co</Link>
              </li>
              <li class="addre">
                {/* <span>Address:</span> */}
                <Image src={locationIcon} width={20} height={20} alt="" />
                <span>
                  III FLOOR, USHA TOWER, KEDARPURAM, NEW CANAL ROAD, MOTHROWALA,
                  Dehradun- 248001, Uttarakhand, India
                </span>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Company</Heading>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="/clarity">Clarity Method</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog </Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Features</Heading>
            <ul>
              <li>
                <Link href="#">Patient Management System</Link>
              </li>
              <li>
                <Link href="#">Practice Management Software</Link>
              </li>
              <li>
                <Link href="#">Clinic Management Software</Link>
              </li>
              <li>
                <Link href="#">Healthcare Management Software</Link>
              </li>
              <li>
                <Link href="#">Doctor Appointment System</Link>
              </li>
              <li>
                <Link href="#">Medical Billing Software</Link>
              </li>
              <li>
                <Link href="#">Electronic Health Records Software</Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Products</Heading>
            <ul>
              <li>
                <Link href="#">Software For Multiple Clinic Chain</Link>
              </li>
              <li>
                <Link href="#">Cloud Based Software</Link>
              </li>
              <li>
                <Link href="#">ePrescription Software</Link>
              </li>
              <li>
                <Link href="#">Inventory Management Software</Link>
              </li>
              <li>
                <Link href="#">Offline software for doctors & Clinic</Link>
              </li>
              <li>
                <Link href="#">Telemedicine App For Clinics</Link>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Box className="flex-align footer-logo-section  justify-between">
            <Box className="flex-logo-inner ">
              <Link href="/">
                <Image src={ClarityLogo} alt={ClarityLogo} />
              </Link>
              <Text as="p" className="productlogo-text">
                {" "}
                | A Product of
              </Text>
              <Link href="/">
                <Image src={EaseCareLogo} alt={EaseCareLogo} />
              </Link>
            </Box>
            <Box>
              <ul className="social-links">
                <li>
                  <Link
                    target="_blank"
                    style={{ background: "black" }}
                    href={"https://twitter.com/easecare_co"}
                  >
                    <Icon
                      // icon="arcticons:x-twitter"
                      icon="prime:twitter"
                      color="white"
                      height="20"
                      width={"20"}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/company/easecareco/"}
                  >
                    <Icon icon="devicon:linkedin" height="27" width={"27"} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/easecareco"}
                  >
                    <Icon icon="logos:facebook" height="27" width="27" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/easecare_co/"}
                  >
                    <Icon
                      // icon="arcticons:x-twitter"
                      icon="skill-icons:instagram"
                      color="white"
                      height="25"
                      width={"25"}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.youtube.com/@easecare_co"}
                  >
                    <Icon icon="logos:youtube-icon" height="27" width="27" />
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box className="text-center footer-copyright">
          {" "}
          <Text className="purple-color">
            <Link href={"/terms-and-condition"}>Terms & Conditions</Link> |{" "}
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </Text>
          <Text as="p">© 2024 EaseCare Inc. All Rights Reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
