/** @jsxImportSource theme-ui */

import React, {useEffect, useState} from "react";
import {Button, Flex, Themed, Image} from 'theme-ui'
import starIcon from '../assets/images/starIcon.svg'
import {favoritesState, watchListState} from "../atoms";
import {useRecoilState} from "recoil";

const Movie = (props) => {
    const [favoritesList, setFavoritesList] = useRecoilState(favoritesState);
    const [watchList, setWatchList] = useRecoilState(watchListState);

    useEffect(() => {

    }, [favoritesList])
    const [areDetailsVisible, setDetailsVisibility] = useState(false);
    const onShowDetailsClick = (e) => {
        e.preventDefault();
        areDetailsVisible ? setDetailsVisibility(false) : setDetailsVisibility(true)
    }
    const onAddToFavorites = (id) => {
        setFavoritesList([
                ...favoritesList,
                id
            ]
        )
    }
    const onAddToWatchList = (id) => {
        setWatchList([
                ...watchList,
                id
            ]
        )
    }
    const release_date = new Date(props.release_date);
    const year = release_date.getFullYear();
    return (<Themed.li as="li" key={props.id} id={props.id} className='movie-single'>
        <div> {props.poster_path &&
            <Image variant='medium' src={`https://image.tmdb.org/t/p/w200${props.poster_path}`}/>}</div>
        <div><span sx={{
            fontWeight: 'bold', lineHeight: ['32px', 0]


        }}>{props.index}. {props.title}{!isNaN(year) && `(${year})`}</span></div>
        <div>{props.vote_average && <Flex sx={{
            justifyContent: ['center'],


        }}><span>{props.vote_average}</span><Image variant='small' src={starIcon}/></Flex>}</div>
     <div className='details'>   {props.overview?.length && <Button
            onClick={onShowDetailsClick}>{!areDetailsVisible ? 'Show details' : 'Hide details'}</Button>}
            <div>{areDetailsVisible && <div className='details-content' sx={{
                p: 10,
            }}>
                {props.overview}
            </div>}</div>
        </div>
        <div className='save-actions'>
            {!favoritesList.includes(props.id) &&
                <Button onClick={() => onAddToFavorites(props.id)}>Add to favorites</Button>}
            {!watchList.includes(props.id) && <Button onClick={() => onAddToWatchList(props.id)}>Watch later</Button>}
        </div>


    </Themed.li>)
}

export {Movie as default}