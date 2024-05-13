import { Box,  Heading, IconButton, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import ClarityHospitalImage from "@/images/clarity-hos.svg";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ClarityHospital = () => {
  return (
    <div className="clarity-hospital">
      <Box className="container">
        <Box className="clarity-hos">
          <Box className="clarity-hos-content">
            <Box>
              <Heading as="h3">
                Clarity+ for <span>Hospitals</span>{" "}
              </Heading>
              <Text as="p">
                Built for Hospitals who want to scale with confidence, Clarity
                for hospitals offers advanced security, powerful admin controls,
                and more.
              </Text>
            </Box>
            <Link
                target="_blank"
                href="https://docs.google.com/forms/d/1phpa-xOnZgWI6jfK7PQYHD8INBpGckTCebobHi67MiM/edit"
                className="contact-sale"
              >
             <Icon icon="tabler:message-circle-2-filled" width="24" color="#fff" className="btn-icon" /> Contact Sales
              </Link>
            {/* <IconButton className="contact-sale"><Icon icon="tabler:message-circle-2-filled" width="24" color="#fff" className="btn-icon" /> Contact Sales</IconButton> */}
          </Box>
          <Box className="clarityjplus-img">
            <Image src={ClarityHospitalImage} alt={ClarityHospitalImage} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ClarityHospital;
