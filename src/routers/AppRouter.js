import React from "react";
import Header from "../components/Header";
import Favorites from "../components/Favorites";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WatchList from "../components/WatchList";
import Details from "../components/Details";
import Home from "../components/Home";
const AppRouter = () => {
    return (
        <BrowserRouter>
<div>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/to-watch" element={<WatchList />} />
        <Route path="/details" element={<Details />} />
    </Routes>
</div>
        </BrowserRouter>
    )
}

export {AppRouter as default}