import React from 'react';
import { Box } from 'grommet';
import Loading from './Loading';

const CharacterGeneral = ({ main_class, stats, stats_history }) => {

  const getKDR = (kills, deaths) => {
    let tempKDR = (parseInt(kills) / parseInt(deaths)).toString();
    let retKDR = '';
    if (isNaN(tempKDR)) {
      retKDR = 0;
    } else if (tempKDR.indexOf(".") === -1) { //no dot, use whole number
      retKDR = tempKDR;
    } else {
      let idxToSplit = tempKDR.indexOf(".");
      let startKDR = tempKDR.slice(0, idxToSplit);
      let endKDR = tempKDR.slice(idxToSplit, idxToSplit + 3);
      retKDR = startKDR + endKDR;
    }
    return retKDR;
  }

  const getScore = statsArr => {
    let totalScore = 0;
    statsArr.forEach(stat => {
      if (stat.stat_name === "score") {
        totalScore += Number.parseInt(stat.value_forever);
      }
    })
    return totalScore.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  return (main_class && stats && stats_history ?
    <Box>
      <h3>General stats</h3>
      <p>Primary class:</p>
      <p>{main_class.name.en}</p>
      <p>Score:</p>
      <p>{getScore(stats)} points</p>
      <p>Kill/Death ratio:</p>
      <p>{getKDR(stats_history[1].all_time, stats_history[0].all_time)}</p>
      <p>Kills:</p>
      <p>{stats_history[1].all_time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>Deaths:</p>
      <p>{stats_history[0].all_time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </Box>
    :
    <Loading />)
}

export default CharacterGeneral;
