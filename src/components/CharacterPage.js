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
import MDE from './MDE';
import ReactMarkdown from 'react-markdown';
import * as Showdown from 'showdown';

const CharacterPage = () => {
  const [data, setData] = React.useState(null);
  const [dataId, setDataId] = React.useState(null);
  const [commentData, setCommentData] = React.useState(null);

  const getCharData = async () => {
    try {
      const name = window.location.href.split('/')[4];
      const res = await fetch(`${backEndURL}/char/${name}`);
      if (res.ok) {
        const resData = await res.json();
        await setData(resData.character_list[0]);
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

  React.useEffect(() => {
    getCharData();
    getComments();
  }, []);

  console.log(commentData);
  React.useEffect(() => {
    const getCharIdData = async () => {
      if (data) {
        try {
          const charId = data.character_id;
          const charIdRes = await fetch(`${backEndURL}/charid/${charId}`);
          if (charIdRes.ok) {
            const charIdData = await charIdRes.json();
            setDataId(charIdData.character_list[0]);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
    getCharIdData();
  }, [data]);

  return (data && dataId ?
    <div className="basic">
      <Box animation="fadeIn" align="center">
        <h1><img width="20" alt={data.main_class.name.en} src={`${imgURL}${data.main_class.image_path}`} />{data.name.first}</h1 >
        <h2><img width="20" alt={data.faction.name.en} src={`${imgURL}${data.faction.image_path}`} /> {data.faction.name.en}</h2>
        <div>
          {data.outfit_member ? <Button href={`/outfit/${data.outfit_member.outfit.outfit_id}`} label={data.outfit_member.outfit.name} /> : null}
        </div>
        <h3>BR: {data.battle_rank.value}</h3>
        {data.online_status === "1" ? <h3 className="displayOnline">Online</h3> : <h3 className="displayOffline">Offline</h3>}
      </Box>
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
        {commentData ?
          <>
            <h1>Comments</h1>
            {commentData.map(post => {
              return (
                <>
                  <h4>{post.name}</h4>
                  <ReactMarkdown source={post.body} />
                </>
              )
            })}
          </>
          :
          <>
          </>}
      </Box>
      <MDE />
    </div>
    :
    <Loading />
  )
}


export default CharacterPage;
