import { AuthModalState } from "@/atoms/authModalAtom";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import ResetUsername from "./ResetUsername";
import ResetPassword from "./ResetPassword";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(AuthModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) {
      handleClose();
    }
    console.log("user", user);
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent height="50%" borderRadius="15px">
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "getApp" && "Get the Reddit app"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
            >
              {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <OAuthButtons />
                  <Flex
                    align="center"
                    mb={2}
                    mt={2}
                    flexDirection="row"
                    flexGrow={2}
                    width="100%"
                  >
                    <Divider borderColor="gray.500" />
                    <Text color="gray.500" fontWeight={700} m={1}>
                      OR
                    </Text>
                    <Divider borderColor="gray.500" />
                  </Flex>
                  <AuthInputs />
                </>
              ) : modalState.view === "resetPassword" ? (
                <ResetPassword />
              ) : modalState.view === "resetUsername" ? (
                <ResetUsername />
              ) : null}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
