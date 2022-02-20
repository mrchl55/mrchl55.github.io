/** @jsxImportSource theme-ui */
import React from "react";
import Filters from "./Filters";
import Sorters from "./Sorters";
import {Flex, Container} from "theme-ui";
import SearchInput from "./SearchInput";

const Menu = () => {
    return (
        <Container>
            <Flex sx={{
                justifyContent: ['center', 'space-between'],
                alignItems: ['stretch'],
                flexDirection: ['column', 'row'],

            }}>
                <SearchInput/>

                <Flex sx={{
                    alignItems: ['stretch'],
                    width: ['100%', '100%', '50%']
                }}>
                    <Filters/>
                    <Sorters/>
                </Flex>


            </Flex>
        </Container>
    )
}

export {Menu as default}