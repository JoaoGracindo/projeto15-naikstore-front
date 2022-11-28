import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Container, Div, Cart} from './NavbarStyles';
import {FaBars, FaCartPlus} from 'react-icons/fa'
import Sidebar from './sidebar/Sidebar';
import AuthContext from '../../contexts/AuthContext';
import axios from 'axios';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const { token } = useContext(AuthContext);
    const [cartToggle, setCartToggle] = useState(false);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const promise = axios.get(
            "http://localhost:5000/carrinho",
            {headers: { authorization: `Bearer ${token}`}}
        )
        
        promise.then((response) => {
            setCart([...response.data])
            console.log([...response.data])
        })
    }, [cartToggle])

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    function removeItem(obj){
        console.log(obj)
        axios.delete("http://localhost:5000/carrinho",
             {headers: { authorization: `Bearer ${token}`}},
            obj)
        .then(() => {
            alert("item removido")
        })
    }

    return (
        <>
            <Container>
                <h3>Naik</h3>
                <Div>
                {token? 
                    <FaCartPlus onClick={() => setCartToggle(!cartToggle)}></FaCartPlus>
                    : 
                    <Link to={"/"} onClick={() => alert("Faça login para acessar o carrinho")}>
                        <FaCartPlus ></FaCartPlus>
                    </Link>
                    }
                    <FaBars onClick={showSidebar}></FaBars>
                    {sidebar && <Sidebar active={setSidebar}/>}
                </Div>
            </Container>
            {
                cartToggle ? 
                 <Cart>
                    {cart.map((product) => <img onClick={() => removeItem(product)} src={product.imgUrl}/>)}
                    <Link to={"/checkout"}>
                        <div>Checkout</div>
                    </Link>
                    
                </Cart> : ""
            }

        </>
    )
}

export default Navbar;

