import React from 'react';
import { Box, Tabs, Tab } from 'grommet';
import { backEndURL } from '../config';
import ClassDetail from './ClassDetail';
import Loading from './Loading';
import Attribution from './Attribution';
import Footer from './Footer';

function ClassPage() {
  const [classData, setClassData] = React.useState(null);

  const getClassData = async () => {
    try {
      const result = await fetch(`${backEndURL}/classes/`);
      if (result.ok) {
        const resJson = await result.json();
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
    classData && classData.profile_list ?
      <>
        <Box className="basic" alignSelf="center" width="900px" animation="fadeIn" style={{ marginTop: "100px" }}>
          <h1>Classes</h1>
          <Tabs>
            {classData.profile_list.map(profile => {
              return (
                <Tab title={profile.name.en} key={profile.name.en}>
                  <ClassDetail profile={profile} />
                </Tab>
              )
            })}
          </Tabs>
          <Attribution />
        </Box >
        <Footer />
      </>
      :
      <Loading />
  )

  // return (
  //   <>
  //     <Box className="basic" alignSelf="center" width="900px" animation="fadeIn" style={{ marginTop: "100px" }}>
  //       <h1>Classes</h1>
  //       <Tabs>
  //         {classData && classData.profile_list ? classData.profile_list.map(profile => {
  //           return (
  //             <Tab title={profile.name.en} key={profile.name.en}>
  //               <ClassDetail profile={profile} />
  //             </Tab>
  //           )
  //         })
  //           :
  //           <Loading />}
  //       </Tabs>
  //       <Attribution />
  //     </Box >
  //     <Footer />
  //   </>
  // )
}

export default ClassPage;
