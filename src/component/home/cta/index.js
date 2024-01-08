import { Box, Button, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import CtaIcon from "@/images/ctaicon.svg";
const CtaSection = () => {
  return (
    <Box className=" cta-section bg-teal-dark">
      <Box className="container  text-center">
        <Image src={CtaIcon} alt={CtaIcon} />
        <Heading as="h2">Built for the <span className="future-text">Future.</span> <span className="available-text">Available today.</span></Heading>
        <Button className="purple-btn">Get a demo</Button>
      </Box>
    </Box>
  );
};

export default CtaSection;
