import React from 'react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
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
    <Box margin="large">
      <h3>General stats</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell><h4>Primary class</h4></TableCell>
            <TableCell><h4>Score</h4></TableCell>
            <TableCell><h4>Kill/Death ratio</h4></TableCell>
            <TableCell><h4>Kills</h4></TableCell>
            <TableCell><h4>Deaths</h4></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><p>{main_class.name.en}</p></TableCell>
            <TableCell><p>{getScore(stats)} points</p></TableCell>
            <TableCell><p>{getKDR(stats_history[1].all_time, stats_history[0].all_time)}</p></TableCell>
            <TableCell><p>{stats_history[1].all_time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></TableCell>
            <TableCell><p>{stats_history[0].all_time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    :
    <Loading />)
}

export default CharacterGeneral;
