import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import Motion from "../motion";

function MediaSosial({ icon }) {
  const { colorMode } = useColorMode();
  return (
    <Motion>
      <Flex
        w="30px"
        h="30px"
        bgColor={colorMode == "light" ? "black" : "white"}
        justifyContent="center"
        alignItems="center"
        borderRadius="5px"
        cursor="pointer"
      >
        <Icon
          color={colorMode == "light" ? "white" : "black"}
          fontSize="18px"
          as={icon}
        />
      </Flex>
    </Motion>
  );
}

export default MediaSosial;
