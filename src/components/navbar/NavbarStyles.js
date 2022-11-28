import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width:100%;
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0 0 12px 1px;
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

export const Cart = styled.div`
    position: fixed;
    top:80px;
    right: 0;
    width: 300px;
    height: 600px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    margin-bottom: 15px;
    overflow-y: scroll;
    



    img{
        width: 150px;
        height: 150px;
        margin-top: 20px;
        margin-bottom: 10px;
        border-radius: 10px
    }

    div{
        width: 250px;
        height: 75px;
        display:flex;
        justify-contents: center;
        align-items: center;
        font-size: 25px;
        
    }
    
`
