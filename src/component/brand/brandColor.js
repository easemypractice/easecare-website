import React from "react";
import { Icon } from "@iconify/react";
import { Box, Heading, Text } from "@radix-ui/themes";
import ClearitygrayIcon from "@/images/gray-icon.svg";
import ClaritypurpleIcon from "@/images/purple-icon.svg";
import LogoIcon from "@/images/logoicon.svg";
import PurpleLogoIcon from "@/images/purple-logoicon.svg";
import Image from "next/image";
const BrandColor = () => {
  return (
    <div className="naming-ussage border-t-gray">
      <div className="container">
        <Box>
          <Heading as="h3">Color</Heading>
          <Text as="p" className="mb-5">
            Comfortable against light and dark backgrounds, Clarity primary
            brand color is a subtle desaturated Purple. The following light and
            dark accents are preferred for monochrome wordmark usage, while the
            brand color is typically reserved for backgrounds.
          </Text>
        </Box>

        <Box className="grid-3">
          <Box className="purple-card-image">
            <Text as="p" className="mag-head color-head">
              Magic Purple
            </Text>
            <Text as="p" className="mag-text color-text">
              HEX #8512E0
            </Text>
            <Text as="p" className="mag-text color-text">
              RGB 133, 18, 224
            </Text>
          </Box>
          <Box className="black-card-image">
            <Text as="p" className="mag-head color-head">
              Shark Gray
            </Text>
            <Text as="p" className="mag-text color-text">
              HEX #1D2026
            </Text>
            <Text as="p" className="mag-text color-text">
              RGB 29, 32, 38
            </Text>
          </Box>
          <Box className="border-card-image">
            <Text as="p" className="pearl-white-head color-head">
              Pearl White
            </Text>
            <Text as="p" className="pearl-white-text color-text">
              HEX #FFFFFF
            </Text>
            <Text as="p" className=" color-text">
              RGB 255, 255, 255
            </Text>
          </Box>
        </Box>
        <Box className="border-box-color">
          <Icon icon={"fluent:color-24-filled"} color="#3278B2" width={"24"} />
          <Text as="p">The Clarity brand is dynamic and ever-evolving. </Text>
        </Box>
      </div>
    </div>
  );
};

export default BrandColor;
