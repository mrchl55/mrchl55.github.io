import React, {useEffect} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {
    movies as moviesAtom,
    searchQueryState as search,
    moviesFiltersState as moviesFilter,
    genresState, yearsState, sortByState,
} from "../atoms";
import Movie from "./Movie";
import {Themed} from "theme-ui";

const baseURL = 'https://api.themoviedb.org/3/';
const apiKeyURL = 'api_key=07110192b3fd8b432cc796b4c48dd507';
const MoviesList = () => {
    const [movies, setMovies] = useRecoilState(moviesAtom);
    const searchQuery = useRecoilValue(search);
    const newMovies = useRecoilValue(moviesFilter);
    const activeGenre = useRecoilValue(genresState)
    const activeYear = useRecoilValue(yearsState)
    const activeSortBy = useRecoilValue(sortByState)
    const [activeFilter, setActiveFilter] = useRecoilState(moviesFilter);

    useEffect(() => {

    }, [newMovies])
    useEffect(() => {
        const getMovies = async () => {
            var url;
            if (searchQuery?.length) {
                url = `${baseURL}search/movie?${apiKeyURL}&query=${searchQuery}`;

            } else {
                url = new URL(`${baseURL}discover/movie?${apiKeyURL}`);
                activeGenre?.length && url.searchParams.append('with_genres', activeGenre)
                activeYear?.length && url.searchParams.append('primary_release_year', activeYear)
                activeSortBy?.length && url.searchParams.append('sort_by', activeSortBy)
            }
            const resp = await fetch(url);
            const body = await resp.json();
            setMovies(body.results)
        };
        setActiveFilter()
        getMovies();

    }, [searchQuery, activeGenre, activeYear, activeSortBy]);


    return movies?.length ? (
        <>
            <Themed.ol>
                {movies.map((movie, idx) => (
                    <Movie key={movie.id} {...movie} index={idx + 1}/>
                ))}
            </Themed.ol>
        </>
    ) : (<span>No movies found</span>);
}

export {MoviesList as default}