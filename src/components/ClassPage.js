import React from 'react';
import { Box } from 'grommet';
import { backEndURL } from '../config';
import ClassDetail from './ClassDetail';
import Loading from './Loading';
import Attribution from './Attribution';

const ClassPage = () => {
  const [classData, setClassData] = React.useState(null);

  const getClassData = async () => {
    try {
      const result = await fetch(`${backEndURL}/classes/`);
      if (result.ok) {
        const resJson = await result.json();
        console.log("ResJson", resJson);
        setClassData(resJson);
      }
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    getClassData();
  }, []);

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
