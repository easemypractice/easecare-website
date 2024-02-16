import { Box, Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import EditorIcon from "@/images/editors-picks.svg";

const EditorChoice = () => {
  return (
    <div>
      <Box className="editor-choice">
        <Box className="container">
          <Flex className="head">
            <Image src={EditorIcon} alt="icon" width={44} height={44} />
            <Text as="span">Editor’s Picks</Text>
          </Flex>
          <Flex className="body-container">
            <Flex className="body" direction="column">
              <Flex className="content" direction="column">
                <Text as="span"> Patient</Text>
                <Text as="h4"> Patient Empowerment through EHR Access</Text>
              </Flex>
              <Flex className="content" direction="column">
                <Text as="span"> Patient</Text>
                <Text as="h4"> Patient Empowerment through EHR Access</Text>
              </Flex>
              <Flex className="content" direction="column">
                <Text as="span"> Patient</Text>
                <Text as="h4"> Patient Empowerment through EHR Access</Text>
              </Flex>
            </Flex>
            <Flex direction="column" className="elite-club">
              <Text as="h2">Join the elite club of Clarity Method</Text>
              <Text as="p">
                Sign up to our weekly newsletter. Every Saturday we send you our
                best topics directly to your inbox.
              </Text>
              <Button variant="solid" className="purple-btn">
                Subscribe
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default EditorChoice;
