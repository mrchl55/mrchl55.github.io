/** @jsxImportSource theme-ui */

import React, {useEffect} from "react";
import {useRecoilState} from "recoil";
import {searchQueryState} from "../atoms";
import {Input, Label, Container} from "theme-ui";

const SearchInput = () => {

    const [searchString, setSearchString] = useRecoilState(searchQueryState)
    useEffect(() => {
    }, [searchString])
    const onSearchStringChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value)
    }
    return (<Container className='search-container'>
        <Label htmlFor="searchInput">Search movies:</Label>
        <Input id="searchInput" onChange={onSearchStringChange}/>
    </Container>)
}

export {SearchInput as default}