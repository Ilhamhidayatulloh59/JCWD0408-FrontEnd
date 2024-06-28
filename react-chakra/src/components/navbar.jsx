import { Flex } from "@chakra-ui/react";
import MenuNav from "./menuNav";

function Navbar() {
  return (
    <Flex
      bgColor="teal"
      height="70px"
      justifyContent="center"
      alignItems="center"
      color="white"
      gap="32px"
    >
      <MenuNav>Home</MenuNav>
      <MenuNav>Profile</MenuNav>
      <MenuNav>Portofolio</MenuNav>
      <MenuNav>Contact</MenuNav>
    </Flex>
  );
}

export default Navbar;
