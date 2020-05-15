import React from 'react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import Loading from './Loading';
import { commaFormat } from './util.js';

const CharacterOneLife = ({ main_class, stats, stats_history, dataId }) => {
  const [records, setRecords] = React.useState(null);

  const getRecords = () => {
    const stat_history = dataId.stats.stat_history;
    let retStat = {};
    stat_history.forEach(stat => {
      retStat[stat.stat_name] = commaFormat(stat.one_life_max);
    })
    setRecords(retStat);
  }

  React.useEffect(() => {
    console.log(dataId);
    getRecords();
  }, [])

  return (records ?
    <Box margin="large">
      <h3>Most performed in one life</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell><h4>Certs gained</h4></TableCell>
            <TableCell><h4>Score</h4></TableCell>
            <TableCell><h4>Kills</h4></TableCell>
            <TableCell><h4>Facility captures</h4></TableCell>
            <TableCell><h4>Facility defenses</h4></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><p>{records.certs}</p></TableCell>
            <TableCell><p>{records.score}</p></TableCell>
            <TableCell><p>{records.kills}</p></TableCell>
            <TableCell><p>{records.facility_capture}</p></TableCell>
            <TableCell><p>{records.facility_defend}</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    :
    <Loading />)
}

export default CharacterOneLife;
