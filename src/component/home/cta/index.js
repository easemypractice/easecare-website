import { Box, Button, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import CtaIcon from "@/images/ctaicon.svg";
import Link from "next/link";
const CtaSection = () => {
  return (
    <Box className=" cta-section bg-teal-dark">
      <Box className="container text-center">
        <Image src={CtaIcon} alt={CtaIcon} />
        <Heading as="h2" className="cta-heading">Built for the <span className="future-text">Future.</span> <span className="available-text">Available today.</span></Heading>
        {/* <Button className="purple-btn">Get a demo</Button> */}
        <Link
                target="_blank"
                href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/edit"
                className="purple-btn"
              >
              Get a demo
              </Link>
      </Box>
    </Box>
  );
};

export default CtaSection;
