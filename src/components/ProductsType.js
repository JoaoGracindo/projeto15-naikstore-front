import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from "axios"
import Navbar from './navbar/Navbar';

export default function ProductsType() {
    const [listProducts, setListProducts] = useState([])
    const {category} = useParams()
    console.log(listProducts)

    function sucessGet(res){
        setListProducts(res.data)
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/produtos/${category}`)
            .then((res) => sucessGet(res))
            .catch((error) => (console.log(error)))
    },[category])

  return (
    <>
    <Navbar/>
      <Container>
        <div className='productsScreen'>
          {listProducts.map((obj) => (
            <LinkStyled to={`/${obj._id}`}>
              <div className='products'>
                <img src={obj.imgUrl} alt={obj.name}/>
                <p className="name">{obj.name}</p>
                <p className="price"> R$ {obj.price.replace(".",",")}</p>
              </div>
            </LinkStyled>
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
        margin-bottom: 40px;
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