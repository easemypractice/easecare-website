"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ChartingImage from "@/images/charting.svg";
import ReportViewImage from "@/images/Report-View.png";
import CalendarViewImage from "@/images/calendar-view.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";
const Calendar = () => {
  const AnalyticsRowTwoData = [
    {
      image: CalendarViewImage,
      title: "Calendar View",
      icon: "material-symbols-light:share-outline",
      description:
        "Enhances financial transparency by providing a detailed breakdown of expenses, fees, and charges associated with patient care, facilitating accurate financial management.",
    },
    {
      image: ReportViewImage,
      title: "List View",
      icon: "fluent:list-28-filled",
      description:
        "A robust repository of customizable reports covering patient demographics, service utilization empowering stakeholders with actionable insights for informed decision-making.",
    },
  ];
  return (
    <div className="patient-management calendar-sec">
      <div className="container">
        <Box className="text-center">
          {" "}
          <Heading as="h2">Calendar</Heading>
          <Text as="p" className="desc-managememnt ">
            Calendar allows users to manage and schedule appointments
            efficiently. Users can choose between two convenient views
          </Text>
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

export default Calendar;
