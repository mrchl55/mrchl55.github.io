/** @jsxImportSource theme-ui */
import React from "react";
import {Label, Select} from 'theme-ui'

const Dropdown = (props) => {
    return (<div className='dropdown-container' sx={{
        width: ['100%'],
        p: ['5px']
    }}>
        <Label>{props.label}</Label>
        <Select onChange={props.onChange} defaultValue={props.default}>
            {props.children}
        </Select>
    </div>)
}

export {Dropdown as default}