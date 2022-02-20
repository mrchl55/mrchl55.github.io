import React, {useEffect, useState} from "react";
import {favoritesState} from "../atoms";
import {useRecoilState} from "recoil";
import Movie from "./Movie";
import {Container, Heading} from "theme-ui";
const baseURL = 'https://api.themoviedb.org/3/';
const apiKeyURL = 'api_key=07110192b3fd8b432cc796b4c48dd507';
const Favorites = () => {
    const [favoritesList, setFavoritesList] = useRecoilState(favoritesState)
    const [mappedItems, setMappedItems] = useState([])

    useEffect(() => {
        if (favoritesList) {
            Promise.all(favoritesList.map(favID =>

                fetch(`${baseURL}/movie/${favID}?${apiKeyURL}`)
                    .then(response => response.json())
            ))
                .then(data => {
                    setMappedItems(data)
                })
        }

    }, [favoritesList]);


    return (<Container variant="primary">
        <Heading variant='secondary'>Favorites</Heading>
        {mappedItems.length > 0 && mappedItems.map((movie, idx) => <Movie key={movie.id} {...movie} index={idx + 1}/>)}
    </Container>)
}

export {Favorites as default}