import React from "react";
import Dropdown from "./Dropdown";
import {useRecoilState} from "recoil";
import {

    sortByState

} from "../atoms";

const sortByOptions = [
    {
        title: 'Popularity',
        value: 'popularity',
    },
    {
        title: 'Release date',
        value: 'release_date.desc',
    },
    {
        title: 'Ratings',
        value: 'vote_average.desc',
    },
]
const Sorters = () => {

    const [activeSortBy, setActiveSortBy] = useRecoilState(sortByState);

    const onSortByChange = ({target: {value}}) => {
        setActiveSortBy(value)
    }

    return (
        <>
            <Dropdown label='Sort By' onChange={onSortByChange} activeSortBy={activeSortBy}>
                {sortByOptions.map(sortOpt => <option key={sortOpt.value} id={sortOpt.value}
                                                      value={sortOpt.value}>{sortOpt.title}</option>)}
            </Dropdown>
        </>

    )
}

export {Sorters as default}