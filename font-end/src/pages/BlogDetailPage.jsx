import {Badge, Box, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text, VStack} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../components/Header/Navbar";
import {useParams} from "react-router-dom";
import BlogDetailComponent from "../components/Content/BlogDetailComponent";

const BlogDetailPage = () => {
    const [detailPost, setDetailPost] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const fetchDetailIdBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/blog/${id}`);
                setDetailPost(response.data)
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchDetailIdBlog()
    }, []);

    if (!detailPost) {
        return <Text>Post not found!</Text>;
    }
    console.log(detailPost)
    return (
        <SimpleGrid>
            <NavBar/>
            <BlogDetailComponent detailPost = {detailPost}/>
        </SimpleGrid>
    )
}

export default BlogDetailPage