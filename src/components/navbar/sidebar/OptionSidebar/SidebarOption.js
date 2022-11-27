import React from 'react';
import { Container } from './SidebarOptionStyles'
import { Link } from 'react-router-dom';


const SidebarItem = ({path, text, closeSidebar }) => {
  return (
    <Link to={path}>
      <Container onClick={closeSidebar}>
        <h3>{text}</h3>
      </Container>
    </Link>
  )
}

export default SidebarItem

