import {Box, Heading, HStack, Icon, Image, Text, VStack} from "@chakra-ui/react";
import {FaRegComment, FaRegStar} from "react-icons/fa";
import { Link } from "react-router-dom"
import React from "react";
import {FiEye} from "react-icons/fi";
import {formatDate} from "../../utils/ConvertDateTime";

const SearchStoriesComponent = ({searchStories}) => {
    const searchText = searchStories.searchText;
    const stories = searchStories.blogs;
    return (
        <Box maxW="800px" mx="auto" p={6}>
            <Heading mb={6}>Results for "{searchText}"</Heading>
            <VStack spacing={6} align="stretch">
                {stories.map((story, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" p={4} shadow="md">
                        <HStack align="flex-start">
                            <Box flex="1">
                                <Heading as="h3" size="md" mb={2}>
                                    <Link to={`/story/${story._id}`}>{story.title}</Link>
                                </Heading>
                                <Text fontSize="sm" color="gray.500" mb={2}>
                                    {story.description}
                                </Text>
                                <HStack spacing={4} fontSize="sm" color="gray.600">
                                    <Text>{formatDate(story.createdAt)}</Text>
                                    <HStack spacing={1}>
                                        <Icon as={FiEye}/>
                                        <Text>{story.views}</Text>
                                    </HStack>
                                    <HStack spacing={1}>
                                        <Icon as={FaRegComment}/>
                                        <Text>{story.comments}</Text>
                                    </HStack>
                                </HStack>
                            </Box>
                            <Image
                                alt={story.title}
                                boxSize="100px"
                                borderRadius="md"
                                objectFit="cover"
                            />
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    )
}

export default SearchStoriesComponent