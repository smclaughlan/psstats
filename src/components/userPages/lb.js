import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

function LBPage() {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/suPGIoVOqD4"} controls={true} playing volume={0.1} />
      <p className="paragraph">Lillbabs creates music videos with footage from the game.</p>
    </Box>
  )
}

export default LBPage;
