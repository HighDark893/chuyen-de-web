import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./app/RootLayout";
import NewStoryPage from "./pages/NewStoryPage";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element= {<RootLayout/>}/>
                    <Route path="/newStory" element= {<NewStoryPage />}/>
                    <Route path="/story/:id" element={<BlogDetailPage/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
      )
}

export default App;