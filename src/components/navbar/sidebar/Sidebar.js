import {useContext} from 'react'
import { Container, Content, Button} from './sidebarStyle'
import { Link } from 'react-router-dom';

import SidebarItem from './OptionSidebar/SidebarOption'
import AuthContext from '../../../contexts/AuthContext';

const Sidebar = ({ active }) => {

  const { token } = useContext(AuthContext);
  const closeSidebar = () => {
    active(false)
  }

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
          <SidebarItem path={"/1"} Text="Type 1" closeSidebar={closeSidebar}/>
          <SidebarItem path={"/2"} Text="Type 2" closeSidebar={closeSidebar}/>
          <SidebarItem path={"/3"} Text="Type 3" closeSidebar={closeSidebar}/>
          <SidebarItem path={"/4"} Text="Type 4" closeSidebar={closeSidebar}/>
        </Content>
      </Container>
      </>
)
}

export default Sidebar