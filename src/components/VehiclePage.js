import React from 'react';
import { Box } from 'grommet';
import { backEndURL } from '../config';

const VehiclePage = () => {
  const [vehData, setVehData] = React.useState(null);

  const [loaded, setLoaded] = React.useState(false);

  const getVehData = async vehicle => {
    const result = await fetch(`${backEndURL}/vehicles/`);
    if (result.ok) {
      const resJson = await result.json();
      console.log("ResJson", resJson);
      setVehData(resJson);
    }
  }

  if (!loaded) {
    setLoaded(true);
    getVehData("Lightning");
    getVehData("Flash");
    getVehData("Vanguard");
  }

  return (
    <Box direction="row">
      {vehData ? vehData.map(vehicle => {
        return (
          <div>
            <h2 key={vehicle.vehName}>{vehicle.vehName}</h2>
            <h3>{vehicle.vehDesc}</h3>
          </div>
        )
      })
        :
        <h2>Loading...</h2>}
    </Box >
  )
}

export default VehiclePage;
