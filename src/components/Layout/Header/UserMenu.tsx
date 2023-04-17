import { AuthModalState } from "@/atoms/authModalAtom";
import { communityState } from "@/atoms/communitiesAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import {
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle,
  AiOutlineTrademarkCircle,
} from "react-icons/ai";
import { BsMegaphone, BsMoon } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiBitcoin } from "react-icons/ci";
import { FaRedditSquare, FaScroll } from "react-icons/fa";
import { GrShield } from "react-icons/gr";
import { IoLogOutOutline, IoSparkles } from "react-icons/io5";
import { TbTelescope } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { auth } from "../../../firebase/clientApp";

type UserMenuProps = {
  user?: User | null;
};
const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const resetCommunityState = useResetRecoilState(communityState);
  const setAuthModalSate = useSetRecoilState(AuthModalState);

  const logout = async () => {
    await signOut(auth);
    resetCommunityState();
  };

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0 px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        width={user ? { base: "none", lg: "170px" } : { base: "none" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize={24}
                  boxSize={7}
                  mr={1}
                  color="gray.300"
                />
                <Flex
                  direction="column"
                  display={{ base: "none", lg: "flex" }}
                  align="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split("@")[0]}
                  </Text>
                  <Flex align="center">
                    <Icon
                      as={IoSparkles}
                      color="brand.100"
                      mr={1}
                      fontSize={15}
                    />
                    <Text color="gray.400">1 karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={24} color="gray.400" mr={1} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList minWidth="254px">
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "white" }}
              cursor="text"
              color="gray.400"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={CgProfile}
                    fontSize={20}
                    color="gray.400"
                    boxSize={5}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>My Stuff</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight="semibold"
              _hover={{ bg: "grey.400" }}
              justifyContent="center"
              color="blackAlpha.700"
              minHeight="40px"
            >
              <Flex align="center" ml="20px">
                <Flex>
                  <Text mr={10}>Online Status</Text>
                </Flex>
                <Flex>
                  <Switch />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight="semibold"
              _hover={{ bg: "grey.400" }}
              justifyContent="center"
              color="blackAlpha.700"
              minHeight="40px"
            >
              <Flex mr="100px">
                <Text>Profile</Text>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight="semibold"
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex mr="50px">
                <Text>Create Avatar</Text>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight="semibold"
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex mr="55px">
                <Text>User Settings</Text>
              </Flex>
            </MenuItem>
            <Divider borderColor="gray.400" />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "white" }}
              cursor="text"
              color="gray.400"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={AiOutlineEye}
                    fontSize={20}
                    color="gray.400"
                    boxSize={5}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>View Options</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight="semibold"
              _hover={{ bg: "grey.400" }}
              justifyContent="center"
              color="blackAlpha.700"
              minHeight="40px"
            >
              <Flex align="center" ml="20px">
                <Flex>
                  <Text>Dark Mode</Text>
                </Flex>
                <Flex ml="60px">
                  <Switch />
                </Flex>
              </Flex>
            </MenuItem>
            <Divider borderColor="gray.400" />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={AiOutlineTrademarkCircle}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Create a Community</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={BsMegaphone}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={5}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Advertise on Reddit</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={CiBitcoin}
                    fontSize={30}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Coins</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={GrShield}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={5}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Premium</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={TbTelescope}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Explore</Text>
                </Flex>
                <Flex ml="100px">
                  <ChevronDownIcon boxSize="25px" />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={AiOutlineQuestionCircle}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Help Center</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={AiOutlineInfoCircle}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>More</Text>
                </Flex>
                <Flex ml="115px">
                  <ChevronDownIcon boxSize="25px" />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={FaScroll}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={4}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Terms & Policies</Text>
                </Flex>
                <Flex ml="43px">
                  <ChevronDownIcon boxSize="25px" />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
              onClick={logout}
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={IoLogOutOutline}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Log Out</Text>
                </Flex>
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight="semibold"
              _hover={{ bg: "grey.400" }}
              justifyContent="center"
              color="blackAlpha.700"
              minHeight="40px"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={BsMoon}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={5}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Dark Mode</Text>
                </Flex>
                <Flex ml="70px">
                  <Switch />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={AiOutlineQuestionCircle}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Help Center</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={AiOutlineInfoCircle}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>More</Text>
                </Flex>
                <Flex ml="115px">
                  <ChevronDownIcon boxSize="25px" />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={FaScroll}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={4}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Terms & Policies</Text>
                </Flex>
                <Flex ml="43px">
                  <ChevronDownIcon boxSize="25px" />
                </Flex>
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={BsMegaphone}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={5}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Advertise on Reddit</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <Flex width="100%" justifyContent="center">
              <MenuDivider width="80%" />
            </Flex>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "grey.400" }}
              color="blackAlpha.700"
              minHeight="40px"
              justifyContent="center"
              onClick={() => setAuthModalSate({ open: true, view: "login" })}
            >
              <Flex align="center" grow={2}>
                <Flex>
                  <Icon
                    as={IoLogOutOutline}
                    fontSize={20}
                    color="blackAlpha.700"
                    boxSize={6}
                    alignSelf="start"
                    minWidth="40px"
                  />
                </Flex>
                <Flex>
                  <Text>Log In/Sign Up</Text>
                </Flex>
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
