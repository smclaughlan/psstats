import React from 'react';
import { NavLink } from 'react-router-dom';
import { Anchor, Text, DropButton, Nav, Box } from "grommet";
import { userAuth0, useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavBar = () => {
  let { isAuthenticated } = useAuth0();
  // let { user } = useAuth0();
  // let name;
  // if (user) name = user.name;

  return (
    <Nav direction="row" background="brand" pad="medium">
      <DropButton
        dropAlign={{ top: 'bottom', right: 'right' }}
        color="light-2"
        dropContent={
          <Box className="dropDown" pad="medium">
            <NavLink to={"/"}>
              <Text href="/" color="white" hoverIndicator>Home</Text>
            </NavLink>
            <NavLink to={"/factions"}>
              <Text href="/" color="white" hoverIndicator>Factions</Text>
            </NavLink>
            <NavLink to={"/classes"}>
              <Text href="/" color="white" hoverIndicator>Classes</Text>
            </NavLink>
            <NavLink to={"/vehicles"}>
              <Text href="/" color="white" hoverIndicator>Vehicles</Text>
            </NavLink>
            <NavLink to={"/leaderboard"}>
              <Text href="/" color="white" hoverIndicator>Leaderboard</Text>
            </NavLink>
          </Box>
        }
      >
        <i className="fas fa-bars"></i>
      </DropButton>
      <NavLink to={"/search"}>
        <Text href="/search" color="light-2" margin="medium">
          <i className="fas fa-search"></i>
        </Text>
      </NavLink>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <h2>PlanetSide Stats</h2>
    </Nav>
  )
}

export default NavBar;
