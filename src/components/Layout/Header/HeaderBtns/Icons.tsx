import React from "react";
import { BsChatDots, BsArrowUpRightCircle } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { Flex, Icon } from "@chakra-ui/react";

const Icons: React.FC = () => {
  return (
    <Flex align="center">
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        _hover={{ bg: "gray.200" }}
        borderRadius={4}
        display={{ base: "none", md: "flex" }}
      >
        <Icon as={BsArrowUpRightCircle} fontSize={20} />
      </Flex>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        _hover={{ bg: "gray.200" }}
        borderRadius={4}
      >
        <Icon as={BsChatDots} fontSize={20} />
      </Flex>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        _hover={{ bg: "gray.200" }}
        borderRadius={4}
      >
        <Icon as={IoMdNotificationsOutline} fontSize={25} />
      </Flex>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        _hover={{ bg: "gray.200" }}
        borderRadius={4}
      >
        <Icon as={GrAdd} fontSize={20} />
      </Flex>
    </Flex>
  );
};
export default Icons;
