import React from 'react';
import { Box, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import Loading from './Loading';

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
            <TableCell><p>{(Number.parseInt(certs.earned_points) + Number.parseInt(certs.gifted_points)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></TableCell>
            <TableCell><p>{certs.spent_points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></TableCell>
            <TableCell><p>{certs.available_points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    :
    <Loading />)
}

export default CharacterCerts;
