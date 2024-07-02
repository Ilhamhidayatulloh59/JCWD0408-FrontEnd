import { Box, Text, useColorMode } from "@chakra-ui/react";

function MenuNav(props) {
  const { colorMode } = useColorMode();
  return (
    <Box
      color={colorMode == "light" ? "black" : "white"}
      cursor="pointer"
      _hover={{ color: "black" }}
    >
      <Text>{props.children}</Text>
    </Box>
  );
}

export default MenuNav;
