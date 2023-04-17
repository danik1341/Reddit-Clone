import { auth } from "@/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  useSignInWithApple,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const OAuthButtons: React.FC = () => {
  const [createSigninWithApple, aUser, aLoading, aUserError] =
    useSignInWithApple(auth);
  const [createSigninWithGoogle, gUser, gLoading, gUserError] =
    useSignInWithGoogle(auth);
  let error = "";
  if (gUserError) {
    error = gUserError.message;
  } else if (aUserError) {
    error = aUserError.message;
  }

  const onClickGoogle = async () => {
    try {
      await createSigninWithGoogle();
    } catch (err) {
      console.log(err);
    }
  };

  const onClickApple = async () => {
    try {
      await createSigninWithApple();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex align="center" direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        onClick={onClickGoogle}
        isLoading={gLoading}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Goggle
      </Button>
      <Button
        variant="oauth"
        mb={2}
        onClick={onClickApple}
        isLoading={aLoading}
      >
        <Image src="/images/apple-logo.png" height="20px" mr={4} />
        Continue with Apple
      </Button>
      {error && <Text>{error}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
