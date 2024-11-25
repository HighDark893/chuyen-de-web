import { Grid, GridItem, Box, HStack, Button, IconButton, Text, Flex, WrapItem, Wrap, extendTheme, Link } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const theme = extendTheme({
    colors: {
        more: {
            defaultGreen: "#1a8917",
        },
    },
})

const BlogContentRight = () => {
    return (
        <Grid
            templateRows="auto 1fr"
            templateColumns="1fr"
            gap={4}
            width="100%"
            padding='10'
        >
            {/* Staff Picks Section */}
            <GridItem>
                <Box display="flex" padding="4">
                    <HStack spacing="20px">
                        <Button
                            variant='link'
                            fontWeight='bold'
                            color='black'>Staff Picks</Button>
                    </HStack>
                </Box>
            </GridItem>
            <GridItem>
                <Box padding="4" pt="0" bg="white" shadow="md">
                    <Box py='5'>
                        <HStack>
                            <Button variant='link'>The Medium Newsletter</Button>
                            <Text>in</Text>
                            <Button variant='link'>The Medium Blog</Button>
                        </HStack>
                        <Button variant='link'>Why this year's hurricane season is worse than most</Button>
                    </Box>
                    <hr />
                    <Box py='5'>
                        <Button variant='link'>Alberto Romero</Button>
                        <Button variant='link'>30 Things I've Learned About AI</Button>
                    </Box>
                    <hr />
                    <Box py='5'>
                        <HStack>
                            <Button variant='link'>Sam Liberty</Button>
                            <Text>in</Text>
                            <Button variant='link'>Bootcamp</Button>
                        </HStack>
                        <Button variant='link'>Why do people who "don't play games" play Wordle?</Button>
                    </Box>
                </Box>
                <Button pt='5' pl='4' variant='link'>See the full list</Button>
            </GridItem>

            {/* Recommended Topics Section */}
            <GridItem>
                <Box display="flex" padding="4">
                    <HStack spacing="20px">
                        <Button
                            variant='link'
                            fontWeight='bold'
                            color='black'>Recommended Topics</Button>
                    </HStack>
                </Box>
            </GridItem>
            <GridItem>
                <Wrap spacing="12px">
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Programming</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Self Improvement</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Data Science</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Writing</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Technology</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Relationships</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button variant="outline" borderRadius="full">Politics</Button>
                    </WrapItem>
                </Wrap>
                <Button pt='5' pl='4' variant='link'>See more topics</Button>
            </GridItem>
            <GridItem>
                <Box display="flex" padding="4">
                        <HStack spacing="20px">
                            <Text
                                fontWeight='bold'
                                color='black'>Recommended Topics</Text>
                        </HStack>
                </Box>
                <Text padding='4' fontSize='sm'>Click the icon on any story to easily add it to your reading list or a custom list that you can share.</Text>
                <HStack spacing="16px" fontSize="sm" color="gray.500" padding='4'>
                    <Link href="#">Help</Link>
                    <Link href="#">Status</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Press</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Privacy</Link>
                    <Link href="#">Terms</Link>
                    <Link href="#">Text to speech</Link>
                    <Link href="#">Teams</Link>
                </HStack>
            </GridItem>
        </Grid>
    )
}

export default BlogContentRight;