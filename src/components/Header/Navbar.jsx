import { Box, Flex, HStack, Input, InputGroup, InputLeftElement, Spacer, Button } from "@chakra-ui/react";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";
import { Header } from "./Header";
import RenderImage from "../../utils/RenderImage";

const NavBar = () => {
    return (
        <Flex as="nav" bg="white.200" alignItems="center" borderBottom='1px'>
            <HStack spacing='20px'>
            <Header></Header>
            <InputGroup width='300px'>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300'/>
                </InputLeftElement>
                <Input placeholder="Searching" size="md" variant='outline' borderRadius='full'/>
            </InputGroup>
            </HStack>

            <Spacer/>
            <HStack spacing="20px">
                <Button leftIcon={<EditIcon/>} variant='outline'> Write </Button>
                <RenderImage url={'avatar'}> </RenderImage>
            </HStack>
        </Flex>

    )
}

export default NavBar;