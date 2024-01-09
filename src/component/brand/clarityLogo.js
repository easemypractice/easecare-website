import React from "react";
import { Icon } from "@iconify/react";
import { Box, Heading, Text } from "@radix-ui/themes";
import ClearityWhitelogo from "@/images/clarity-white.svg";
import ClarityLogoDouble from "@/images/double-clarity.svg";
import LogoIcon from "@/images/logoicon.svg";
import PurpleLogoIcon from "@/images/purple-logoicon.svg";
import Image from "next/image";
const ClarityLogo = () => {
  return (
    <div className="naming-ussage border-t-gray">
      <div className="container">
        <Box>
          <Heading as="h3">Clarity logo</Heading>
          <Text as="p" className="mb-5">
            For tight layouts or logo-only grids, the Clarity logomark is a
            concise way to refer to Clarity. Use with good judgment for your
            audience, as the Clarity wordmark has stronger brand recognition.
          </Text>
        </Box>
        <Box className="grid-3">
          <Box className="purple-card-image">
            <Image src={LogoIcon} alt={LogoIcon} />
          </Box>
          <Box className="black-card-image">
            <Image src={LogoIcon} alt={LogoIcon} />
          </Box>
          <Box className="border-card-image">
            <Image src={PurpleLogoIcon} alt={PurpleLogoIcon} />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ClarityLogo;
