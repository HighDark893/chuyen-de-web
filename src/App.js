import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./app/RootLayout";

function App() {
    return (
        <ChakraProvider>
            <RootLayout/>
        </ChakraProvider>
      )
}

export default App;