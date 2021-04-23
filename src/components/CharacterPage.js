import React from "react";
import { backEndURL, imgURL } from "../config";
import Loading from "./Loading";
import { Button, Box, Tabs, Tab } from "grommet";
import CharacterTime from "./CharacterTime";
import CharacterCerts from "./CharacterCerts";
import CharacterGeneral from "./CharacterGeneral";
import CharacterClassScore from "./CharacterClassScore";
import CharacterClassAccuracy from "./CharacterClassAccuracy";
import CharacterOneLife from "./CharacterOneLife";
import CharacterClassTime from "./CharacterClassTime";
import Comments from "./Comments";
import Footer from "./Footer";
import charPageObj from "./userPages/userPages";
import getCharData from "./CharacterPageHelpers/getCharData";
import getCharIdData from "./CharacterPageHelpers/getCharIdData";
import MDE from "./MDE";
import ReactMarkdown from "react-markdown";
// import * as Showdown from 'showdown';
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

function CharacterPage() {
  const [data, setData] = React.useState(null);
  const [dataId, setDataId] = React.useState(null);

  let { isAuthenticated } = useAuth0();
  let { user } = useAuth0();
  let name;
  let email;
  if (user) {
    name = user.name;
    email = user.email;
  } else {
    name = "Guest";
    email = "Guest@Guest.com";
  }

  const characterPageName = window.location.href.split(
    "/"
  )[4];

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

  return data?.main_class && dataId ? (
    <>
      <div className="basic">
        <Box animation="fadeIn" align="center">
          <h1>
            <img
              width="20"
              alt={data.main_class.name.en}
              src={`${imgURL}${data.main_class.image_path}`}
            />
            {data.name.first}
          </h1>
          <h2>
            <img
              width="20"
              alt={data.faction.name.en}
              src={`${imgURL}${data.faction.image_path}`}
            />{" "}
            {data.faction.name.en}
          </h2>
          <div>
            {data.outfit_member ? (
              <NavLink
                to={`/outfit/${data.outfit_member.outfit.outfit_id}`}
              >
                <Button
                  href={`/outfit/${data.outfit_member.outfit.outfit_id}`}
                  label={data.outfit_member.outfit.name}
                />
              </NavLink>
            ) : null}
          </div>
          <h3>BR: {data.battle_rank.value}</h3>
          {data.online_status === "1" ? (
            <h3 className="displayOnline">Online</h3>
          ) : (
            <h3 className="displayOffline">Offline</h3>
          )}
        </Box>

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
        <Comments name={data.name.first} email={email} />
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default CharacterPage;
