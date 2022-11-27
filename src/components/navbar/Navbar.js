import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {Container, Div} from './NavbarStyles';
import {FaBars, FaCartPlus} from 'react-icons/fa'
import Sidebar from './sidebar/Sidebar';
import AuthContext from '../../contexts/AuthContext';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const { token } = useContext(AuthContext);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <Container>
            <h3>Naik</h3>
            <Div>
            {token? 
                <Link to={"/cart"}>
                    <FaCartPlus ></FaCartPlus>
                </Link>: 
                <Link to={"/"} onClick={() =>alert("Faça login para acessar o carrinho")}>
                    <FaCartPlus ></FaCartPlus>
                </Link>
                }
                <FaBars onClick={showSidebar}></FaBars>
                {sidebar && <Sidebar active={setSidebar}/>}
            </Div>
        </Container>
    )
}

export default Navbar;