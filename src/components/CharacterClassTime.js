import React from 'react';
import { Box, DataTable, Meter } from 'grommet';
import Loading from './Loading';

const CharacterClassTime = (dataId) => {
  const [playTimes, setPlayTimes] = React.useState(null);



  const getHighestTime = () => {
    let highestTime = 0;
    playTimes.forEach(profile => {
      if (profile.value > highestTime) highestTime = profile.value;
    })
    return highestTime;
  }

  React.useEffect(() => {
    const getPlayTimes = () => {
      let times = []; //array of objects for datatable
      console.log(dataId);
      dataId.stats.stat.forEach(s => {
        if (s.stat_name === "play_time") {
          let profileName = "";
          if (s.profile_id === "1") profileName = "Infiltrator";
          if (s.profile_id === "3") profileName = "Light Assault";
          if (s.profile_id === "4") profileName = "Combat Medic";
          if (s.profile_id === "5") profileName = "Engineer";
          if (s.profile_id === "6") profileName = "Heavy Assault";
          if (s.profile_id === "7") profileName = "Defector";
          times.push({ name: profileName, value: Number.parseInt(s.value_forever) });
        }
      })
      setPlayTimes(times);
      console.log(playTimes);
    }
    getPlayTimes();
  }, [])

  return (playTimes ?
    <Box>
      <h3>Relative play time per class</h3>
      <DataTable
        columns={[
          {
            property: 'name',
            header: <h3>Class</h3>,
            primary: true,
          },
          {
            property: 'value',
            header: <h3>Play time</h3>,
            render: datum => (
              <Box pad={{ vertical: 'xsmall' }}>
                <Meter
                  values={[{ value: datum.value }]}
                  thickness="medium"
                  size="medium"
                  max={getHighestTime()}
                />
              </Box>
            ),
          },
        ]}
        data={playTimes}
      />
    </Box>
    :
    <Loading />)
}

export default CharacterClassTime;
