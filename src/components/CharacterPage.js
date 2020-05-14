import React from 'react';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';
import { Button } from 'grommet';

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
    <div>
      <h1><img width="20" alt={data.main_class.name.en} src={`${imgURL}${data.main_class.image_path}`} />{data.name.first}</h1 >
      <h2><img width="20" alt={data.faction.name.en} src={`${imgURL}${data.faction.image_path}`} /> {data.faction.name.en}</h2>
      {data.outfit_member ? <Button href={`/outfit/${data.outfit_member.outfit.outfit_id}`} label={data.outfit_member.outfit.name} /> : null}
      <h2>Creation date: {data.times.creation_date.split(' ')[0]}</h2>
    </div>
    :
    <Loading />
  )
}


export default CharacterPage;
