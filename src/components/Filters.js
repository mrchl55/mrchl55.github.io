/** @jsxImportSource theme-ui */

import React from "react";
import Dropdown from "./Dropdown";
import Genres from "./Genres";
import Years from "./Years";
import {useRecoilState} from "recoil";
import {
    genresState,
    yearsState,

} from "../atoms";
import {Flex} from "theme-ui";

const Filters = () => {
    const [activeGenre, setActiveGenre] = useRecoilState(genresState);
    const [activeYear, setActiveYear] = useRecoilState(yearsState);

    const onGenreChange = ({target: {value}}) => {
        setActiveGenre(value)
    }
    const onYearChange = ({target: {value}}) => {
        setActiveYear(value)
    }
    return (
        <div className='filters-menu' sx={{
            width: ['100%'],
            flexWrap: ['wrap', 'nowrap', 'nowrap'],

        }}>

            <Flex sx={{

                flexWrap: ['wrap', 'nowrap', 'nowrap'],

            }}>
                <Dropdown label='Genre' onChange={onGenreChange} activeGenre={activeGenre} default='default'>
                    <option value="default" disabled hidden>Select Genre</option>
                    <Genres/>
                </Dropdown>
                <Dropdown label='Year' onChange={onYearChange} activeGenre={activeYear} default='default'>
                    <option value="default" disabled hidden>Select year</option>
                    <Years/>
                </Dropdown>
            </Flex>
        </div>

    )
}

export {Filters as default}