import { Button, Heading, Text } from "@radix-ui/themes";
import React from "react";
import HeroImag from "@/images/heroimag.png";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="banner-content-top">
          <Button className="green-btn home-green-btn">
            An EHR built by Doctors for Doctors
          </Button>
          <Heading size="1" className="home-heading">
            <span className="heading-white"> Clarity is a</span>{" "}
            <span className="heading-gradiant">
              Better way to Manage Practice
            </span>
          </Heading>
          <Text className="banner-description">
            Meet the new standard for modern practice management. Streamline
            patient care, appointments, billing, and engagement
          </Text>
          <Button className="purple-btn">Request for a demo</Button>
          <Text className="banner-text text-white">
            Meet the new standard for modern practice management. Streamline
            patient care, appointments, billing, and engagement
          </Text>
        </div>
        {/* <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            maxWidth: "1200px",
            margin: "auto",
          }}
          width="100%"
          height="759"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FR3rCmYoH6afPQEsnCzRx9V%2FHero-Frame%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D82-5664%26viewport%3D149%252C1311%252C0.12%26t%3DnE2uVAdThriS4CIx-1%26scaling%3Dscale-down%26starting-point-node-id%3D82%253A5664%26mode%3Ddesign%26hide-ui%3D1" 
          allowTransparency
          allowFullScreen
        ></iframe> */}
        <Image src={HeroImag} alt={HeroImag} />
      </div>
    </div>
  );
};

export default HomeBanner;
