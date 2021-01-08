import React from 'react';
import { backEndURL } from '../config';
import { Box, Button } from 'grommet';
import Loading from './Loading';
import { timeFormat, commaFormat } from './util';

function LeaderboardPage() {
  const [dataScore, setDataScore] = React.useState(null);
  const [dataTime, setDataTime] = React.useState(null);
  const [dataKills, setDataKills] = React.useState(null);

  const getLBData = async (type) => {
    try {
      const res = await fetch(`${backEndURL}/leaderboard/${type}`);
      if (res.ok) {
        const resData = await res.json();
        if (type === 'Score') setDataScore(resData);
        if (type === 'Time') setDataTime(resData);
        if (type === 'Kills') setDataKills(resData);
      }
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    getLBData('Score');
    getLBData('Time');
    getLBData('Kills');
  }, []);

  return (
    <>
      <Box className="basicnooutline" animation="fadeIn">
        <h1>Leaderboards</h1>
        <h3>View the highest ranking characters by category</h3>
      </Box>
      <Box direction="row" animation="fadeIn">
        <Box className="basic">
          <h2>Score:</h2>
          {dataScore ? dataScore.leaderboard_list.map(character => {
            return (
              <Box key={character.name.first}>
                <Button className="searchRes" href={`/char/${character.name.first}`} margin="medium" label={`${Number.parseInt(character.rank) + 1}. ${character.name.first}`} size="medium" />
                <p>Score: {commaFormat(character.value)} pts</p>
              </Box>
            )
          })
            :
            <Loading />}
        </Box>
        <Box className="basic">
          <h2>Play time:</h2>
          {dataTime ? dataTime.leaderboard_list.map(character => {
            return (
              <Box key={character.name.first}>
                <Button className="searchRes" href={`/char/${character.name.first}`} margin="medium" label={`${Number.parseInt(character.rank) + 1}. ${character.name.first}`} size="medium" />
                <p>Time played: {timeFormat(character.times.minutes_played)}</p>
              </Box>
            )
          })
            :
            <Loading />}
        </Box>
        <Box className="basic">
          <h2>Kills:</h2>
          {dataKills ? dataKills.leaderboard_list.map(character => {
            return (
              <Box key={character.name.first}>
                <Button className="searchRes" href={`/char/${character.name.first}`} margin="medium" label={`${Number.parseInt(character.rank) + 1}. ${character.name.first}`} size="medium" />
                <p>Kills: {commaFormat(character.value)}</p>
              </Box>
            )
          })
            :
            <Loading />}
        </Box>
      </Box>
    </>
  )
}

export default LeaderboardPage;
