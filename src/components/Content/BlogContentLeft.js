import { Grid, GridItem, Box, HStack, Button, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const BlogContentLeft = () => {
    return (
        <Grid 
        templateRows="auto 1fr"
        templateColumns="1fr"
        gap={4}
        width="100%"
    >
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
            <Box padding="4" bg="white" shadow="md">
                <div>
                    <h3>Shuai Li in Programming Domain</h3>
                    <p>Can You Answer This Senior Level JavaScript Promise Interview Question?</p>
                    <p>Most interviewees failed on it.</p>
                    <p>Aug 12 - 2.8K - 29</p>
                </div>
                <hr />
                <div>
                    <h3>Natesh Bhat</h3>
                    <p>Flutter Vs React Native : Performance Benchmarks you can’t miss!</p>
                    <p>Enough Talk ! Numbers are here ! Get detailed memory, CPU, app size and frame rate comparisons between Flutter and React...</p>
                    <p>Aug 13 - 2.6K - 34</p>
                </div>
            </Box>
        </GridItem>
    </Grid>
    )
}

export default BlogContentLeft;