import React, { useState } from "react";
import CreateCommunityModal from "../../Modal/CreateCommunityModal/CreateCommunityModal";
import { MenuItem } from "@chakra-ui/menu";
import { Flex, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { signOut } from "firebase/auth";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "grey.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex align="center">
          <Icon as={GrAdd} mr={2} fontSize={20} />
          Create Commmunity
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
