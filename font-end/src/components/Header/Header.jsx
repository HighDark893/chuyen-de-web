import {Box, Button, Heading, Link, LinkBox} from "@chakra-ui/react"
import RenderImage from "../../utils/RenderImage"
import {EditIcon, LinkIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate()
    return (
        <Box onClick={() => navigate('/')} cursor="pointer" as="header" p={0.5} bg="teal.500" color="white" display="flex" alignItems="center">
            <RenderImage url = {'headerIcon'}/>
            <Heading size="lg"/>
        </Box>
    )
}
