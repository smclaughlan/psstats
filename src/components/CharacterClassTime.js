import React from "react";
import { Box, DataTable, Meter } from "grommet";
import Loading from "./Loading";

function CharacterClassTime(dataId) {
  const [playTimes, setPlayTimes] = React.useState(null);

  const getHighestTime = () => {
    function getHigher(val1, val2) {
      if (val1 >= val2) return val1;
      else return val2;
    }

    let highestTime = 0;
    playTimes.forEach((profile) => {
      highestTime = getHigher(profile.value, highestTime);
    });
    return highestTime;
  };

  React.useEffect(() => {
    const getPlayTimes = () => {
      const profileIDs = {
        1: "Infiltrator",
        3: "Light Assault",
        4: "Combat Medic",
        5: "Engineer",
        6: "Heavy Assault",
        7: "MAX",
      };
      let times = []; //array of objects for datatable
      dataId.stats.stat.forEach((s) => {
        if (s.stat_name === "play_time") {
          let profileName = profileIDs[s.profile_id];
          times.push({
            name: profileName,
            value: Number.parseInt(s.value_forever),
          });
        }
      });
      setPlayTimes(times);
    };
    getPlayTimes();
  }, []);

  return playTimes ? (
    <Box>
      <h3>Relative play time per class</h3>
      <DataTable
        columns={[
          {
            property: "name",
            header: <h3>Class</h3>,
            primary: true,
          },
          {
            property: "value",
            header: <h3>Play time</h3>,
            render: (datum) => (
              <Box pad={{ vertical: "xsmall" }}>
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
  ) : (
    <Loading />
  );
}

export default CharacterClassTime;
