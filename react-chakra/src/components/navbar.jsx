import { Button, Flex, Icon, Image, useColorMode } from "@chakra-ui/react";
import MenuNav from "./menuNav";
import ld from "../assets/logo-dark.png";
import ll from "../assets/logo-light.png";
import Wrapper from "./wrapper";
import { MdOutlineNightlightRound } from "react-icons/md";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Wrapper>
      <Flex
        bgColor={colorMode == "light" ? "white" : "transparent"}
        height="70px"
        color="white"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={colorMode == "light" ? ld : ll} w="100px" h="35px" />
        <Flex gap="32px" justifyContent="center" alignItems="center">
          <MenuNav>Home</MenuNav>
          <MenuNav>Profile</MenuNav>
          <MenuNav>Portofolio</MenuNav>
          <MenuNav>Contact</MenuNav>
        </Flex>
        <Flex alignItems="center" gap="20px">
          <Button
            bgColor={colorMode == "light" ? "black" : "white"}
            color={colorMode == "light" ? "white" : "black"}
            size="sm"
            fontSize="12px"
          >
            Resume
          </Button>
          <Icon
            onClick={toggleColorMode}
            color={colorMode == "light" ? "black" : "white"}
            fontSize="20px"
            as={MdOutlineNightlightRound}
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
}

export default Navbar;
