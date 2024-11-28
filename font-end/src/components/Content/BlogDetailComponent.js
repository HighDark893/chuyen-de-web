import {Badge, Box, Flex, Heading, HStack, Icon, Image, Text, VStack} from "@chakra-ui/react";
import {formatDate} from "../../utils/ConvertDateTime";
import {FiEye} from "react-icons/fi";

const BlogDetailComponent = ({detailPost}) => {
    return (
        <Box bg="gray.50" p={5}>
            {/* Header Section */}
            <Box maxW="800px" mx="auto" bg="white" p={8} borderRadius="md" boxShadow="md">
                <VStack align="start" spacing={4}>
                    {/* Blog Title */}
                    <Badge colorScheme="yellow" fontSize="sm" borderRadius="full" px={3}>
                        Member-only story
                    </Badge>
                    <Heading fontSize="2xl" lineHeight="short">
                        {detailPost.title}
                    </Heading>
                    <Text color="gray.600">{detailPost.subtitle}</Text>

                    {/* Author Details */}
                    <Flex align="center" gap={4}>
                        <Image
                            src="https://via.placeholder.com/50" // Replace with author's profile image
                            alt="Author Image"
                            boxSize="50px"
                            borderRadius="full"
                        />
                        <Box>
                            <Text fontWeight="bold">{detailPost.author}</Text>
                        </Box>
                    </Flex>

                    {/* Metadata */}
                    <HStack spacing={4} color="gray.500" fontSize="sm">
                        {/*<Text fontSize='xs'>{formatDate(detailPost.updatedAt)}</Text>*/}
                        <Text><Icon as={FiEye} boxSize={4} color="gray.600"/> {detailPost.views}</Text>
                        <HStack spacing={1}>
                            <Icon/>
                            <Text>148 comments</Text>
                        </HStack>
                    </HStack>
                </VStack>
            </Box>

            {/* Content */}
            <Box maxW="800px" mx="auto" bg="white" mt={6} p={8} borderRadius="md" boxShadow="md">
                {detailPost.story}
            </Box>

            {/* Blog Content */}
            <Box maxW="800px" mx="auto" bg="white" mt={6} p={8} borderRadius="md" boxShadow="md">
                <Text mb={4}>
                    I care <Text as="span" fontWeight="bold">a lot</Text> about the tools I use. Especially when
                    they aren’t
                    free.
                </Text>
                <Text mb={4}>
                    Here’s what I’m paying for in 2023–24 to improve my performance and productivity as a software
                    engineer.
                </Text>
                <Text as="i" fontSize="sm" color="gray.500">
                    Please note: None of the links in this article are affiliate links.
                </Text>
            </Box>
        </Box>
    )
}

export default BlogDetailComponent