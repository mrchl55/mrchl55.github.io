import React from "react";

const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
const years = range(1970, 2022)
const Years = () => {

    return (<>
        {years.map(year => <option key={year} id={year} value={year}>{year}</option>)}
    </>)
}

export {Years as default}