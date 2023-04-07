import { AuthModalState } from "@/atoms/authModalAtom";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import React, { useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  // FIREBASE logic
  const onSubmit = () => {};

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="username"
        placeholder="Username"
        type="text"
        bg="gray.50"
        mb={2}
        fontSize="10pt"
        onChange={onChange}
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        required
        name="password"
        placeholder="Password"
        type="password"
        bg="gray.50"
        mb={2}
        fontSize="10pt"
        onChange={onChange}
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "grey.500",
        }}
        _focus={{
          bg: "white",
          border: "1px solid",
          borderColor: "grey.500",
        }}
      />
      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        bg="brand.100"
      >
        Log In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New to Reddit?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }));
          }}
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
