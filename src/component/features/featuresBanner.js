import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import CtaIcon from "@/images/ctaicon.svg";
const FeaturesBanner = () => {
  return (
    <Box className=" feature-banner ">
      <Box className="container  text-center">
        <Image src={CtaIcon} alt={CtaIcon} />
        <Text as="p" className="upcase-small">Features</Text>
        <Heading as="h2">The New Standard for Modern Clinic Management</Heading>
        <Text as="p" className="feature-b-desc">
          With its meticulous design, remarkable efficiency, and structured yet
          adaptable processes, Clarity empowers your healthcare team to unleash
          its full potential. It is the preferred tool for high-performance
          healthcare teams aiming to enhance electronic health record (EHR)
          systems.
        </Text>
      </Box>
    </Box>
  );
};

export default FeaturesBanner;
