import { Box } from "@chakra-ui/react";

function Wrapper({children}) {
    return (
        <Box m="0 150px">
            {children}
        </Box>
    )
}

export default Wrapper