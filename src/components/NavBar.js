import React from 'react';
import { Anchor, DropButton, Nav, Box } from "grommet";

const NavBar = () => {

  return (
    <Nav direction="row" background="brand" pad="medium">
      <DropButton
        dropAlign={{ top: 'bottom', right: 'right' }}
        color="light-2"
        dropContent={
          <Box pad="medium">
            <Anchor label="Home" href="/" hoverIndicator />
            <Anchor label="Factions" href="/factions" hoverIndicator />
            <Anchor label="Classes" href="/classes" hoverIndicator />
            <Anchor label="Vehicles" href="/vehicles" hoverIndicator />
          </Box>
        }
      >
        <i class="fas fa-bars"></i>
      </DropButton>
      <Anchor href="/search" color="light-2">
        <i class="fas fa-search"></i>
      </Anchor>
    </Nav>
  )
}

export default NavBar;
