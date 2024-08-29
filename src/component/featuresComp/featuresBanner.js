import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

import { urlFor } from "@/app/lib/sanity";
import CustomBlockText from "../customBlockText";
const FeaturesBanner = ({ data }) => {
  return (
    <>
      <Box className=" feature-banner border-b-gray">
        <Box className="container  text-center">
          <Image
            // src={`${urlFor(data?.image)}`}
            src={data.bannerImg}
            alt={"features"}
            width={80}
            height={80}
          />
          <Text as="p" className="upcase-small">
            {data?.subTitle}
          </Text>
          <Heading className=" maxWidth-55r" as="h1">
            <span>{data?.title1}</span> <span>{data?.title2}</span>
          </Heading>
          <Text as="p" className="feature-b-desc">
            {data?.description}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesBanner;
