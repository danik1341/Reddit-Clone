import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <Text fontWeight="bold" fontSize="12pt">
        Sorry, there aren’t any communities on Reddit with that name.
      </Text>
      <Text fontWeight="bold" fontSize="9pt" mt={5}>
        This community may have been banned or the community name is incorrect.
      </Text>
      <Flex mt={5} gap={2}>
        <Link href="/">
          <Button variant="outline">Create Community</Button>
        </Link>
        <Link href="/">
          <Button>GO HOME</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
export default NotFound;
