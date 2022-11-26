import React from 'react'
import{Link} from 'react-router-dom';
import { Container } from './SidebarOptionStyles'


const SidebarItem = ({ path, Text, closeSidebar }) => {
  return (
    <Link to={path}>
      <Container onClick={closeSidebar}>
        <h3>{Text}</h3>
      </Container>
    </Link>
  )
}

export default SidebarItem

