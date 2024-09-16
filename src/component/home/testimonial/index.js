"use client";
import { Icon } from "@iconify/react";
import { Avatar, Box, Heading, Text } from "@radix-ui/themes";
import React from "react";
import TestiDemoImage from "@/images/testi-demo.svg";
import PhysiotherapyImage from "@/images/dra.png";
import PediatricianImage from "@/images/drb.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonail = () => {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    waitForAnimate: false,
  };
  return (
    <Box className="testimonail">
      <Box className="container gap-32 flex-col">
        <Box className="testimonail-heading">
          <Heading as="h2">Here’s why Doctors</Heading>
          <div className="heart-head">
            <Icon icon="mdi:heart" width={"57"} color="#FF642D" />
            <Heading as="h2">Clarity</Heading>
          </div>
        </Box>
        <Box className="CardsGrp webTestimonial">
          <TestimonialCard />
        </Box>
        <div className="mobileTestimonial">
          <Slider {...settings}>
            <div className="doctor-review pt-20">
              <div className="flex-col gap-20">
                <p className="testi-review">
                  Tops all other appointment scheduling tools. Simple and sleek
                  without any clutter.
                </p>

                <div className="flex flex-align-end gap-6">
                  <Image
                    src={TestiDemoImage}
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt="Dr. Sandeep Dathik"
                  />
                  <div>
                    <div className="flex ">
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                    </div>
                    <Text as={"p"} className="testi-name">
                      Dr. Sandeep Dathik
                    </Text>
                    <Text as={"p"} className="testi-designation">
                      Orthopedic Surgeon
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-review pt-20">
              <div className="flex-col gap-20">
                <p className="testi-review">
                  We&apos;ve been using Easecare clarity for our clinic&apos;s
                  Electronic Health Records, and it has truly streamlined our
                  workflow. The user-friendly interface makes it easy for our
                  doctors to access and update patient records efficiently.
                </p>

                <div className="flex flex-align-end gap-6">
                  <Image
                    src={PhysiotherapyImage}
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt="Dr. Vipin Mehra"
                  />
                  <div>
                    <div className="flex ">
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                    </div>
                    <Text as={"p"} className="testi-name">
                      Dr. Vipin Mehra
                    </Text>
                    <Text as={"p"} className="testi-designation">
                      M.D. Physician
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-review pt-20">
              <div className="flex-col gap-20">
                <p className="testi-review">
                  Clarity has truly streamlined my clinic management workflow.
                  Its intuitive interface and robust features make it a
                  must-have tool for anyone looking to stay organized and
                  efficient.
                </p>
                <div className="flex flex-align-end gap-6">
                  <Image
                    src={PediatricianImage}
                    alt="Dr. Shantanu Patil"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex ">
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                      <Icon
                        icon="ic:sharp-star"
                        width="20"
                        height="19"
                        color="#FF630C"
                      ></Icon>
                    </div>
                    <Text as={"p"} className="testi-name">
                      Dr. Shantanu Patil
                    </Text>
                    <Text as={"p"} className="testi-designation">
                      Pediatrician
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Box>
    </Box>
  );
};

export default Testimonail;

const data = [
  {
    review:
      "Tops all other appointment scheduling tools. Simple and sleek without any clutter.",
    doctorName: "Dr. Sandeep Dathik",
    specialization: "Orthopedic Surgeon",
    profile: TestiDemoImage,
    alt: "Dr. Sandeep Dathik",
  },
  {
    review:
      "We've been using Easecare clarity for our clinic's Electronic Health Records, and it has truly streamlined our workflow. The user-friendly interface makes it easy for our doctors to access and update patient records efficiently.",
    doctorName: "Dr. Vipin Mehra",
    specialization: "M.D. Physician",
    profile: PhysiotherapyImage,
    alt: "Dr. Vipin Mehra",
  },
  {
    review:
      "Clarity has truly streamlined my clinic management workflow. Its intuitive interface and robust features make it a must-have tool for anyone looking to stay organized and efficient.",
    doctorName: "Dr. Shantanu Patil",
    specialization: "Pediatrician",
    profile: PediatricianImage,
    alt: "Dr. Shantanu Patil",
  },
];

const TestimonialCard = () => {
  return (
    <>
      {data.map((item, index) => (
        <div className="doctor-review" key={index}>
          <div className="flex-col gap-20">
            <p className="testi-review">{item.review}</p>

            <div className="flex flex-align-end gap-6">
              <Image
                src={item.profile}
                width={50}
                height={50}
                className="rounded-full"
                alt={item?.alt ? item?.alt : ""}
              />
              <div>
                <div className="flex ">
                  <Icon
                    icon="ic:sharp-star"
                    width="20"
                    height="19"
                    color="#FF630C"
                  ></Icon>
                  <Icon
                    icon="ic:sharp-star"
                    width="20"
                    height="19"
                    color="#FF630C"
                  ></Icon>
                  <Icon
                    icon="ic:sharp-star"
                    width="20"
                    height="19"
                    color="#FF630C"
                  ></Icon>
                  <Icon
                    icon="ic:sharp-star"
                    width="20"
                    height="19"
                    color="#FF630C"
                  ></Icon>
                  <Icon
                    icon="ic:sharp-star"
                    width="20"
                    height="19"
                    color="#FF630C"
                  ></Icon>
                </div>
                <Text as={"p"} className="testi-name">
                  {item.doctorName}
                </Text>
                <Text as={"p"} className="testi-designation">
                  {item.specialization}
                </Text>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
