import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Main, Button } from 'grommet';
import FactionPage from './FactionPage';
import LeaderboardPage from './LeaderboardPage';

const HomePage = () => {
  let communityMembers = [
    "elusive1",
    "PattyFatHead",
    "CAMIKAZE78",
    "Moukass",
    "lillbabs",
    "DimGiant",
    "FabertheOne",
    "Flashy",
    "ArsheeTV",
    "iGoRawrrrr",
  ];

  return (
    <Main pad="large" margin="small">
      <Box className="basic" animation="fadeIn">
        <h1>PlanetSide Stats</h1>
        <p>PlanetSide 2 is a massively-multiplayer online science fiction game where thousands of players on one server fight to expand their faction's territory.</p>
        <p>This site makes the stats and information from the Planetside 2 API easily accessible and understandable.</p>
        <FactionPage />
        <Box className="factionbasicnooutline" pad="large" margin="small" animation="fadeIn">
          <Box className="basicnooutline" animation="fadeIn">
            <h1>Well-known players</h1>
            <h3>Check out the stat pages of popular community members</h3>
          </Box>
          <Box direction="row" justify="evenly" alignContent="center" wrap={true} animation="fadeIn">
            {communityMembers.map(member => {
              return (
                <NavLink to={`/char/${member}`} key={member}>
                  <Button className="searchRes" href={`/char/${member}`} margin="medium" label={member} size="medium" />
                </NavLink>
              )
            })}
          </Box>
          <LeaderboardPage />
        </Box>
      </Box>
    </Main>
  )
}

export default HomePage;
