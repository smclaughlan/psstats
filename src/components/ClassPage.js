import React from 'react';
import { Box } from 'grommet';
import { backEndURL, imgURL } from '../config';

const ClassPage = () => {
  const [classData, setClassData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const getClassData = async () => {
    const result = await fetch(`${backEndURL}/classes/`);
    if (result.ok) {
      const resJson = await result.json();
      console.log("ResJson", resJson);
      setClassData(resJson);
    }
  }

  if (!loaded) {
    setLoaded(true);
    getClassData();
  }

  return (
    <Box>
      {classData ? classData.profile_list.map(profile => {
        return (
          <div>
            <h2 key={profile.profile_id}>{profile.name.en}</h2>
            <h3>{profile.description.en}</h3>
            <img alt={profile.name.en} src={`${imgURL}${profile.image_path}`} />
          </div>
        )
      })
        :
        <h2>Loading...</h2>}
    </Box >
  )
}

export default ClassPage;
