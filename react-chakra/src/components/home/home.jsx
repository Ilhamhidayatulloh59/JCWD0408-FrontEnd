import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import Wrapper from "../wrapper";
import Title from "./title";
import IMG from "../../assets/frame.png";
import IMG2 from "../../assets/frame2.png";
import Motion from "../motion";

function Home() {
  const { colorMode } = useColorMode();
  return (
    <Wrapper>
      <Flex>
        <Title />
        <Box flex={1} position="relative" marginTop="80px">
          <Motion pos="right">
            <Image src={colorMode == "light" ? IMG : IMG2} />
          </Motion>
        </Box>
      </Flex>
    </Wrapper>
  );
}

export default Home;
