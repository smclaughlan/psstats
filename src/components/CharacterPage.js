import React from "react";
import Loading from "./Loading";
import { Box, Tabs, Tab } from "grommet";
import CharacterTime from "./CharacterTime";
import CharacterCerts from "./CharacterCerts";
import CharacterGeneral from "./CharacterGeneral";
import CharacterClassScore from "./CharacterClassScore";
import CharacterClassAccuracy from "./CharacterClassAccuracy";
import CharacterOneLife from "./CharacterOneLife";
import CharacterClassTime from "./CharacterClassTime";
import CharacterPageTop from "./CharacterPageTop";
import Comments from "./Comments";
import Footer from "./Footer";
import charPageObj from "./userPages/userPages";
import getCharData from "./CharacterPageHelpers/getCharData";
import getCharIdData from "./CharacterPageHelpers/getCharIdData";

function CharacterPage() {
  const [data, setData] = React.useState(null);
  const [dataId, setDataId] = React.useState(null);

  const characterPageName =
    window.location.href.split("/")[4];

  React.useEffect(() => {
    async function getAndSetData() {
      const chrRes = await getCharData();
      setData(chrRes);
    }
    getAndSetData();
  }, []);

  React.useEffect(() => {
    async function getAndSetCharIdData() {
      const chrIdRes = await getCharIdData(data);
      setDataId(chrIdRes);
    }
    getAndSetCharIdData();
  }, [data]);

  return data && dataId ? (
    <>
      <div className="basic">
        <CharacterPageTop data={data} />
        {charPageObj[characterPageName] ? (
          charPageObj[characterPageName]
        ) : (
          <></>
        )}
        <Box
          animation="fadeIn"
          className="basic"
          align="center"
        >
          <Tabs>
            <Tab title="General">
              <CharacterGeneral dataId={dataId} {...data} />
            </Tab>
            <Tab title="One life records">
              <CharacterOneLife dataId={dataId} {...data} />
            </Tab>
            <Tab title="Time">
              <CharacterTime {...data} />
            </Tab>
            <Tab title="Certs">
              <CharacterCerts {...data} />
            </Tab>
          </Tabs>
        </Box>
        <Box
          animation="fadeIn"
          className="basic"
          align="center"
        >
          <Tabs>
            <Tab title="Score per class">
              <CharacterClassScore {...data} />
            </Tab>
            <Tab title="Accuracy per class">
              <CharacterClassAccuracy {...data} />
            </Tab>
            <Tab title="Relative time per class">
              <CharacterClassTime {...dataId} />
            </Tab>
          </Tabs>
        </Box>
        {/* <Comments name={data.name.first} /> */}
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default CharacterPage;
