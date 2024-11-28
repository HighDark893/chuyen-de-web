import { Grid, GridItem, Container } from "@chakra-ui/react";
import NavBar from "../components/Header/Navbar";
import NewStoryComponent from "../components/Content/NewStoryComponents";

const NewStoryPage = () => {
    return (
        <Grid templateAreas={
            `"header" 
            "main"`
            }
            gap='5'
        >
            <GridItem area={'header'}>
                <NavBar/>
            </GridItem>
            
            <GridItem area={'main'}>
                <Container>
                    <NewStoryComponent/>
                </Container>
            </GridItem>
        </Grid>
    )
}

export default NewStoryPage;