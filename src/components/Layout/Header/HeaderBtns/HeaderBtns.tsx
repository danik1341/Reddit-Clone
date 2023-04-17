import React from "react";
import { Button, Flex, Menu } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/Auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import Icons from "./Icons";
import UserMenu from "../UserMenu";
import { useSignOut } from "react-firebase-hooks/auth";

type HeaderBtnsProps = {
  user?: User | null;
};

const HeaderBtns: React.FC<HeaderBtnsProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <>
            <Icons />
            <Button>Advertise</Button>
          </>
        ) : (
          <AuthButtons />
        )}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default HeaderBtns;
