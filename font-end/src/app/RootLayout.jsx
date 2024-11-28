import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/Header/Navbar";
import Main from "../components/Content/Main";

const RootLayout = () => {
    return (
        <Grid templateAreas={
            `"header" 
            "main"`
            }
            gap='2'
        >
            <GridItem area={'header'}>
                <NavBar/>
            </GridItem>
            <GridItem area={'main'}>
                <Main/>
            </GridItem>
        </Grid>
    )
}

export default RootLayout;