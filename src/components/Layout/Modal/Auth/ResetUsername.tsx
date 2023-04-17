import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

const ResetUsername: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [restForm, setRestForm] = useState({
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(restForm.email);
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Text fontWeight={700} mb={2} textAlign="start" alignSelf="self-start">
        Reset your password
      </Text>
      {success ? (
        <Text mb={4}>Check your email</Text>
      ) : (
        <>
          <Text fontSize="sm" textAlign="start" mb={2}>
            {`Tell us the email address associated with your Reddit account, and
            we’ll send you an email with a link to reset your password.`}
          </Text>
          <form onSubmit={onSubmit} style={{ width: "100%" }}>
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
              isLoading={sending}
            >
              Email Me
            </Button>
          </form>
        </>
      )}
      <Text fontSize="9pt">
        {`Don't have an email or need assistance logging in?  `}
        <Link fontSize="9pt" color="blue.500" cursor="pointer">
          Get Help
        </Link>
      </Text>
      <Flex>
        <Text
          m={1}
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          Sign Up
        </Text>
        {/* * */}
        <Text
          m={1}
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          Log In
        </Text>
      </Flex>
    </Flex>
  );
};
export default ResetUsername;
