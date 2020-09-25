import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

const DimGiantPage = () => {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://www.youtube.com/watch?v=FHRLeixweFY"} controls={true} playing volume={0.1} />
      <p className="paragraph">DimGiant creates humorous videos about Planetside 2.</p>
    </Box>
  )
}

export default DimGiantPage;
