import React from "react";
import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import HeaderBtns from "./HeaderBtns/HeaderBtns";
import { auth } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";
import useDirectory from "@/hooks/useDirectory";
import { defaultMenuItem } from "@/atoms/directoryMenuAtom";

const Header: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const { onSelectMenuItem } = useDirectory();

  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex
        align="center"
        justifyContent="start"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
        onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
        <Image
          src="/images/redditFace.svg"
          minHeight="30px"
          maxHeight="30px"
          minWidth="30px"
        />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {user && <Directory />}
      <Flex grow={1} mr={1} maxWidth={user ? "auto" : "600px"} align="center">
        <InputGroup width="100%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" mb={1} />
          </InputLeftElement>
          <Input
            placeholder="Search Reddit"
            fontSize="10pt"
            borderRadius="60px"
            _placeholder={{ color: "grey.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              border: "1px solid",
              borderColor: "blue.500",
              outline: "none",
            }}
            height="34px"
            bg="gray.50"
          />
        </InputGroup>
      </Flex>
      <Flex justifyContent="end">
        <HeaderBtns user={user} />
      </Flex>
    </Flex>
  );
};
export default Header;
