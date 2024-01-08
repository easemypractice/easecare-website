import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import GooglePlayImage from "@/images/googleplay.svg";
import AppStoreImage from "@/images/appstore.svg";
import MobileDemoImage from "@/images/mob.png";
import Image from "next/image";
import Link from "next/link";
import ImageAni from "@/images/ico-ani.svg";
import CommandLine from "./commandline";
import TabComponent from "./tab-keyshortcut";
import KeyOne from "@/images/keyone.png";
const HighlightLayout = () => {
  const tabs = [
    {
      title: "I Assign issue to me",
      content: "I Assign issue to me",
      KeyboardImage: KeyOne,
    },
    {
      title: "⌃K Opens command line",
      content: "⌃K Opens command line",
      KeyboardImage: KeyOne,
    },
    {
      title: "I Assign issue to me",
      content: "I Assign issue to me",
      KeyboardImage: KeyOne,
    },
    // Add more tabs as needed
  ];
  return (
    <div className="heighlight">
      <div className="container">
        <Heading className="sub-heading">
          Unlike any tool  you’ve used before
        </Heading>
        <Text as="p" className="sub-heading-description">
          Designed to the last pixel and engineered with unforgiving precision,
          Clarity combines UI elegance with world-class performance.
        </Text>
        <Grid columns="2" width="auto" className="gap-20 meet-command">
          <Box className="mobile-demo-side w-60">
            <Box className="keyboard-shortcut">
              <Heading as="h3">Built for your keyboard</Heading>
              <Text as="p">
                Fly through your tasks with rapid-fire keyboard shortcuts for
                everything. Literally everything.
              </Text>
              <TabComponent tabs={tabs} />
            </Box>
          </Box>
          <Box className="w-40 built-keyboard">
            <Box className="breathtaking">
              <Image src={ImageAni} alt={ImageAni} />

              <Heading as="h3" className="pb-3">
                Breathtakingly fast
              </Heading>
              <Text as="p">
                Built for speed with 50ms interactions and real-time sync.
              </Text>
            </Box>
          </Box>
        </Grid>
        <Grid columns="2" width="auto" className="healthcare-access">
          <Box className="mobile-demo-side w-40">
            <Image src={MobileDemoImage} alt={MobileDemoImage} />
          </Box>
          <Box className="w-60 built-keyboard">
            <Heading as="h2">Built for your keyboard</Heading>
            <Text as="p" className="big-paragraph">
              Clarity Mobile App Seamlessly access patient records, schedule
              appointments, and stay connected with your practice on your mobile
              device.
            </Text>
            <Flex className="download-btns">
              <Link href={"/"}>
                <Image src={GooglePlayImage} alt={GooglePlayImage} />
              </Link>

              <Link href={"/"}>
                <Image src={AppStoreImage} alt={AppStoreImage} />
              </Link>
            </Flex>
          </Box>
        </Grid>
        <Grid columns={"2"} width="auto" className="gap-20 meet-command">
          <Box className="healthcare-teams relative w-40">
            <Heading as="h2" className="heading-24">
              Designed for modern healthcare teams
            </Heading>
            <Text className="text-24">
              Comes with built-in workflows that create focus and routine.
            </Text>
          </Box>
          <Grid className={"w-70"}>
            <Box className="command-line">
              <Heading as="h2" className="heading-24">
                Meet your command line
              </Heading>
              <Text as="p" className="text-24 mb-30">
                Complete any action in seconds with the global command menu.
              </Text>
              <CommandLine />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HighlightLayout;
