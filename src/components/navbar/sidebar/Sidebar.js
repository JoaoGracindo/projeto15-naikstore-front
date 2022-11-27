import {useContext} from 'react'
import { Container, Content, Button} from './sidebarStyle'
import { Link, useParams } from 'react-router-dom';

import SidebarItem from './OptionSidebar/SidebarOption'
import AuthContext from '../../../contexts/AuthContext';

const Sidebar = ({ active }) => {

  const { token } = useContext(AuthContext);
  const {category}= useParams();
  const closeSidebar = () => {
    active(false)
  }

  const Path = ()=>{
    if(category === "Casual"){
      return "Esporte"
    } else{
      return "Casual"
    }
  }

  let newPath = Path();

  return (
    <>
      <Container sidebar={active}>
        {token? <Link to={'/log-out'}>
          <Button onClick={closeSidebar}>Sair</Button>
        </Link>
        :
        <Link to={'/sign-in'}>
          <Button onClick={closeSidebar}>Entrar</Button>
        </Link>}
        <Content>
          {category?
            <><SidebarItem path={"/"} text="Home" closeSidebar={closeSidebar} /><SidebarItem path={`/produtos/${newPath}`} text={newPath} closeSidebar={closeSidebar} /></>
          :
            <><SidebarItem path={"/produtos/Casual"} text="Casual" closeSidebar={closeSidebar} /><SidebarItem path={"/produtos/Esporte"} text="Esporte" closeSidebar={closeSidebar} /></>}
        </Content>
      </Container>
      </>
)
}

export default Sidebar