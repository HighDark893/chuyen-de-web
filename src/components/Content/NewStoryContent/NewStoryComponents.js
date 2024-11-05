import { ChakraProvider, Box, IconButton, Text, Heading, VStack, Textarea } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function NewStoryComponent() {
  return (
    <ChakraProvider>
      <VStack align="start" spacing={1}>
        <IconButton
          aria-label="Add Story"
          icon={<AddIcon />}
          borderRadius="full"
          size="sm"
          variant="outline"
        />

        <Textarea
          placeholder="Title"
          fontSize="2xl"
          fontWeight="bold"
          color="gray.700"
          variant="unstyled"
          resize="none"
          p={0}
        />

        <Textarea
          placeholder="Tell your story..."
          fontSize="md"
          color="gray.400"
          variant="unstyled"
          resize="none"
          p={0}
        />
      </VStack>
    </ChakraProvider>
  );
}

export default NewStoryComponent;