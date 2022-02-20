import React, {useEffect, useState} from "react";
const Genres = () => {
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=07110192b3fd8b432cc796b4c48dd507`;

            const resp = await fetch(url);
            const body = await resp.json();
            setGenresList(body.genres)
        };
        getGenres();


    }, []);
return (<>
    {genresList.map(genre => <option key={genre.id} id={genre.id} value={genre.id}>{genre.name}</option>)}
</>)
}

export {Genres as default}