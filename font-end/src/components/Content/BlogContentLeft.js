import {Box, Button, Grid, GridItem, HStack, Icon, IconButton, Text} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../../utils/ConvertDateTime";
import {FiEye} from "react-icons/fi";

const BlogContentLeft = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get('http://localhost:3005/allBlog');
                setPosts(response.data)
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchBlog()
    }, [])

    async function handleIncreaseUserView(post) {
        try {
            await axios.put(`http://localhost:3005/blog`,
                {
                    id: post._id,
                    newView: Number(post.views) + 1
                }
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    function handleMostViewPost(posts) {
        try {
            const mostViewPost = [...posts].sort((prev, after) => after.views - prev.views)
            setPosts(mostViewPost)
        } catch (err) {
            console.log(err)
        }
    }

    function handleNewestPost(posts) {
        try {
            const newestPost = [...posts].sort((prev, after) => new Date(after.createdAt) - new Date(prev.createdAt))
            setPosts(newestPost)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Grid
            templateRows="auto 1fr"
            templateColumns="1fr"
            width="100%">
            {/* Header Section */}
            <GridItem>
                <Box display="flex" padding="4" bg="gray.100">
                    <HStack spacing="20px">
                        <IconButton icon={<AddIcon/>}/>
                        <Button onClick={() => handleMostViewPost(posts)} variant='link'> For you </Button>
                        <Button onClick={() => handleNewestPost(posts)} variant='link'> Newest </Button>
                    </HStack>
                </Box>
            </GridItem>
            {/* Content Section */}
            <GridItem>
                {posts.map((post, index) => (
                    <Box onClick={() => {
                        handleIncreaseUserView(post)
                        navigate(`/story/${post._id}`)
                    }}
                         cursor="pointer" mb="4" padding="4" pt="0" bg="white" _hover={{bg: "gray.100"}}>
                        <Box key={index} py='5'>

                            <Text fontSize='lg'>
                                {post.author} in {post.channel}
                            </Text>
                            <Text fontSize='2xl'>{post.title}</Text>
                            <Text fontSize='lg'>{post.subtitle}</Text>
                            <HStack spacing={3} color="gray.500" fontSize="sm">
                                <Text fontSize='xs'>
                                    {formatDate(post.createdAt)}
                                </Text>
                                <Text fontSize='xs'>
                                    <Icon as={FiEye} boxSize={4} color="gray.600"/> - {post.views}
                                </Text>
                                <Text fontSize='xs'>
                                </Text>
                            </HStack>
                            {index < post.length - 1 && <hr/>}
                        </Box>
                    </Box>
                ))}
            </GridItem>
        </Grid>
    )
}

export default BlogContentLeft;