import React from 'react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import Loading from './Loading';
import { commaFormat } from './util.js';

const CharacterCerts = ({ certs }) => {

  return (certs ?
    <Box margin="large">
      <h3>Certs</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell><h4>Total earned certs</h4></TableCell>
            <TableCell><h4>Spent certs</h4></TableCell>
            <TableCell><h4>Available</h4></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><p>{commaFormat((Number.parseInt(certs.earned_points) + Number.parseInt(certs.gifted_points)))}</p></TableCell>
            <TableCell><p>{commaFormat(certs.spent_points)}</p></TableCell>
            <TableCell><p>{commaFormat(certs.available_points)}</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    :
    <Loading />)
}

export default CharacterCerts;
