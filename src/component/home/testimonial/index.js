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
            <TabsContent value="Orthopedics">
                <Text as="p" className="testi-description">
                  Tops all other appointment scheduling tools. Simple and sleek
                  without any clutter
                </Text>
                <Box className="testi-info">
                  <Image src={TestiDemoImage} alt={TestiDemoImage} />

                  <Text as={"p"} className="testi-name">
                    Dr Sandeep Dathik
                  </Text>
                  <Text as={"p"} className="testi-designation">
                    Orthopedic Surgeon
                  </Text>
                </Box>
              </TabsContent>
              <TabsContent value="Physiotheraphy" className="testi-list">
                <Text as="p" className="testi-description">
                  We&apos;ve been using Easemypractice for our clinic&apos;s
                  Electronic Health Records, and it has truly streamlined our
                  workflow. The user-friendly interface makes it easy for our
                  doctors to access and update patient records efficiently.
                </Text>
                <Box className="testi-info">
                  <Image src={TestiDemoImage} alt={TestiDemoImage} />

                  <Text as={"p"} className="testi-name">
                    Dr. Vipin Mehra
                  </Text>
                  <Text as={"p"} className="testi-designation">
                    M.D. Physician
                  </Text>
                </Box>
              </TabsContent>           
              <TabsContent value="Pediatrician">
                <Text as="p" className="testi-description">
                  Clarity has truly streamlined my clinic management workflow.
                  Its intuitive interface and robust features make it a
                  must-have tool for anyone looking to stay organized and
                  efficient.
                </Text>
                <Box className="testi-info">
                  <Image src={TestiDemoImage} alt={TestiDemoImage} />
                  <Text as={"p"} className="testi-name">
                    Dr. Shantanu Patil
                  </Text>
                  <Text as={"p"} className="testi-designation">
                    Pediatrician
                  </Text>
                </Box>
              </TabsContent>
              {/* <TabsContent value="Pediatrician">
                <Text as="p" className="testi-description">
                  This is the best Electronic Medical Record(EMR) software I
                  have used. It feels like it was built for doctors, by doctors.
                  The user experience is straightforward, and every interaction
                  is so fast. They prioritize common workflows and have removed
                  all the bloat you usually find in EMR software.
                </Text>
                <Box className="testi-info">
                  <Image src={TestiDemoImage} alt={TestiDemoImage} />
                  <Text as={"p"} className="testi-name">
                    Dr. Tejaswini Nayak
                  </Text>
                  <Text as={"p"} className="testi-designation">
                    Pediatrician
                  </Text>
                </Box>
              </TabsContent> */}
            </Box>
          </Tabs.Root>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonail;
