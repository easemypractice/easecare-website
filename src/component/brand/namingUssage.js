import { Icon } from "@iconify/react";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";

const NamingUssage = () => {
  return (
    <div className="naming-ussage border-t-gray">
      <div className="container">
        <Box className="naming">
          <Heading as="h3">Naming</Heading>
          <Text as="p">
            "Clarity" is a singular term, consistently written with an uppercase
            "C." It serves as both our company and our application name (not
            "Clarity app"). When denoting specific releases from Clarity, please
            use capitalization as you would for proper nouns (e.g., "Clarity
            Method")
          </Text>
        </Box>
        <Box>
          <Heading as="h3">Usage</Heading>
          <Text as="p">
            Provide plenty of space around Clarity assets. Make them big or make
            them small, but give them room to breathe. They shouldn’t feel
            cramped or cluttered.
          </Text>
          <Box className="info-usage">
            <Box className="info-usage-inner">
              <Icon icon="fluent:shield-globe-16-filled" width={"24"} />
              <Text as="p" className="info-des">
                This is a friendly reminder that the provided graphics are
                proprietary and protected under intellectual property laws. Do
                not alter these files in any way, display these graphics in a
                way that implies a relationship, affiliation, or endorsement by
                Clarity of your product, service, or business. Do not use these
                graphics as part of your own product, business, or service’s
                name, or combine these graphics with any other graphics without
                written consent from Clarity. Get in touch if you have
                questions.
              </Text>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default NamingUssage;
