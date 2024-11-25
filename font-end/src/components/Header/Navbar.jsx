import {Button, Flex, HStack, Input, InputGroup, InputLeftElement, Spacer} from "@chakra-ui/react";
import {EditIcon, SearchIcon} from "@chakra-ui/icons";
import {Header} from "./Header";
import RenderImage from "../../utils/RenderImage";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const NavBar = () => {
    const [searchText, setSearchText] = useState('')
    const [searchedBlog, setSearchedBlog] = useState([])
    const navigate = useNavigate()

    async function handleSearching() {
        try {
            const response = await axios.get('http://localhost:3005/allBlog', {
                params: {
                    title: searchText
                }
            });
            setSearchedBlog(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Flex as="nav" bg="white.200" alignItems="center" borderBottom='1px'>
            <HStack spacing='20px'>
                <Header/>
                <InputGroup width='300px'>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300'/>
                    </InputLeftElement>
                    <Input
                        onKeyDown={(e) => {
                            return e.key === 'Enter' ? handleSearching() : undefined
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Searching" size="md" variant='outline' borderRadius='full'/>
                </InputGroup>
            </HStack>

            <Spacer/>
            <HStack spacing="20px">
                <Button onClick={() => navigate('/newStory')} leftIcon={<EditIcon/>} variant='outline'> Write </Button>
                <RenderImage url={'avatar'}> </RenderImage>
            </HStack>
        </Flex>

    )
}

export default NavBar;