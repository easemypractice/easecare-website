import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import IndustryIcon from "@/images/startups-icon.svg";

const LatestIndustry = () => {
  return (
    <div>
      <Box className="latest-industry">
        <Box className="container">
          <Flex className="head">
            <Image src={IndustryIcon} alt="icon" width={44} height={44} />
            <Text as="span">Latest Industry Data</Text>
          </Flex>
          <Grid columns="3" width="auto" className="grid">
            <Flex direction="column" className="industry-data">
              <Text as="h2">Telemedicine</Text>
              <Text as="p">Ensuring Data Security in EHR Systems</Text>
              <Text as="span">2023</Text>
            </Flex>
            <Flex direction="column" className="industry-data">
              <Text as="h2">Telemedicine</Text>
              <Text as="p">Ensuring Data Security in EHR Systems</Text>
              <Text as="span">2023</Text>
            </Flex>
            <Flex direction="column" className="industry-data">
              <Text as="h2">Telemedicine</Text>
              <Text as="p">Ensuring Data Security in EHR Systems</Text>
              <Text as="span">2023</Text>
            </Flex>
            <Flex direction="column" className="industry-data">
              <Text as="h2">Telemedicine</Text>
              <Text as="p">Ensuring Data Security in EHR Systems</Text>
              <Text as="span">2023</Text>
            </Flex>
            <Flex direction="column" className="industry-data">
              <Text as="h2">Telemedicine</Text>
              <Text as="p">Ensuring Data Security in EHR Systems</Text>
              <Text as="span">2023</Text>
            </Flex>
            <Flex direction="column" className="industry-data">
              <Text as="h2">Telemedicine</Text>
              <Text as="p">Ensuring Data Security in EHR Systems</Text>
              <Text as="span">2023</Text>
            </Flex>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default LatestIndustry;
