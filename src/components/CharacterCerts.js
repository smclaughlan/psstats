import React from 'react';
import { Box } from 'grommet';
import Loading from './Loading';

const CharacterCerts = ({ certs }) => {

  return (certs ?
    <Box>
      <h3>Certs</h3>
      <p>Total earned certs:</p>
      <p>{certs.earned_points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>Spent certs:</p>
      <p>{certs.spent_points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>Available:</p>
      <p>{certs.available_points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </Box>
    :
    <Loading />)
}

export default CharacterCerts;
