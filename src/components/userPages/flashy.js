import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

function FlashyPage() {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://www.youtube.com/watch?v=mLRUxHzQMmI"} controls={true} playing volume={0.1} />
      <p className="paragraph">Flashy creates cinematic videos with footage from the game.</p>
    </Box>
  )
}

export default FlashyPage;
