import React from "react";
import { Icon } from "@iconify/react";
import { Box, Heading, Text } from "@radix-ui/themes";
import ClearityWhitelogo from "@/images/clarity-white.svg";
import ClarityLogoDouble from "@/images/double-clarity.svg";
import Image from "next/image";
const ClarityWordmark = () => {
  return (
    <div className="naming-ussage border-t-gray">
      <div className="container">
        <Box>
          <Heading as="h3">Clarity wordmark</Heading>
          <Text as="p" className="mb-5">
            The Clarity wordmark should be used in all references to Clarity as
            space allows. Monochrome usage is preferred with the brand colors
            below.
          </Text>
        </Box>
        <Box className="grid-3">
          <Box className="purple-card-image">
            <Image src={ClearityWhitelogo} alt={ClearityWhitelogo} />
          </Box>
          <Box className="black-card-image">
            <Image src={ClearityWhitelogo} alt={ClearityWhitelogo} />
          </Box>
          <Box className="border-card-image">
            <Image src={ClarityLogoDouble} alt={ClarityLogoDouble} />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ClarityWordmark;
