import React from 'react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import Loading from './Loading';
import { commaFormat } from './util.js';

function CharacterGeneral({ main_class, stats, stats_history, dataId }) {

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
    return commaFormat(totalScore);
  }

  const getFacilityCaptures = statsArr => {
    let retStat = 0;
    statsArr.forEach(stat => {
      if (stat.stat_name === "facility_capture") {
        retStat = commaFormat(stat.all_time);
      }
    })
    return retStat;
  }

  const getFacilityDefenses = statsArr => {
    let retStat = 0;
    statsArr.forEach(stat => {
      if (stat.stat_name === "facility_defend") {
        retStat = commaFormat(stat.all_time);
      }
    })
    return retStat;
  }


  return (main_class && stats && stats_history && dataId ?
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
            <TableCell><h4>Facility captures</h4></TableCell>
            <TableCell><h4>Facility defenses</h4></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><p>{main_class.name.en}</p></TableCell>
            <TableCell><p>{getScore(stats)} points</p></TableCell>
            <TableCell><p>{getKDR(stats_history[1].all_time, stats_history[0].all_time)}</p></TableCell>
            <TableCell><p>{commaFormat(stats_history[1].all_time)}</p></TableCell>
            <TableCell><p>{commaFormat(stats_history[0].all_time)}</p></TableCell>
            <TableCell><p>{getFacilityCaptures(dataId.stats.stat_history)}</p></TableCell>
            <TableCell><p>{getFacilityDefenses(dataId.stats.stat_history)}</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    :
    <Loading />)
}

export default CharacterGeneral;
