import { Box, Flex, Grid, Heading, Text, Button } from "@radix-ui/themes";
import React from "react";
import EvitalLogo from "@/images/clinicealogo.svg";
import HealthPlixLogo from "@/images/halthplix2.svg";
import DoconLogo from "@/images/docon2.svg";
import SrlLogo from "@/images/Eka.carelogo.svg";
import PractoLogo from "@/images/practo2.svg";
import KivLogo from "@/images/kiv2.svg";
import MobileDemoImage from "@/images/mob.png";
import Image from "next/image";
import Link from "next/link";
const IntegrationsMigrations = () => {
  return (
    <div className="integration-migration">
      <div className="container">
        <Grid columns="2" width="auto" className="integration-inner">
          <Box className="integration-mobile-view">
            <Text as="p" className="headingup-16">
              Integrations & Migrations
            </Text>
            <Heading as="h2" className="integration-heading mb-5">
              Using some other EMR? No problem!
            </Heading>
            <Text as="p" className="big-paragraph mb-6">
              With Clarity, seamlessly transfer all your patient data from other
              EMRs.
            </Text>
            <Link
              // target="_blank"
              // href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/edit"
              href={"/book-a-demo"}
              className="purple-btn"
            >
              Request for a demo
            </Link>
            {/* <Button className="purple-btn">Request for a demo</Button> */}
          </Box>
          <Box className="mobile-demo-side ">
            <Box className="flex-align mb-6 flex-end">
              <Box className="logo-box">
                {" "}
                <Image src={HealthPlixLogo} alt={"HealthPlix"} />
              </Box>
              <Box className="logo-box">
                {" "}
                <Image src={DoconLogo} alt={"docon"} />
              </Box>
              <Box className="logo-box">
                {" "}
                <Image src={SrlLogo} alt={"Eka care"} />
              </Box>
            </Box>
            <Box className="flex-align flex-end">
              <Box className="logo-box">
                {" "}
                <Image src={PractoLogo} alt={"Practo"} />
              </Box>
              <Box className="logo-box">
                {" "}
                <Image src={KivLogo} alt={"Kiv Health"} />
              </Box>
              <Box className="logo-box">
                {" "}
                <Image src={EvitalLogo} alt={"Clinicea logo"} />
              </Box>
            </Box>
          </Box>
          <Link
            style={{ maxWidth: "250px", margin: "auto" }}
            href={"/book-a-demo"}
            className="purple-btn"
          >
            Request for a demo
          </Link>
        </Grid>
      </div>
    </div>
  );
};

export default IntegrationsMigrations;
