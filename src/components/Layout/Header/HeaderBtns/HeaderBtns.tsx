import { Button, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import UserMenu from "../UserMenu";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";

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
