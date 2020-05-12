import React from 'react';
import { Box } from 'grommet';
import { backEndURL, imgURL } from '../config';

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
    getVehData();
  }

  return (
    <Box>
      {vehData ? vehData.vehicle_list.map(vehicle => {
        return (
          <div>
            <h2 key={vehicle.vehicle_id}>{vehicle.name.en}</h2>
            <h3>{vehicle.description.en}</h3>
            <img alt={vehicle.name.en} src={`${imgURL}${vehicle.image_path}`} />
          </div>
        )
      })
        :
        <Box>
          <img className="loader" width="30" alt="Loading..." src="/images/loading.gif" />
        </Box>}
    </Box >
  )
}

export default VehiclePage;
