import React from "react";
import { NavLink } from "react-router-dom";
import {
  Text,
  Button,
  DropButton,
  Nav,
  Box,
} from "grommet";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function NavBar() {
  // let { isAuthenticated } = useAuth0();

  return (
    <Nav
      direction="row"
      background="brand"
      pad="medium"
      style={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        zIndex: "10",
      }}
    >
      <DropButton
        dropAlign={{ top: "bottom", right: "right" }}
        color="light-2"
        dropContent={
          <Box className="dropDown" pad="medium">
            <NavLink to={"/"}>
              <Text href="/" color="white" hoverIndicator>
                Home
              </Text>
            </NavLink>
            <NavLink to={"/classes"}>
              <Text href="/" color="white" hoverIndicator>
                Classes
              </Text>
            </NavLink>
          </Box>
        }
      >
        <i className="fas fa-bars"></i>
      </DropButton>
      <Text
        style={{ color: "#00FF00", alignSelf: "center" }}
      >
        <NavLink to={"/search"}>
          <i className="fas fa-search"></i>
        </NavLink>
      </Text>
      {/* { isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
      <NavLink to={"/"}>
        <Button color="white" style={{ fontSize: "16px" }}>
          PlanetSide Stats
        </Button>
      </NavLink>
    </Nav>
  );
}

export default NavBar;
