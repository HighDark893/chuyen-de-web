import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./app/RootLayout";
import NewStoryPage from "./pages/NewStoryPage";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import BlogDetailPage from "./pages/BlogDetailPage";
import SearchedPage from "./pages/SearchedPage";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element= {<RootLayout/>}/>
                    <Route path="/newStory" element= {<NewStoryPage />}/>
                    <Route path="/story/:id" element={<BlogDetailPage/>}/>
                    <Route path="/searchedStories" element={<SearchedPage/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
      )
}

export default App;