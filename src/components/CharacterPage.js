import React from 'react';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';
import { Button, Box, Tabs, Tab } from 'grommet';
import CharacterTime from './CharacterTime';
import CharacterCerts from './CharacterCerts';
import CharacterGeneral from './CharacterGeneral';
import CharacterClassScore from './CharacterClassScore';
import CharacterClassAccuracy from './CharacterClassAccuracy';
import CharacterOneLife from './CharacterOneLife';
import CharacterClassTime from './CharacterClassTime';
import Footer from './Footer';
import MDE from './MDE';
import ReactMarkdown from 'react-markdown';
// import * as Showdown from 'showdown';
import moment from 'moment';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

import Elusive1Page from './userPages/elusive1';
import IGoRawrPage from './userPages/igorawr';
import CyriousPage from './userPages/cyrious';
import CAMIKAZE78Page from './userPages/camikaze78';
import MoukassPage from './userPages/moukass';
import LBPage from './userPages/lb';
import DimGiantPage from './userPages/dimgiant';
import FaberOnePage from './userPages/faberone';
import FlashyPage from './userPages/flashy';
import ArsheeTVPage from './userPages/arsheetv';


function CharacterPage() {
  const [data, setData] = React.useState(null);
  const [dataId, setDataId] = React.useState(null);
  const [commentData, setCommentData] = React.useState(null);

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

  const characterPageName = window.location.href.split('/')[4];

  const getCharData = async () => {
    try {
      const name = window.location.href.split('/')[4];
      const res = await fetch(`${backEndURL}/char/${name}`);
      if (res.ok) {
        const resData = await res.json();
        if (resData && resData.character_list && resData.character_list[0]) setData(resData.character_list[0]);
        else getCharData();
      }
    } catch (err) {
      console.error(err);
    }
  }

  const getComments = async () => {
    try {
      const res = await fetch(`${backEndURL}/comments/?url=${window.location.href}`);
      if (res.ok) {
        const resData = await res.json();
        await setCommentData(resData.comments);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const delPost = async (postId) => {
    try {
      const res = await fetch(`${backEndURL}/comments`, {
        method: "delete",
        body: JSON.stringify({ "id": postId }),
        headers: {
          "Content-Type": "application/json",
        }
      });
    } catch (err) {
      console.error(err);
    }
    getComments();
  }

  React.useEffect(() => {
    getCharData();
    getComments();
  }, []);

  React.useEffect(() => {
    const getCharIdData = async () => {
      if (data) {
        try {
          const charId = data.character_id;
          const charIdRes = await fetch(`${backEndURL}/charid/${charId}`);
          if (charIdRes.ok) {
            const charIdData = await charIdRes.json();
            if (charIdData && charIdData.character_list && charIdData.character_list[0]) setDataId(charIdData.character_list[0]);
            else getCharIdData();
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
    getCharIdData();
  }, [data]);

  return (data && dataId ?
    <>
      <div className="basic">
        <Box animation="fadeIn" align="center">
          <h1><img width="20" alt={data.main_class.name.en} src={`${imgURL}${data.main_class.image_path}`} />{data.name.first}</h1 >
          <h2><img width="20" alt={data.faction.name.en} src={`${imgURL}${data.faction.image_path}`} /> {data.faction.name.en}</h2>
          <div>
            {data.outfit_member ?
              <NavLink to={`/outfit/${data.outfit_member.outfit.outfit_id}`}>
                <Button href={`/outfit/${data.outfit_member.outfit.outfit_id}`} label={data.outfit_member.outfit.name} />
              </NavLink>
              : null
            }
          </div>
          <h3>BR: {data.battle_rank.value}</h3>
          {data.online_status === "1" ? <h3 className="displayOnline">Online</h3> : <h3 className="displayOffline">Offline</h3>}
        </Box>

        {characterPageName === "elusive1" ?
          <Elusive1Page />
          :
          <></>}
        {characterPageName === "iGoRawrrrr" ?
          <IGoRawrPage />
          :
          <></>}
        {characterPageName === "PattyFatHead" ?
          <CyriousPage />
          :
          <></>}
        {characterPageName === "CAMIKAZE78" ?
          <CAMIKAZE78Page />
          :
          <></>}
        {characterPageName === "Moukass" ?
          <MoukassPage />
          :
          <></>}
        {characterPageName === "lillbabs" ?
          <LBPage />
          :
          <></>}
        {characterPageName === "DimGiant" ?
          <DimGiantPage />
          :
          <></>}
        {characterPageName === "FabertheOne" ?
          <FaberOnePage />
          :
          <></>}
        {characterPageName === "Flashy" ?
          <FlashyPage />
          :
          <></>}
        {characterPageName === "ArsheeTV" ?
          <ArsheeTVPage />
          :
          <></>}


        <Box animation="fadeIn" className="basic" align="center">
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
        <Box animation="fadeIn" className="basic" align="center">
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
        <Box>
          {commentData && commentData.length > 0 ?
            <>
              <h1>Comments:</h1>
              {commentData.map(post => {
                let postId = post.id;
                return (
                  <>
                    {post.email === email ? <h4>{post.name} - {moment(post.createdAt)
                      .toDate()
                      .toLocaleString()} - <Button className="searchRes" onClick={() => { delPost(postId) }}>X</Button></h4>
                      :
                      <h4>{post.name} - {moment(post.createdAt)
                        .toDate()
                        .toLocaleString()}</h4>
                    }
                    <ReactMarkdown source={post.body} />
                  </>
                )
              })}
            </>
            :
            <>
            </>}
        </Box>
        <MDE name={data.name.first} gc={getComments} />
      </div>
      <Footer />
    </>
    :
    <Loading />
  )
}


export default CharacterPage;
