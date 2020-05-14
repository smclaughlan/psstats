import React from 'react';
import { Box } from 'grommet';

const Loading = () => {
  return (
    <Box animation="fadeIn" >
      <img className="loader" width="30" alt="Loading..." src="/images/loading.gif" />
    </Box >
  )
}

export default Loading;
