import React from "react";
import { Icon } from "@iconify/react";
import { Box, Heading, Text } from "@radix-ui/themes";
import ClearitygrayIcon from "@/images/gray-icon.svg";
import ClaritypurpleIcon from "@/images/purple-icon.svg";
import LogoIcon from "@/images/logoicon.svg";
import PurpleLogoIcon from "@/images/purple-logoicon.svg";
import Image from "next/image";
const ClarityIcon = () => {
  return (
    <div className="naming-ussage border-t-gray">
      <div className="container">
        <Box>
          <Heading as="h3">Clarity Icon</Heading>
          <Text as="p" className="mb-5">
            When referring to Clarity as a company, such as on social media, or
            where a “chip” design is required, it is acceptable to use this
            stylized icon with an appropriate corner radius.
          </Text>
        </Box>
        <Box className="clarity-box-icon">
          <Image src={ClearitygrayIcon} alt={ClearitygrayIcon} />

          <Image src={ClaritypurpleIcon} alt={ClaritypurpleIcon} />
        </Box>
      </div>
    </div>
  );
};

export default ClarityIcon;
