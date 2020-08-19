import React from 'react';
import { Anchor, DropButton, Nav, Box } from "grommet";
import { userAuth0, useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavBar = () => {
  let { isAuthenticated } = useAuth0();

  return (
    <Nav direction="row" background="brand" pad="medium">
      <DropButton
        dropAlign={{ top: 'bottom', right: 'right' }}
        color="light-2"
        dropContent={
          <Box className="dropDown" pad="medium">
            <Anchor label="Home" href="/" hoverIndicator color="white" />
            <Anchor label="Factions" href="/factions" hoverIndicator color="white" />
            <Anchor label="Classes" href="/classes" hoverIndicator color="white" />
            <Anchor label="Vehicles" href="/vehicles" hoverIndicator color="white" />
            <Anchor label="Leaderboard" href="/leaderboard" hoverIndicator color="white" />
          </Box>
        }
      >
        <i className="fas fa-bars"></i>
      </DropButton>
      <Anchor href="/search" color="light-2" margin="medium">
        <i className="fas fa-search"></i>
      </Anchor>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <h2>PlanetSide Stats</h2>
    </Nav>
  )
}

export default NavBar;
