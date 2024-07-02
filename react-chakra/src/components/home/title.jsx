import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import MediaSosial from "./medsos";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoDiscord,
} from "react-icons/io5";
import Motion from "../motion";
import TypeAnimation from "./typeWriter";

function Title() {
  const { colorMode } = useColorMode();
  return (
    <Box flex={1} fontSize="32px" marginTop="100px">
      <Motion>
        <Text>
          Helo I'm{" "}
          <Heading as={"span"} fontWeight="bold">
            Lorem Ipsum.
          </Heading>
        </Text>
        <Heading>
          <TypeAnimation
            sequence={["front end ", "back end ", "fullstack "]}
            delay={3000}
          />
          <Heading
            as={"span"}
            fontWeight="bold"
            fontSize="46px"
            sx={{
              WebkitTextStroke: "2px",
              WebkitTextStrokeColor: colorMode == "light" ? "black" : "white",
              color: colorMode == "light" ? "white" : "transparent",
            }}
          >
            Developer
          </Heading>
        </Heading>
        <Text>
          Based in{" "}
          <Heading as={"span"} fontWeight="bold">
            India.
          </Heading>
        </Text>
        <Text fontSize="14px" marginTop="30px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem velit,
          voluptates eos pariatur accusamus quos quis dolor expedita beatae
          numquam voluptate quibusdam magnam aperiam modi minima, iusto
          distinctio quo amet. Eveniet id libero sint assumenda ipsum dolorem
          rem officia commodi ea suscipit quam, veniam minima sit asperiores,
          accusantium fugiat. Soluta.
        </Text>
        <Flex gap="5px" marginTop="20px">
          <MediaSosial icon={IoLogoFacebook} />
          <MediaSosial icon={IoLogoInstagram} />
          <MediaSosial icon={IoLogoLinkedin} />
          <MediaSosial icon={IoLogoDiscord} />
        </Flex>
      </Motion>
    </Box>
  );
}

export default Title;
