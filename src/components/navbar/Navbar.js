import React, {useState} from 'react';
import {Container, Div} from './NavbarStyles';
import {FaBars, FaCartPlus} from 'react-icons/fa'
import Sidebar from './sidebar/Sidebar';


const Navbar = ({online, setOnline}) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <Container>
            <h3>Naik</h3>
            <Div>
                <FaCartPlus ></FaCartPlus>
                <FaBars onClick={showSidebar}></FaBars>
                {sidebar && <Sidebar active={setSidebar}/>}
            </Div>
        </Container>
    )
}

export default Navbar;