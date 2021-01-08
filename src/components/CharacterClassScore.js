import React from 'react';
import { Box, DataTable, Meter } from 'grommet';
import Loading from './Loading';
import { commaFormat } from './util.js';

function CharacterClassScore({ stats }) {

  const getChartData = stats => {
    let chartData = [];
    stats.forEach(stat => {
      if (stat.stat_name === "score") {
        chartData.push({ name: stat.class.name.en, value: Number.parseInt(stat.value_forever), valueWithCommas: commaFormat(stat.value_forever) });
      }
    })
    return chartData;
  }

  const getHighestScore = stats => {
    let highestVal = 0;
    stats.forEach(stat => {
      if (Number.parseInt(stat.value_forever) > highestVal) highestVal = Number.parseInt(stat.value_forever);
    })
    return highestVal;
  }

  return (stats ?
    <Box>
      <h3>Score per class</h3>
      <DataTable
        columns={[
          {
            property: 'name',
            header: <h3>Class</h3>,
            primary: true,
          },
          {
            property: 'value',
            header: <h3>Score</h3>,
            render: datum => (
              <Box pad={{ vertical: 'xsmall' }}>
                <Meter
                  values={[{ value: datum.value }]}
                  thickness="medium"
                  size="medium"
                  max={getHighestScore(stats)}
                />
              </Box>
            ),
          },
          {
            property: 'valueWithCommas',
            header: '',
          }
        ]}
        data={getChartData(stats)}
      />
    </Box>
    :
    <Loading />)
}

export default CharacterClassScore;
