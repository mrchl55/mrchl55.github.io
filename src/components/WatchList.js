import React, {useEffect, useState} from "react";
import {watchListState} from "../atoms";
import {useRecoilState} from "recoil";
import Movie from "./Movie";
import {Heading, Container} from "theme-ui";
const baseURL = 'https://api.themoviedb.org/3/';
const apiKeyURL = 'api_key=07110192b3fd8b432cc796b4c48dd507';
const WatchList = () => {
    const [watchList, setWatchList] = useRecoilState(watchListState)
    const [mappedItems, setMappedItems] = useState([])
    useEffect(() => {
        if (watchList) {
            Promise.all(watchList.map(movieID =>

                fetch(`${baseURL}/movie/${movieID}?${apiKeyURL}`)
                    .then(response => response.json())
            ))
                .then(data => {
                    setMappedItems(data)
                })
        }
        return {}
    }, [watchList]);


    return (<Container variant="primary">
        <Heading variant='secondary'>Watchlist</Heading>
        {mappedItems.length > 0 && mappedItems.map((movie, idx) => <Movie key={movie.id} {...movie} index={idx + 1}/>)}
    </Container>)
}

export {WatchList as default}