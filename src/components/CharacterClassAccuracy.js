import React from 'react';
import { Box, DataTable, Meter } from 'grommet';
import Loading from './Loading';

const CharacterClassAccuracy = ({ stats }) => {

  const getChartData = stats => {
    let chartData = [];
    stats.forEach((stat) => {
      if (stat.stat_name === "hit_count") {
        let profileNum = stat.profile_id;
        stats.forEach(fireStat => {
          if (fireStat.stat_name === "fire_count" && fireStat.profile_id === profileNum) {
            chartData.push({
              name: stat.class.name.en,
              percent: Number.parseInt(stat.value_forever) / Number.parseInt(fireStat.value_forever) * 100,
              percentStr: `${Math.floor((Number.parseInt(stat.value_forever) / Number.parseInt(fireStat.value_forever) * 100))}%`,
            });
          }
        })
      }
    })
    return chartData;
  }

  return (stats ?
    <Box>
      <h3>Accuracy per class</h3>
      <DataTable
        columns={[
          {
            property: 'name',
            header: <h3>Class</h3>,
            primary: true,
          },
          {
            property: 'percent',
            header: <h3>Percentage of hits landed</h3>,
            render: datum => (
              <Box pad={{ vertical: 'xsmall' }}>
                <Meter
                  values={[{ value: datum.percent }]}
                  thickness="medium"
                  size="medium"
                  max="100"
                />
              </Box>
            ),
          },
          {
            property: 'percentStr',
            header: '',
          },
        ]}
        data={getChartData(stats)}
      />
    </Box>
    :
    <Loading />
  )
}

export default CharacterClassAccuracy;
