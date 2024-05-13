"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ChartingImage from "@/images/charting.svg";
import IncomeTrackingImage from "@/images/income-tracking.png";
import AppointmentStatusImage from "@/images/appointment-status.png";
import ReturningPatientImage from "@/images/returning-patient.svg";
import ReportsImage from "@/images/reports-i.svg";
import BillingBreakdown from "@/images/customizable-template.svg";
import BillingReportImage from "@/images/billing-report-i.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";
const Analytics = () => {
  const Analytics = [
    {
      image: IncomeTrackingImage,
      title: "Income tracking",
      icon: "material-symbols-light:share-outline",
      description:
        "Analyzes real-time financial data for insights into revenue trends and peak periods.",
    },
    {
      image: ReturningPatientImage,
      title: "New vs returning patient",
      icon: "tabler:file-import",
      description:
        "Distinguishing between new and returning patients for targeted marketing and improved satisfaction.",
    },
    {
      image: AppointmentStatusImage,
      title: "Appointment Status Data",
      icon: "fluent:receipt-16-regular",
      description:
        "Manages schedules with detailed analysis of appointment statuses, optimizing slots and reducing no-shows.",
    },
  ];
  const AnalyticsRowTwoData = [
    {
      image: BillingReportImage,
      title: "Billing Breakdown",
      icon: "material-symbols-light:share-outline",
      description:
        "Enhances financial transparency by providing a detailed breakdown of expenses, fees, and charges associated with patient care, facilitating accurate financial management.",
    },
    {
      image: ReportsImage,
      title: "Reports",
      icon: "tabler:file-import",
      description:
        "A robust repository of customizable reports covering patient demographics, service utilization empowering stakeholders with actionable insights for informed decision-making.",
    },
  ];
  return (
    <div className="patient-management analytics border-b-gray">
      <div className="container">
        <Box className="text-center">
          {" "}
          <Heading as="h2">Analytics</Heading>
          <Text as="p" className="desc-managememnt ">
            The Analytics section is a critical component of our system that
            provides insightful data and performance metrics to enhance
            decision-making and operational efficiency. It offers a
            comprehensive overview of various aspects related to the functioning
            of the healthcare facility.
          </Text>
        </Box>
        <Box className="grid-3">
          {Analytics.map((item, index) => (
            <Box key={index} className="management-card">
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
        <Box className="grid-2">
          {AnalyticsRowTwoData.map((item, index) => (
            <Box key={index} className="management-card analytics-card">
              <Image src={item.image} alt={item.image} />
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

export default Analytics;
