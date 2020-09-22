import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

const IGoRawrPage = () => {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/gB4dy9ccmP0"} controls={true} playing volume={0.1} />
      <p className="paragraph">iGoRawr plays infantry on all factions and shares reviews of the items in the game.</p>
    </Box>
  )
}

export default IGoRawrPage;
