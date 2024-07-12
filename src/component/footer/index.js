"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EaseCareLogo from "@/images/logo-dark.svg";
import ClarityLogo from "@/images/clarity-logo-light.png";
import { Icon } from "@iconify/react";
import appStore from "@/images/appstore.svg";
import playStore from "@/images/googleplay.svg";
const Footer = () => {
  return (
    <Box className="footer" id="footer-easecare">
      <Heading as="h2">
        India&apos;s Trusted Doctor Software - EaseCare Clarity
      </Heading>
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
          <Box className="footer-links" style={{ maxWidth: "275px" }}>
            <Heading as="h3">Contact Us</Heading>
            {/* <p class="name-s">EASECARE HEALTHTECH LLP</p> */}
            <ul>
              <li class="footerCon">
                <Icon
                  icon="mi:call"
                  color="white"
                  width={"20"}
                  height={"20"}
                ></Icon>
                <Link href="tel:+91-8006777110">+91-8006777110</Link>
              </li>
              <li class="footerCon">
                <Icon
                  icon="mdi:email-outline"
                  color="white"
                  width={"20"}
                  height={"20"}
                ></Icon>
                <Link href="mailto:hello@easecare.co">hello@easecare.co</Link>
              </li>
              <li class="addre">
                <Icon
                  icon="ion:location-outline"
                  color="white"
                  width={"35"}
                  height={"35"}
                ></Icon>
                <span>
                  3rd floor, Usha Tower, Kedarpuram, New Canal Road, Mothrowala,
                  Dehradun-248001 (India)
                </span>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Company</Heading>
            <ul>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/book-a-demo">Book a Demo</Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Important Links</Heading>
            <ul>
              <li>
                <Link href="/clarity-method">Clarity Method</Link>
              </li>
              <li>
                <Link href="/terms-and-condition">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/brand">Brand Guidelines</Link>
              </li>
              <li>
                <Link href="https://clarity.easecare.co/login">Log In</Link>
              </li>
            </ul>
          </Box>
          <Box className=" downloadApp">
            <Heading as="h4">Download the EaseCare Clarity App</Heading>
            <div className="flex flex-col gap-3">
              <Link href="https://apps.apple.com/in/app/clarity-ehr/id6468764592">
                <Image src={playStore} width={120} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.easemypractice.atlas">
                <Image src={appStore} width={120} />
              </Link>
            </div>
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
          <Text>
            <Link href={"/terms-and-condition"}>Terms & Conditions</Link> |{" "}
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </Text>
          <Text as="p" style={{ color: "white" }}>
            © 2024 EaseCare Inc. All Rights Reserved
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
