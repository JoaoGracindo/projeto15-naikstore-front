import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width:100%;
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0 0 1.25rem 0.188rem;
    position: fixed;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    top:0;
    left:0;
    

    >h3{
        color: black;
        font-size: 1.4rem;
        font-weight: bold;
    }

`

export const Div = styled.div`
        display: flex;
        color: black;
        gap: 20px;

    svg{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color:black;
    }
`
