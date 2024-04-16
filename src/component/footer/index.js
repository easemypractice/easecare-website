"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EaseCareLogo from "@/images/logo.svg";
import ClarityLogo from "@/images/clarity-logo.svg";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="container footer-inner">
        <Box>
          <Box className="flex-align footer-top">
            <Text as="p" className="contact">
              Contact us
            </Text>
            <Box className="footer-contact">
              {/* <Link href="tel:+1 (855) 747 6767">+1 (855) 747 6767 </Link> or{" "} */}
              <Link href="mailto:hello@easecare.co">hello@easecare.co</Link>
            </Box>
          </Box>
        </Box>
        <Box className=" justify-between footer-middle">
          <Box className="footer-links">
            <Heading as="h3">Contact Us:</Heading>
            <ul>
              <li>
                Customer Care:{" "}
                <Link href="tel:+91-7251027599">+91-7251027599</Link>
              </li>
              <li>
                Email address:{" "}
                <Link href="mailto:hello@easecare.co">hello@easecare.co</Link>
              </li>
              <li class="addre">
                <span>Address:</span>
                <span>
                  III FLOOR, USHA TOWER, KEDARPURAM, NEW CANAL ROAD, MOTHROWALA,
                  Dehradun- 248001, Uttarakhand, India{" "}
                </span>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Products</Heading>
            <ul>
              {/* <li>
                <Link href="/">EaseCare +</Link>
              </li>
              <li>
                <Link href="/">Sites</Link>
              </li> */}
              <li>
                <Link href="/">Clarity</Link>
              </li>
              <li>
                <Link href="/">Clarity Method</Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Company</Heading>
            <ul>
              <li>
                <Link href="/brand">Brand</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/blog">Blog </Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-links">
            <Heading as="h3">Legal</Heading>
            <ul>
              <li>
                <Link href="/terms-and-condition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              {/* <li>
                <Link href="/">Cookies Policy</Link>
              </li> */}
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
                    href={"https://twitter.com/easecare_co"}
                  >
                    <Icon
                      icon="devicon:twitter"
                      color="#000"
                      height="12"
                      width={"12"}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/company/easecareco/"}
                  >
                    <Icon icon="ri:linkedin-fill" height="16" width={"16"} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/easecareco"}
                  >
                    <Icon icon="bxl:facebook" height="16" width={"16"} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.youtube.com/@easecare_co"}
                  >
                    <Icon icon="mdi:youtube" height="16" width={"16"} />
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box className="text-center footer-copyright">
          {" "}
          <Text as="p">© 2024 EaseCare. All Rights Reserved</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
