/** @jsxImportSource theme-ui */
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Heading, Flex, NavLink as Link, Container, MenuButton} from "theme-ui";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    return (<header>
        <Container variant='header'>
            <Heading variant='primary' as='h1'>Movies</Heading>
            <MenuButton aria-label="Toggle Menu" onClick={() => setIsMenuVisible(isMenuVisible ? false : true)}/>
            <Flex as='nav' sx={{
                display: [isMenuVisible ? 'flex' : 'none', 'flex'],
                maxWidth: ['100%', '75%', '50%'],
                m: '25px auto',
                justifyContent: 'space-around',
                flexDirection: ['column', 'row']
            }}>
                <Link as={NavLink} to={'/'}>Home</Link>
                <Link as={NavLink} to={'/favorites'}>Favorites</Link>
                <Link as={NavLink} to={'/to-watch'}>Watchlist</Link>
                <Link as={NavLink} to={'/details'}>Details</Link>

            </Flex>
        </Container>
    </header>)

}

export {Header as default}