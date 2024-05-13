import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import AboutbannerImage from "@/images/about-b.png";
const AboutBanner = () => {
  return (
    <Box className=" feature-banner brand-banner border-b-gray">
      <Box className="container  text-center">
        <Text as="p" className="upcase-small">
          GET TO KNOW CLARITY
        </Text>
        <Heading as="h2">Clarity is bringing magic back to software.</Heading>
        <Text as="p" className="feature-b-desc about-desc-w">
          We&apos;re crafting the innovative EHR tool for teams that care about
          quality. And dedicated to enhancing patient care, efficiency, and
          outcomes.
        </Text>
        <div className="mt-6 bannerimg">
          <Image src={AboutbannerImage} alt={AboutbannerImage} />
        </div>
      </Box>
    </Box>
  );
};

export default AboutBanner;
