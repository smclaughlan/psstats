import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

const MoukassPage = () => {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/G4wwappsrqY"} controls={true} playing volume={0.1} />
      <p className="paragraph">Moukass primarily creates montage videos and uploads them to youtube.</p>
    </Box>
  )
}

export default MoukassPage;
