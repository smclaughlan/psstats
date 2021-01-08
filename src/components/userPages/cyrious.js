import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

function CyriousPage() {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/YPh5H_Oj94A"} controls={true} playing volume={0.1} />
      <p className="paragraph">Cyrious posts commentary, reviews of different aspects of the game, and live streams gameplay.</p>
    </Box>
  )
}

export default CyriousPage;
