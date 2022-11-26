import React from 'react'
import { Container, Content, Button} from './sidebarStyle'
import { Link } from 'react-router-dom';

import SidebarItem from './OptionSidebar/SidebarOption'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <>
      <Container sidebar={active}>
        <Link to={'/sign-in'}>
          <Button onClick={closeSidebar}>Entrar</Button>
        </Link>
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