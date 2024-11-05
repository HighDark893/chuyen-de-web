import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./app/RootLayout";
import NewStoryPage from "./pages/NewStoryPage";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/newStory" element= {<NewStoryPage />}/>
                </Routes>
                <Routes>
                    <Route path="/" element= {<RootLayout/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
      )
}

export default App;