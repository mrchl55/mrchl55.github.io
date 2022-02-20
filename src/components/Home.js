import React from "react";
import Menu from "./Menu";
import MoviesList from "./MoviesList";
import {Container} from "theme-ui";

const Home = () => {
    return (<Container variant="primary">
        <Menu/>
        <MoviesList/>
    </Container>)
}

export {Home as default}