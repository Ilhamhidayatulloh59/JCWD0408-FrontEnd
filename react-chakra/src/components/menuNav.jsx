import { Box, Text } from "@chakra-ui/react";

function MenuNav(props) {
  return (
    <Box color="white" _hover={{ color: "black", cursor: "pointer" }}>
      <Text>{props.children}</Text>
    </Box>
  );
}

export default MenuNav;
