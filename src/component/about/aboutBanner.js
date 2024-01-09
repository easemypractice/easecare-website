import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import AboutbannerImage from "@/images/about-b.png";
const AboutBanner = () => {
  return (
    <Box className=" feature-banner brand-banner border-b-gray">
      <Box className="container  text-center">
        <Text as="p" className="upcase-small">
          About us
        </Text>
        <Heading as="h2">Get to know Clarity</Heading>
        <Text as="p" className="feature-b-desc about-desc-w">
          "Empowering healthcare through innovative EHR solutions, we are
          dedicated to enhancing patient care, efficiency, and outcomes."
        </Text>
        <div className="mt-6">
          <Image src={AboutbannerImage} alt={AboutbannerImage} />
        </div>
      </Box>
    </Box>
  );
};

export default AboutBanner;
