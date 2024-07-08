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
import CustomBlockText from "../customBlockText";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
const ImageWithContent = ({ data }) => {
  console.log(data);
  return (
    <div
      className="patient-management border-b-gray"
      style={{ backgroundColor: data?.backgroundColor?.hex }}
    >
      <div className="container">
        <div className="imageWithContent">
          <div>
            <CustomBlockText blocks={data?.content} />
            <div className="flex" style={{ gap: "30px", marginTop: "35px" }}>
              <Link href={"/book-a-demo"} className="purple-btn">
                Get a Free Demo
              </Link>
              <Link href={"/book-a-demo"} className="purple-outline">
                Learn more
              </Link>
            </div>
          </div>
          <Image
            src={`${data?.image ? urlFor(data?.image) : ""} `}
            width={500}
            height={355}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithContent;
