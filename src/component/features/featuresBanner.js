import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import CtaIcon from "@/images/ctaicon.svg";
import { urlFor } from "@/app/lib/sanity";
import CustomBlockText from "../customBlockText";
const FeaturesBanner = ({ data }) => {
  return (
    <>
      <Box className=" feature-banner border-b-gray">
        <Box className="container  text-center">
          <Image
            src={`${urlFor(data?.image)}`}
            alt={CtaIcon}
            width={80}
            height={80}
          />
          <Text as="p" className="upcase-small">
            {data?.subTitle}
          </Text>
          <CustomBlockText blocks={data.title} />
          <Text as="p" className="feature-b-desc">
            {data?.description}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesBanner;
