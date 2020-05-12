import React from 'react';
import { backEndURL, imgURL } from '../config';

const CharacterPage = () => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const getCharData = async () => {
    const name = window.location.href.split('/')[4];
    const res = await fetch(`${backEndURL}/char/${name}`);
    if (res.ok) {
      const resData = await res.json();
      console.log(resData);
      setData(resData);
    }
  }

  if (!loaded) {
    setLoaded(true);
    getCharData();
    console.log(data);
  }
  return (data ?
    <div>
      <h1><img width="20" alt={data.character_list[0].main_class.name.en} src={`${imgURL}${data.character_list[0].main_class.image_path}`} />{data.character_list[0].name.first}</h1 >
      <p><img width="30" alt={data.character_list[0].faction.name.en} src={`${imgURL}${data.character_list[0].faction.image_path}`} /> {data.character_list[0].faction.name.en}</p>
      <h2>Creation date: {data.character_list[0].times.creation_date.split(' ')[0]}</h2>
    </div>
    :
    <h1>Loading...</h1>
  )
}


export default CharacterPage;
