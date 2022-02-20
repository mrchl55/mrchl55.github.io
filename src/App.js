/** @jsxImportSource theme-ui */

import './App.css';
import React from "react";
import AppRouter from "./routers/AppRouter";
import {Container} from "theme-ui";
function App() {
    return (
        <Container variant="wrapper" className="App">
            <AppRouter/>
        </Container>
    );
}

export default App;
