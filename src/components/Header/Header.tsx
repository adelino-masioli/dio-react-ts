import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Link as ReactRouterLink, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { changeLocalStorage } from "../../services/storage";
import { AppContext } from "../AppContext";
import { Logo } from "../Logo";

interface Props {
  children: React.ReactNode;
  to: string;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children, to } = props;

  return (
    <ChakraLink as={ReactRouterLink} to={to} px={2} py={1}>
      {children}
    </ChakraLink>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const navegate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navegate("/");
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} width={"100%"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo color="gray.900" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} to="/account/1">
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.githubusercontent.com/u/2363796?v=4"}
                  />
                  <Text as={"small"}>{user}</Text>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1 </MenuItem>
                <MenuItem>Link 2</MenuItem>
                {isLoggedIn && (
                  <>
                    <MenuDivider />
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} to="/account/1">
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
