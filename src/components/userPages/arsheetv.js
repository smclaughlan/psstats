import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'grommet';

function ArsheeTVPage() {

  return (
    <Box animation="fadeIn" className="basic" align="center">
      <ReactPlayer url={"https://youtu.be/eUfWkMRypSA"} controls={true} playing volume={0.1} />
      <p className="paragraph">ArsheeTV primarily provides commentary on live events in Planetside 2.</p>
    </Box>
  )
}

export default ArsheeTVPage;
