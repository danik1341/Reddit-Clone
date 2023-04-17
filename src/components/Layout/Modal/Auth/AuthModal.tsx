import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";
import ResetUsername from "./ResetUsername";

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
