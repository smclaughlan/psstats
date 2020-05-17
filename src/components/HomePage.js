import React from 'react';
import { Box, Main, Button } from 'grommet';

const HomePage = () => {

  return (
    <Main pad="large" margin="small">
      <Box className="basic">
        <h1>PlanetSide Stats</h1>
        <p>PlanetSide 2 is a massively-multiplayer online science fiction game where thousands of players on one server fight to expand their faction's territory.</p>
        <p>This site makes the stats and information from the Planetside 2 API easily accessible and understandable.</p>
        <h2>Pages</h2>
        <p>The <Button href="/leaderboard" label="Leaderboard page" /> displays highest ranking players according to score, play time, and kills.</p>
        <p>The <Button href="/search" label="Search page" /> allows searches by character name or outfit name.</p>
        <p>The <Button href="/factions" label="Faction page" /> displays information on the different factions in the game.</p>
        <p>The <Button href="/classes" label="Classes page" /> displays information on the playable classes.</p>
        <p>The <Button href="/vehicles" label="Vehicles page" /> displays information on the vehicles.</p>
      </Box>
    </Main>
  )
}

export default HomePage;
