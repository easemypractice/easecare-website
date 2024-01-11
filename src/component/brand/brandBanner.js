import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import CtaIcon from "@/images/ctaicon.svg";
const BrandBanner = () => {
  return (
    <Box className=" feature-banner brand-banner ">
      <Box className="container  text-center">
        <Text as="p" className="upcase-small">
          Brand
        </Text>
        <Heading as="h2">Clarity Brand Guidelines</Heading>
        <Text as="p" className="feature-b-desc">
          Resources for presenting the EaseCare Clarity brand consistently and
          professionally.
        </Text>
        <Button className="purple-btn">Download Brand Assets</Button>
      </Box>
    </Box>
  );
};

export default BrandBanner;
