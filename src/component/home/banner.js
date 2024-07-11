import { Button, Heading, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import HeroImag from "@/images/homebanner-new.png";
import Image from "next/image";
import Link from "next/link";
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="banner-content-top">
          {/* {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div key={index}>
                <Image
                  src={urlFor(item.titleImage).url()}
                  height={400}
                  width={400}
                  alt={"blog-image"}
                  className=" rounded-lg border    "
                />
              </div>
            ))} */}
          <Button className="green-btn home-green-btn">
            An EHR built by Doctors for Doctors
          </Button>
          <Heading size="1" className="home-heading">
            <span className="heading-white"> Clarity is a</span>{" "}
            <span className="heading-gradiant">
              Better way to Manage Practice
            </span>
          </Heading>
          <Text className="banner-description">
            Meet the new standard for modern practice management. Streamline
            patient care, appointments, billing, and engagement
          </Text>
          <Link
            // href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/viewform?edit_requested=true"
            href={"/book-a-demo"}
            className="purple-btn"
            // target="_blank"
          >
            Request for a demo
          </Link>
          {/* <Button className="purple-btn">Request for a demo</Button> */}
          <Text className="banner-text text-white">
            Modern, Secure, Cloud-Based EMR for Growing Your Practice
          </Text>
        </div>
        {/* <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            maxWidth: "1200px",
            margin: "auto",
          }}
          width="100%"
          height="759"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FR3rCmYoH6afPQEsnCzRx9V%2FHero-Frame%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D82-5664%26viewport%3D149%252C1311%252C0.12%26t%3DnE2uVAdThriS4CIx-1%26scaling%3Dscale-down%26starting-point-node-id%3D82%253A5664%26mode%3Ddesign%26hide-ui%3D1" 
          allowTransparency
          allowFullScreen
        ></iframe> */}
        <div className="banner-image">
          <Image
            src={HeroImag}
            alt="Snapshot of Easecare clarity clinic management software in real-time use."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
