import { Icon } from "@iconify/react";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";

const AboutInfo = () => {
  return (
    <div className="about-info bg-light-gray">
      <Box className="container">
        <Box className="about-info-row box-info-space">
          <Box className="box-info w-60">
            <Text as="p" className="box-info-small purple-color">
              Mission Statement
            </Text>
            <Heading as="h4" className="box-info-head">
              At EaseCare, our mission is to revolutionize healthcare with
              Clarity, a modern EHR solution that transcends traditional
              boundaries. We are committed to fostering a new era of seamless,
              patient-centric care through cutting-edge technology and
              innovation.
            </Heading>
            <Text as="p" className="box-info-text">
              We strive to empower healthcare providers by delivering an EHR
              solution that not only streamlines workflows but also enhances
              collaboration, ultimately leading to improved patient outcomes.
            </Text>
          </Box>
          <Box className="box-info w-40">
            <Text as="p" className="box-info-small orange-color">
              Vision for Transformation
            </Text>
            <Heading as="h4" className="box-info-head">
              Our vision is to lead the transformation of healthcare, making
              delivery more efficient, personalized, and accessible.
            </Heading>
            <Text as="p" className="box-info-text">
              We envision a future where healthcare providers prioritize
              exceptional care with our Clarity EHR solution from EaseCare,
              streamlining data complexities.
            </Text>
          </Box>
        </Box>

        <Box className="about-info-row">
          <Box className="box-info w-40">
            <Text as="p" className="box-info-small astral-blue-color">
              Commitment to Innovation
            </Text>
            <Heading as="h4" className="box-info-head">
              At EaseCare, our core mission is relentless innovation, staying
              ahead by integrating the latest technology to provide Clarity—an
              adaptable EHR solution for evolving healthcare needs.
            </Heading>
            <Text as="p" className="box-info-text">
              Dedicated to innovation, fostering continuous improvement, and
              collaborating with healthcare professionals.
            </Text>
          </Box>
          <Box className="box-info w-60">
            <Text as="p" className="box-info-small green-color">
              Healthcare-Centric Focus
            </Text>
            <Heading as="h4" className="box-info-head">
              Central to the EaseCare ethos is an unwavering focus on patients.
              We understand that every data point within Clarity, our EHR
              system, represents an individual's health journey. Our commitment
              is to provide a secure, intuitive, and patient-centric platform
              that enhances the overall healthcare experience.
            </Heading>
            <Text as="p" className="box-info-text">
              By prioritizing patients in Clarity, our EHR solution, we
              contribute to a healthcare ecosystem where individuals are
              empowered, fostering healthier communities and a resilient future.
            </Text>
          </Box>
        </Box>
        <Box className="border-box-color">
          <Icon
            icon={"fluent:text-quote-16-filled"}
            color="#3278B2"
            width={"24"}
          />
          <Text as="p">
            "Empower doctors with streamlined EHR for enhanced productivity and
            improved patient outcomes."{" "}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default AboutInfo;
