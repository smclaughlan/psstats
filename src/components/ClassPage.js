import React from 'react';
import { Box } from 'grommet';
import { backEndURL } from '../config';
import ClassDetail from './ClassDetail';
import Loading from './Loading';
import Attribution from './Attribution';

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
  //TODO attribute class descriptions and link to the planetside 2 wiki, creative commons attribution license
  //example page with link https://planetside.fandom.com/wiki/MAX
  //https://creativecommons.org/licenses/by-sa/3.0/
  return (
    <Box>
      {classData ? classData.profile_list.map(profile => {
        return (
          <ClassDetail profile={profile} />
        )
      })
        :
        <Loading />}
      <Attribution />
    </Box >
  )
}

export default ClassPage;
