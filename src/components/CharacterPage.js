import React from 'react';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';
import { Button, Box, Tabs, Tab, Carousel } from 'grommet';
import CharacterTime from './CharacterTime';
import CharacterCerts from './CharacterCerts';
import CharacterGeneral from './CharacterGeneral';
import CharacterClassScore from './CharacterClassScore';
import CharacterClassAccuracy from './CharacterClassAccuracy';

const CharacterPage = () => {
  const [data, setData] = React.useState(null);

  const getCharData = async () => {
    try {
      const name = window.location.href.split('/')[4];
      const res = await fetch(`${backEndURL}/char/${name}`);
      console.log('Fetch ran');
      if (res.ok) {
        const resData = await res.json();
        await setData(resData.character_list[0]);
        console.log(resData);
      }
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    getCharData();
  }, []);

  return (data ?
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
        <Carousel fill margin="large" play={10000}>
          <CharacterGeneral {...data} />
          <CharacterTime {...data} />
          <CharacterCerts {...data} />
        </Carousel>
      </Box>
      <Box animation="fadeIn" className="basic" align="center">
        <Tabs>
          <Tab title="Score per class">
            <CharacterClassScore {...data} />
          </Tab>
          <Tab title="Accuracy per class">
            <CharacterClassAccuracy {...data} />
          </Tab>
        </Tabs>
      </Box>
    </div>
    :
    <Loading />
  )
}


export default CharacterPage;
