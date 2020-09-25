import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

const FaberOnePage = () => {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/kIO2os0sPIc"} controls={true} playing volume={0.1} />
      <p className="paragraph">FaberOne comments on Planetside 2 news and events.</p>
    </Box>
  )
}

export default FaberOnePage;
