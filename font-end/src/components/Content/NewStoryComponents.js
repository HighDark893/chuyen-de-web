import {Button, ChakraProvider, Flex, IconButton, Textarea, VStack} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useState} from "react";
import axios from "axios";

const rawPostData = require('./../../data/posts.json')

function NewStoryComponent() {
    const [userTitle, setUserTitle] = useState('')
    const [userText, setUserText] = useState('')

    const saveUserBlog = async () => {
        try {
            const userData = {
                title: userTitle,
                blog: userText
            }
            await axios.post('http://localhost:3005/blog', userData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ChakraProvider>
            <VStack align="start" spacing={1}>

                <Flex width={'full'} gap="4" justify="space-between">
                    <IconButton
                        aria-label="Add Story"
                        icon={<AddIcon/>}
                        borderRadius="full"
                        size="sm"
                        variant="outline"
                    />
                    <Button onClick={saveUserBlog}> Publish </Button>
                </Flex>

                <Textarea
                    placeholder="Title"
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.700"
                    variant="unstyled"
                    resize="none"
                    p={0}
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                />

                <Textarea
                    placeholder="Tell your story..."
                    fontSize="md"
                    color="black"
                    variant="unstyled"
                    resize="none"
                    p={0}
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                />
            </VStack>
        </ChakraProvider>
    );
}

export default NewStoryComponent;