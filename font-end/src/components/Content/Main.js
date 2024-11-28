import { Grid, GridItem, Spacer } from "@chakra-ui/react";
import BlogContentLeft from "./BlogContentLeft";
import BlogContentRight from "./BlogContentRight";

const Main = () => {
    return (
        <Grid 
            templateAreas={`"left right"`}
            gridTemplateColumns={'60% 1fr'}
            justifyContent="space-evenly"
            gap={20}
        >
            <GridItem area={'left'} marginLeft='5%'>
                <BlogContentLeft/>
            </GridItem>

            <GridItem area={'right'}>
                <BlogContentRight/>
            </GridItem>
        </Grid>
    )
}

export default Main;