import React from 'react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import Loading from './Loading';
import { timeFormat, commaFormat } from './util';

const CharacterTime = ({ times }) => {

  return (times ?
    <Box margin="large">
      <h3>Time</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell><h4>Creation date</h4></TableCell>
            <TableCell><h4>Last login</h4></TableCell>
            <TableCell><h4>Login count</h4></TableCell>
            <TableCell><h4>Time played</h4></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><p>{times.creation_date.split(' ')[0]}</p></TableCell>
            <TableCell><p>{times.last_login_date.split(' ')[0]}</p></TableCell>
            <TableCell><p>{commaFormat(times.login_count)}</p></TableCell>
            <TableCell><p>{timeFormat(times.minutes_played)}</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    :
    <Loading />
  )
}

export default CharacterTime;
