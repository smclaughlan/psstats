import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

const CAMIKAZE78Page = () => {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/BmcabmGF9_s"} controls={true} playing volume={0.1} />
      <p className="paragraph">CAMIKAZE78 live streams on twitch and uploads youtube videos commenting on every aspect of Planetside 2.</p>
    </Box>
  )
}

export default CAMIKAZE78Page;
