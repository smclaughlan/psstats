import React from 'react';
import { Box, Main, Button } from 'grommet';
import FactionPage from './FactionPage';

const HomePage = () => {

  return (
    <Main pad="large" margin="small">
      <Box className="basic">
        <h1>PlanetSide Stats</h1>
        <p>PlanetSide 2 is a massively-multiplayer online science fiction game where thousands of players on one server fight to expand their faction's territory.</p>
        <p>This site makes the stats and information from the Planetside 2 API easily accessible and understandable.</p>
        <FactionPage />
      </Box>
      <Box pad="large" margine="small">
        <h1>Well-known players:</h1>
        <p>Check out the stat pages of popular community members.</p>

      </Box>
    </Main>
  )
}

export default HomePage;
