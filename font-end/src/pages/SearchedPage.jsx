import React from "react";
import {SimpleGrid,} from "@chakra-ui/react";
import NavBar from "../components/Header/Navbar";
import SearchStoriesComponent from "../components/Content/SearchStoriesComponent";
import {useLocation} from "react-router-dom";

const SearchPage = () => {
    const { state } = useLocation()
    return (
        <SimpleGrid>
            <NavBar/>
            <SearchStoriesComponent searchStories = {state}/>
        </SimpleGrid>
    );
};

export default SearchPage;