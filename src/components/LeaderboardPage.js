import React from 'react';
import { backEndURL } from '../config';
import { Box, Button } from 'grommet';
import Loading from './Loading';

const LeaderboardPage = () => {
  const [dataScore, setDataScore] = React.useState(null);
  const [dataTime, setDataTime] = React.useState(null);
  const [dataKills, setDataKills] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const timePlurality = (num, lengthSingular) => {
    if (num === 0) return "";
    if (num === 1) return `${num} ${lengthSingular}`;
    if (num > 1) return `${num} ${lengthSingular}s`;
  }

  const timeFormat = minutes => {
    let months = 0;
    let weeks = 0;
    let days = 0;
    let minutesRemaining = 0;
    while (minutes > 43830) {
      months++;
      minutes -= 43830;
    }
    while (minutes > 10080) {
      weeks++;
      minutes -= 10080;
    }
    while (minutes > 1440) {
      days++;
      minutes -= 1440;
    }
    minutesRemaining = minutes;
    if (months) {
      return `${timePlurality(months, "month")} ${timePlurality(weeks, "week")} ${timePlurality(days, "day")} ${timePlurality(minutesRemaining, "minute")}`;
    }
    if (weeks) {
      return `${weeks} weeks, ${days} days, ${minutesRemaining} minutes`;
    }
    if (days) {
      return `${days} days, ${minutesRemaining} minutes`;
    }
    return `${minutesRemaining} minutes`;
  }

  const getLBData = async (type) => {
    try {
      const res = await fetch(`${backEndURL}/leaderboard/${type}`);
      console.log(res);
      if (res.ok) {
        const resData = await res.json();
        console.log(resData);
        if (type === 'Score') setDataScore(resData);
        if (type === 'Time') setDataTime(resData);
        if (type === 'Kills') setDataKills(resData);
      }
    } catch (err) {
      console.error(err);
    }
  }

  if (!loaded) {
    setLoaded(true);
    getLBData('Score');
    getLBData('Time');
    getLBData('Kills');
    console.log(dataKills);
  }

  return (
    <>
      <h1>Leaderboards</h1>
      <h3>View the highest ranking characters by category</h3>
      <Box direction="row">
        <Box>
          <h2>Score:</h2>
          {dataScore ? dataScore.leaderboard_list.map(character => {
            return (
              <Box>
                <Button className="searchRes" key={character.name.first} href={`/char/${character.name.first}`} margin="medium" label={`${Number.parseInt(character.rank) + 1}. ${character.name.first}`} size="medium" />
                <p>Score: {character.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} pts</p>
                <p>Time played: {timeFormat(character.times.minutes_played)}</p>
              </Box>
            )
          })
            :
            <Loading />}
        </Box>
        <Box>
          <h2>Play time:</h2>
          {dataTime ? dataTime.leaderboard_list.map(character => {
            return (
              <Box>
                <Button className="searchRes" key={character.name.first} href={`/char/${character.name.first}`} margin="medium" label={`${Number.parseInt(character.rank) + 1}. ${character.name.first}`} size="medium" />
                <p>Time played: {timeFormat(character.times.minutes_played)}</p>
              </Box>
            )
          })
            :
            <Loading />}
        </Box>
        <Box>
          <h2>Kills:</h2>
          {dataKills ? dataKills.leaderboard_list.map(character => {
            return (
              <Box>
                <Button className="searchRes" key={character.name.first} href={`/char/${character.name.first}`} margin="medium" label={`${Number.parseInt(character.rank) + 1}. ${character.name.first}`} size="medium" />
                <p>Kills: {character.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p>Time played: {timeFormat(character.times.minutes_played)}</p>
              </Box>
            )
          })
            :
            <Loading />}
        </Box>
      </Box >
    </>
  )
}

export default LeaderboardPage;
