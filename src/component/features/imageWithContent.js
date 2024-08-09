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
  return (
    <div
      className="patient-management border-b-gray"
      style={{ backgroundColor: data?.backgroundColor }}
    >
      <div className="container">
        <div className={`imageWithContent ${data?.featureDir}`}>
          <div className="imageWithContentLeft">
            {/* <CustomBlockText blocks={data?.content} /> */}
            <Heading as="h2">{data.title}</Heading>
            <p>{data.description}</p>
            <ul>
              {data?.listItem?.map((item, index) => (
                <li key={index}>
                  <Icon
                    icon="ic:round-check-circle"
                    width={25}
                    height={25}
                    color="#1AC55E"
                  />
                  <span className="flex-1">{item.list}</span>
                </li>
              ))}
            </ul>
            <div className="flex" style={{ gap: "30px", marginTop: "35px" }}>
              <Link href={"/book-a-demo"} className="purple-btn">
                Get a Free Demo
              </Link>
              <Link
                href={data?.urlToLearn ? data?.urlToLearn : ""}
                className="purple-outline"
              >
                Learn more
              </Link>
            </div>
          </div>
          <Image src={data?.image} className="FeatureImg" />
        </div>
      </div>
    </div>
  );
};

export default ImageWithContent;
