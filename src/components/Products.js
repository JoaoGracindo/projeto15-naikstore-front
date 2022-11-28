import styled from 'styled-components';
import { Link, useParams  } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";

import Navbar from './navbar/Navbar';
import AuthContext from '../contexts/AuthContext';

export default function Products() {
    const [listProducts, setListProducts] = useState([])
    const {category} = useParams()
    const {token} = useContext(AuthContext)
    console.log(token)

    let url;
    if(category){
      url = `https://naistore-back.onrender.com/produtos/${category}`;
    } else{
      url="https://naistore-back.onrender.com/produtos";
    }
    function sucessGet(res){
        setListProducts(res.data)
    }

    useEffect(() => {
        axios.get(url)
            .then((res) => sucessGet(res))
            .catch((error) => (console.log(error)))
    },[url])


    function addToCart(productToAdd){

      axios.post("https://naistore-back.onrender.com/carrinho",
             productToAdd,
             {headers: { authorization: `Bearer ${token}`}}
             )
           .then( () => alert("produto adicionado!"))
           .catch( (err) =>  console.log(err) )
              
           }
    

  return (
    <>
      <Navbar/>
      <Container>
        <div className='productsScreen'>
          {listProducts.map((obj) => (
            <div>
              <LinkStyled to={`/${obj._id}`}>
                <div className='products'>
                  <img src={obj.imgUrl} alt={obj.name}/>
                  <p className="name">{obj.name}</p>
                  <p className="price"> R$ {obj.price.replace(".",",")}</p>
                </div>
                
              </LinkStyled>
              <AddToCart onClick={() => addToCart(obj)}>Adicionar ao carrinho</AddToCart>
            </div>
          )

          )}

        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding-top: 140px;
    
    .productsScreen{
      width: 100%;
      background-color: white;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      

      .products{
        width: 350px;
        cursor: pointer;
        background-color: lightgray;
        font-size: 18px;
        border: 1px solid black;
        padding: 10px;

        img{
          width: 100%;
          background-image: grey;
        }

        .name{
          flex-wrap: wrap;
          margin: 10px 0;
        }

        .price{
          margin: 0 0 10px 0;
          font-weight: bold;
        }
      }
    }

`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000000;
`

const AddToCart = styled.div`
    width: 350px;
    height: 50px;
    color: black;
    background-color: white;
    border: 1px solid black;
    margin-top: 0;
    margin-bottom: 40px;
`