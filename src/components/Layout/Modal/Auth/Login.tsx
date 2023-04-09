import { AuthModalState } from "@/atoms/authModalAtom";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ref, get } from "firebase/database";
import { auth, database } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // FIREBASE logic
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getEmailByUsernamer = async (
      username: string
    ): Promise<string | null> => {
      const userRef = ref(database, `users/${username}`);
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        return userData.email;
      } else {
        return null;
      }
    };
    const email: string | null = await getEmailByUsernamer(loginForm.username);
    if (email) {
      signInWithEmailAndPassword(email, loginForm.password);
      console.log(`Connected Successfully to ${email}`);
    } else {
      signInWithEmailAndPassword("", loginForm.password);
      console.error(
        `Could not find user with username: ${loginForm.username}. Error: ${
          FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]
        }`
      );
    }
  };

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
        borderRadius="60px"
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
        borderRadius="60px"
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
        isLoading={loading}
      >
        Log In
      </Button>
      <Text textAlign="center" color="red" fontSize="10pt">
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Flex justifyContent="center" mb={2}>
        <Text
          fontSize="9pt"
          mr={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Forgot your{" "}
          <Text
            fontSize="9pt"
            mr={1}
            color="blue.500"
            m={1}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "resetUsername",
              }))
            }
          >
            username
          </Text>{" "}
          or{" "}
          <Text
            fontSize="9pt"
            mr={1}
            color="blue.500"
            m={1}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "resetPassword",
              }))
            }
          >
            password
          </Text>{" "}
          ?
        </Text>
      </Flex>
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
