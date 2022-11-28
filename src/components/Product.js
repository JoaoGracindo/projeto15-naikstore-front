import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"

export default function Product() {
    const { produtoID } = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get(`https://naistore-back.onrender.com/produtos?id=${produtoID}`)
            .then((res) => (console.log(res.data), setProduct(res.data[0])))
            .catch((error) => (console.log(error)))
    }, [])

   
    console.log(produtoID)

   

    return (
        <Container>
            <div className="containerImg">
                <img src={product.imgUrl} />
            </div>
            <div className="containerContent">
                <p className="name">{product.name}</p>
                <p className="price">{product.price?.replace(".", ",")}</p>
                <p className="category">{product.category}</p>

                <button>Comprar</button>

            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: antiquewhite;

    .containerImg{
        width: 45%;
        margin: 0 50px;
        img{
            width: 100%
        }
    }

    .containerContent{
        display: flex;
        flex-direction: column;
        background-color: azure;
        width: 500px;
        align-items: center;
        justify-content: center;

        .name, .price, .category{
            font-size: 30px;
            margin: 20px 0;
        }

/* CSS */
button {
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 50%;
  will-change: transform;
}

}
`