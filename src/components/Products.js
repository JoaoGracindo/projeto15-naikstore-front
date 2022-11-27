import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"

export default function Products() {
    const [listProducts, setListProducts] = useState([])
    console.log(listProducts)

    function sucessGet(res){
        setListProducts(res.data)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/produtos")
            .then((res) => sucessGet(res))
            .catch((error) => (console.log(error)))
    },[])

  return (
    <Container>
      <div className='productsScreen'>
        {listProducts.map((obj) => (
          <LinkStyled to={`/${obj._id}`}>
            <div className='products'>
              <img src={obj.imgUrl} />
              <p className="name">{obj.name}</p>
              <p className="price"> R$ {obj.price.replace(".",",")}</p>
            </div>
          </LinkStyled>
        )

        )}

      </div>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: pink;
    padding-top: 20px;
    
    .productsScreen{
      width: 100%;
      background-color: aqua;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      

      .products{
        width: 350px;
        cursor: pointer;
        background-color: grey;
        font-size: 18px;
        margin-bottom: 40px;

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