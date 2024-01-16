"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ChartingImage from "@/images/charting-i.svg";
import TemplatesCustumImage from "@/images/templates-i.svg";
import BillingImage from "@/images/billing-i.svg";
import RecurningAppointmentImage from "@/images/RecurningAppointment.svg";
import AppointmentScheduleImage from "@/images/appointment-schedule.svg";
import TelecallingImage from "@/images/telecalling.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
const PatientManagement = () => {
  const ManagementCardData = [
    {
      image: ChartingImage,
      title: "Charting",
      icon: "material-symbols-light:share-outline",
      description:
        " Enhance efficiency with specialty-specific modules tailored to diverse medical specialties for a streamlined workflow",
    },
    {
      image: TemplatesCustumImage,
      title: "Customizable Templates",
      icon: "tabler:file-import",
      description:
        " Tailorable pre-designed formats or layouts that can be adapted to specific needs or preferences.",
    },
    {
      image: BillingImage,
      title: "Billing",
      icon: "fluent:receipt-16-regular",
      description:
        " Process of generating and managing invoices for goods or services rendered, facilitating financial transactions.",
    },
    {
      image: AppointmentScheduleImage,
      title: "Appointment Scheduling",
      icon: "fluent:calendar-48-regular",
      description:
        "Organizing and managing appointments or meetings efficiently using a calendar or scheduling system.",
    },
    {
      image: RecurningAppointmentImage,
      title: "Recurring Appointments",
      icon: "wpf:recurring-appointment",
      description:
        "Regularly scheduled meetings that repeat at specified intervals, simplifying ongoing commitments and planning.",
    },
    {
      image: TelecallingImage,
      title: "Telecalling",
      icon: "basil:video-outline",
      description:
        "Conducting phone-based communication to engage with Patients or for various purposes, such as sales or support.",
    },
  ];
  return (
    <div className="patient-management border-b-gray">
      <div className="container">
        <Box className="text-center">
          {" "}
          <Heading as="h2">Patient management</Heading>
          <Text as="p" className="desc-managememnt ">
            EaseCare is a tool to remove barriers. Powerful yet simple to use,
            it helps you to plan ahead, make better decisions and execute
            faster. You don’t have to come up with best practices for how to use
            EaseCare — we already built them directly into the product.
          </Text>
        </Box>
        <Box className="grid-3">
          {ManagementCardData.map((item, index) => (
            <Box key={index} className="management-card patient-manage">
              <Image src={item.image} alt={item.title} />
              <Box className="ehr-cards ehr-cards-bottom">
                <Box className="flex-align">
                  <Icon
                    icon={item.icon}
                    width={24}
                    // style={{ transform: "rotate(-30deg)" }}
                  />
                  <Heading as="h3">{item.title}</Heading>
                </Box>
                <Text as="p" className="management-card-desc">
                  {item.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default PatientManagement;
