import React from 'react';
import { Box } from 'grommet';
import Loading from './Loading';
import { timeFormat } from './util';

const CharacterTime = ({ times }) => {
  console.log(times);

  return (times ?
    <Box>
      <h3>Time</h3>
      <p>Creation date:</p>
      <p>{times.creation_date.split(' ')[0]}</p>
      <p>Last login:</p>
      <p>{times.last_login_date.split(' ')[0]}</p>
      <p>Login count:</p>
      <p>{times.login_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>Time played:</p>
      <p>{timeFormat(times.minutes_played)}</p>
    </Box>
    :
    <Loading />
  )
}

export default CharacterTime;
