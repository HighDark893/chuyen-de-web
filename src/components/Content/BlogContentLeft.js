import { Grid, GridItem, Box, HStack, Button, IconButton, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const rawPostData = require ('./../../data/posts.json')

const BlogContentLeft = () => {
    const [posts, setPosts] = useState(rawPostData);

    // useEffect(() => {
    //     fetch("/posts.json")
    //     .then(response => response.json())
    //     .then(data => setPosts(data))
    // }, [])
    
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
                        <Button variant='link'> For you </Button>
                        <Button variant='link'> Following </Button>
                    </HStack>
                </Box>
            </GridItem>
            {/* Content Section */}
            <GridItem>
                <Box padding="4" pt="0" bg="white" shadow="md">
                    {posts.map((post, index) =>{
                         return(
                            <Box key={index} py='5'>
                            <Text fontSize='lg'>
                                {post.author} in {post.channel}
                            </Text>
                            <Text fontSize='2xl'>{post.title}</Text>
                            <Text fontSize='lg'>{post.subtitle}</Text>
                            <Text fontSize='xs'>
                                {post.date} - {post.views} - {post.comments}
                            </Text>
                            {index < post.length -1 && <hr/>}
                        </Box>
                        );  
                    })}       
                    {/* <p>
                        {posts.map((post) => {
                            return (<h1>{post.author}</h1>)
                        })}
                    </p> */}
                    {/* {posts.length > 0 && posts.map((post, index) => (
                        <Box key={index} py="5">
                            <Text fontSize="lg">
                                {post.author} {post.channel && `in ${post.channel}`}
                            </Text>
                            <Text fontSize="2xl">{post.title}</Text>
                            <Text fontSize="lg">{post.subtitle}</Text>
                            <Text fontSize="xs">
                                {post.date} - {post.views} - {post.comments}
                            </Text>
                            {index < posts.length - 1 && <hr />}
                        </Box>
                    ))} */}
                </Box>
            </GridItem>
        </Grid>
    )
}

export default BlogContentLeft;