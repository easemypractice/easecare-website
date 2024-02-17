import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

const JoinEliteClubCard = () => {
  return (
      <Flex direction="column" className="elite-club">
        <Text as="h2">Join the elite club of Clarity Method</Text>
        <Text as="p">
          Sign up to our weekly newsletter. Every Saturday we send you our best
          topics directly to your inbox.
        </Text>
        <Button variant="solid" className="purple-btn">
          Subscribe
        </Button>
      </Flex>
  );
};

export default JoinEliteClubCard;
