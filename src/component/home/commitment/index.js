import { Box, Flex, Grid, Heading, Text, Button } from "@radix-ui/themes";
import React from "react";
import HandsackIcon from "@/images/handsack.png";
import SecurityIcon from "@/images/security.svg";
import DoconLogo from "@/images/docon2.svg";
import SrlLogo from "@/images/srl2.svg";
import PractoLogo from "@/images/practo2.svg";
import KivLogo from "@/images/kiv2.svg";
import MobileDemoImage from "@/images/mob.png";
import Image from "next/image";
import Link from "next/link";

const CommitmentSection = () => {
  return (
    <div className="CommitmentSection  py-20">
      <div className="container">
        <Grid columns="2" width="auto" className="data-security-inner">
          <Box className="mobile-demo-side ">
            <Image src={HandsackIcon} alt={HandsackIcon} />
          </Box>
          <Box className=" ">
            <Text as="p" className="headingup-16 mb-4">
            Commitment
            </Text>
            <Box className="data-security-right ">
              <Box className="dr-security">
                <Heading as="h2" className="integration-heading mb-5">
                Our Promise
                </Heading>
                <Text as="p" className="big-paragraph mb-6">
                Try risk-free for the first 7 days. If you're not satisfied, we'll give you a 100% refund—no questions asked. Your success is our priority.
                </Text>
              </Box>
            </Box>
            <Box className="flex-align">
                <Button variant="outline" className="purple-outline">Get a Demo</Button>
                <Button variant="soft" className="purple-without">Explore pricing</Button>
            </Box>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default CommitmentSection;
