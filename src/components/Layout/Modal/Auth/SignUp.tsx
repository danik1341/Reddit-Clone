import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    username: "",
    password: "",
    isEmail: false,
  });
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  // FIREBASE logic
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!signUpForm.email) {
        throw new Error("Email not set");
      }
      await createUserWithEmailAndPassword(
        signUpForm.email,
        signUpForm.password
      );

      setSignUpForm((prev) => ({
        ...prev,
        isEmail: false,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      try {
        async () => {
          await updateProfile({ displayName: signUpForm.username });
        };
      } catch (error) {
        console.error(error);
      }
    }
  }, [user]);

  const onClick = () => {
    if (signUpForm.email) {
      setSignUpForm((prev) => ({
        ...prev,
        isEmail: true,
      }));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {!signUpForm.isEmail ? (
        <Flex flexDirection="column" width="100%">
          <Input
            required
            name="email"
            placeholder="Email"
            type="email"
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
          <Button
            width="100%"
            height="36px"
            mt={2}
            mb={2}
            bg="brand.100"
            onClick={onClick}
            isLoading={loading}
          >
            Continue
          </Button>
        </Flex>
      ) : (
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
              borderColor: "grey.500",
            }}
            _focus={{
              bg: "white",
              border: "1px solid",
              borderColor: "grey.500",
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
          {userError && (
            <Text textAlign="center" color="red" fontSize="10pt">
              {
                FIREBASE_ERRORS[
                  userError.message as keyof typeof FIREBASE_ERRORS
                ]
              }
            </Text>
          )}
          <Button
            width="100%"
            height="36px"
            mt={2}
            mb={2}
            type="submit"
            bg="brand.100"
            isLoading={loading}
          >
            Continue
          </Button>
        </form>
      )}
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          Log In
        </Text>
      </Flex>
    </>
  );
};
export default SignUp;
