import { Box, Heading } from "@chakra-ui/react"
import RenderImage from "../../utils/RenderImage"

export function Header() {
    return (
        <Box as="header" p={0.5} bg="teal.500" color="white" display="flex" alignItems="center">
            <RenderImage url = {'headerIcon'}></RenderImage>
            <Heading size="lg"></Heading>
        </Box>
    )
}
