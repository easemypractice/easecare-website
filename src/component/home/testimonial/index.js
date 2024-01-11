"use client";
import { Icon } from "@iconify/react";
import {
  Box,
  Heading,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import TestiDemoImage from "@/images/testi-demo.svg";
const Testimonail = () => {
  return (
    <Box className="testimonail">
      <Box className="container">
        <Box className="testimonail-heading">
          <Heading as="h2">Here’s why Doctors</Heading>
          <div className="heart-head">
            <Icon icon="mdi:heart" width={"57"} color="#FF642D" />
            <Heading as="h2">Clarity</Heading>
          </div>
        </Box>
        <Box className="tab-box">
          <Tabs.Root defaultValue="Orthopedics">
            <TabsList>
              <TabsTrigger value="Orthopedics">Orthopedics</TabsTrigger>
              <TabsTrigger value="Physiotheraphy">Physiotheraphy</TabsTrigger>
              <TabsTrigger value="Pediatrician">Pediatrician</TabsTrigger>
            </TabsList>

            <Box px="4" pt="3" pb="2" className="tabbox-content">
              <TabsContent value="Orthopedics" className="testi-list">
                <Text as="p" className="testi-description">
                  We've been using Easemypractice for our clinic's Electronic
                  Health Records, and it has truly streamlined our workflow. The
                  user-friendly interface makes it easy for our doctors to
                  access and update patient records efficiently.
                </Text>
                <Box className="testi-info">
                  <Image src={TestiDemoImage} alt={TestiDemoImage} />

                  <Text as={"p"} className="testi-name">
                    Dr. Abhinav Negi
                  </Text>
                  <Text as={"p"} className="testi-designation">
                    Orthopedics
                  </Text>
                </Box>
              </TabsContent>
              <TabsContent value="Physiotheraphy">
                <Text size="2">Access and update your documents.</Text>
              </TabsContent>
              <TabsContent value="Pediatrician">
                <Text size="2">
                  Edit your profile or update contact information.
                </Text>
              </TabsContent>
            </Box>
          </Tabs.Root>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonail;
