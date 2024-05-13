"use client";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import AppointmentReminderImage from "@/images/reminder.png";
import CalendarImage from "@/images/Calendar.svg";
import CellularDataImage from "@/images/CellularData.svg";
import DoctorImage from "@/images/Doctor.svg";
import ReceiptImage from "@/images/Receipt.svg";
import VideoImage from "@/images/Video.svg";
import VideoCallImage from "@/images/doc-lady.png";
import NewPatientImage from "@/images/newpatient.png";
import MobileAppImage from "@/images/mobile-app2.png";
import DevicePhoneMobileImage from "@/images/device-phone-mobile.svg";
import ReceiptBillImage from "@/images/receipt-bill.png";
import CardiologistImage from "@/images/cardiologist.svg";
import PulmonologistImage from "@/images/Pulmonologist.svg";
import PhysiotherapyImage from "@/images/Physiotherapy.svg";
import GastroenterologistImage from "@/images/Gastroenterologist.svg";

import Image from "next/image";
import Link from "next/link";

const EhrPlatformSection = () => {
  return (
    <div className="ehr-section">
      <div className="container">
        <Heading className="sub-heading ehr-heading">
          EHR platform you’ll enjoy using
        </Heading>
        <Text as="p" className="sub-heading-description">
          Create Rx in seconds, improve patient retention, and breeze through
          your work in views tailored to you and your team.
        </Text>

        <Grid columns={"2"} className="ehr-cards-outer">
          <Box className="ehr-cards ehr-cards-bottom">
            <Box className="flex-align">
              <Box className="box-heading-icon ">
                <Image src={CalendarImage} alt={CalendarImage} />
              </Box>
              <Heading as={"h3"}>Appointments & Reminders</Heading>
            </Box>
            <Text as="p" className="text-24bold mt-2 ">
              Tailored Solutions for Streamlined Practice 
            </Text>
            <Text as="p">
              Enhance efficiency with specialty-specific modules tailored to
              diverse medical specialties for a streamlined workflow
            </Text>
            <Box className="box-img">
              <Image
                src={AppointmentReminderImage}
                alt={AppointmentReminderImage}
                className="w-full appointment-img"
              />
            </Box>
          </Box>
          <Box className="ehr-cards online-consultation">
            <Box className="flex-align">
              <Box className="box-heading-icon video-ico-bg">
                <Image src={VideoImage} alt={VideoImage} />
              </Box>
              <Heading as={"h3"}>Online Consultation</Heading>
            </Box>
            <Text as="p" className="text-24bold mt-2">
              Seamless Virtual Consultations Crafted for Healthcare
              Professionals
            </Text>
            <Text as="p">
              Elevate telehealth with EaseMyPractice&apos;s Online Consultation
              Module for seamless virtual care.
            </Text>
            <Box className="box-img">
              <Image
                src={VideoCallImage}
                alt={VideoCallImage}
                className="w-full appointment-img"
              />
            </Box>
          </Box>
          <Box className="ehr-cards specialty-specific">
            <Box className="flex-align">
              <Box className="box-heading-icon plus-icon-bg">
                <Image src={DoctorImage} alt={DoctorImage} />
              </Box>
              <Heading as={"h3"}>Specialty-specific EMR</Heading>
            </Box>
            <Text as="p" className="text-24bold mt-2">
              Tailored Solutions for Streamlined Practice 
            </Text>
            <Text as="p" className="mb-4">
              Enhance efficiency with specialty-specific modules tailored to
              diverse medical specialties for a streamlined workflow
            </Text>
            <Text as="p" className="mb-4">
              Optimize operational effectiveness by implementing
              specialty-specific modules meticulously tailored to a wide array
              of medical specialties, fostering a seamless workflow and
              enhancing overall efficiency.
            </Text>
            <Box className="box-img">
              <Box className="flex-align justify-center mb-6">
                <Box className="chip-emr-specific emr-cardio">
                  <Text as="p">Cardiologist</Text>
                  <Image src={CardiologistImage} alt={CardiologistImage} />
                </Box>
                <Box className="chip-emr-specific emr-plmono">
                  <Text as="p">Pulmonologist</Text>{" "}
                  <Image src={PulmonologistImage} alt={PulmonologistImage} />
                </Box>
              </Box>
              <Box className="flex-align justify-center">
                <Box className="chip-emr-specific emr-Physio">
                  <Text as="p">Physiotherapy</Text>{" "}
                  <Image src={PhysiotherapyImage} alt={PhysiotherapyImage} />
                </Box>
                <Box className="chip-emr-specific emr-gastro">
                  <Text as="p">Gastroenterologist</Text>{" "}
                  <Image
                    src={GastroenterologistImage}
                    alt={GastroenterologistImage}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="ehr-cards ehr-cards-bottom in-depth-insights">
            <Box className="flex-align">
              <Box className="box-heading-icon cellular-icon-bg">
                <Image src={CellularDataImage} alt={CellularDataImage} />
              </Box>
              <Heading as={"h3"}>In-Depth Insights</Heading>
            </Box>
            <Text as="p" className="text-24bold mt-2">
              Unlock the power of data with EaseMyPractice&apos;s Analytics.
            </Text>
            <Text as="p">
              Gain insights into practice performance and patient trends through
              our comprehensive analytics tools.
            </Text>
            <Box className="box-img">
              <Image
                src={NewPatientImage}
                alt={NewPatientImage}
                className="w-full appointment-img depth-insight-img"
              />
            </Box>
          </Box>
          <Box className="ehr-cards integrated-billing ">
            <Box className="flex-align">
              <Box className="box-heading-icon receipt-icon-bg">
                <Image src={ReceiptImage} alt={ReceiptImage} />
              </Box>
              <Heading as={"h3"}>Integrated Billing Module</Heading>
            </Box>
            <Text as="p" className="text-24bold mt-2">
              Effortless Billing Solutions for Seamless Practice Management
            </Text>
            <Text as="p">
              Manage finances effortlessly, focusing more on patient care with
              integrated billing solutions.
            </Text>
            <Box className="box-img ">
              <Image
                src={ReceiptBillImage}
                alt={ReceiptBillImage}
                className="w-full appointment-img"
              />
            </Box>
          </Box>
          <Box className="ehr-cards online-consultation ehr-cards-bottom">
            <Box className="flex-align">
              <Box className="box-heading-icon phon-icon-bg">
                <Image
                  src={DevicePhoneMobileImage}
                  alt={DevicePhoneMobileImage}
                />
              </Box>
              <Heading as={"h3"}>Mobile Apps (Android & iPhone)</Heading>
            </Box>
            <Text as="p" className="text-24bold mt-2">
              On-the-Go Access to Your Healthcare Universe.
            </Text>
            <Text as="p">
              Experience freedom with EaseMyPractice&apos;s Mobile Apps,
              managing your practice anytime, anywhere.
            </Text>
            <Box className="box-img">
              <Image
                src={MobileAppImage}
                alt={MobileAppImage}
                className="w-full appointment-img"
              />
            </Box>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default EhrPlatformSection;
