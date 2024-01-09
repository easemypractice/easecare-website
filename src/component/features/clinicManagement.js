"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ChartingImage from "@/images/charting.svg";
import MultiClinicImage from "@/images/multi-clinic.svg";
import DoctorMangmentImage from "@/images/doctor-managment.svg";
import StaffMangmentImage from "@/images/staff-managment.svg";
import RolesPermissionImage from "@/images/roles-permission.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
const ClinicManagement = () => {
  const ManagementCardData = [
    {
      image: MultiClinicImage,
      title: "Muti-Clinic management",
      icon: "material-symbols-light:share-outline",
      description:
        "Enables centralized control for consistent processes and data management across multiple clinic locations.",
    },
    {
      image: DoctorMangmentImage,
      title: "Doctors management",
      icon: "tabler:file-import",
      description:
        " Streamlines doctor-related activities, including appointment scheduling, profile management, and consultation tracking.",
    },
    {
      image: StaffMangmentImage,
      title: "Staff Management",
      icon: "fluent:receipt-16-regular",
      description:
        " Focuses on non-medical personnel, offering tools like scheduling, payroll and performance tracking.",
    },
    {
      image: RolesPermissionImage,
      title: "User Roles and Permissions",
      icon: "fluent:calendar-48-regular",
      description:
        "Ensures security by defining roles (e.g., doctor, nurse) and assigning permissions, limiting access to relevant information and maintaining compliance.",
    },
  ];
  return (
    <div className="patient-management clinic-management">
      <div className="container">
        <Box className="text-center">
          {" "}
          <Heading as="h2">Clinic management</Heading>
          <Text as="p" className="desc-managememnt ">
            Clinic Management is a comprehensive system designed to streamline
            and enhance the efficiency of healthcare facilities. It encompasses
            various subsections that collectively contribute to the smooth
            operation and organization of clinics.
          </Text>
        </Box>
        <Box className="grid-3">
          {ManagementCardData.map((item, index) => (
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
      </div>
    </div>
  );
};

export default ClinicManagement;
