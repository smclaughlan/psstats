import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

function Elusive1Page() {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://www.youtube.com/watch?v=Dg9N-lka1-8"} controls={true} playing volume={0.1} />
      <p className="paragraph">Elusive1 primarily plays the infiltrator class in close quarters. He uploads gameplay to youtube.</p>
    </Box>
  )
}

export default Elusive1Page;
