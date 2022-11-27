import React from 'react';
import styled from 'styled-components';

import Navbar from "./navbar/Navbar"
import Products from './Products';


export const Home = () => {
    
    return (
        <Container>
            <Navbar/>
            <Products />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    background-color: white;
`