import React from 'react';
import { backEndURL } from '../config';

const CharacterPage = () => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const getCharData = async () => {
    const name = window.location.href.split('/')[4];
    const res = await fetch(`${backEndURL}/char/${name}`);
    console.log(res);
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
      console.log(data);
    }
  }

  if (!loaded) {
    setLoaded(true);
    getCharData();
    console.log(data);
  }
  return (data ?
    <div>
      <h1>{data.character_list[0].name.first}</h1 >
      <h2>Creation date: {data.character_list[0].times.creation_date.split(' ')[0]}</h2>
    </div>
    :
    <h1>Loading...</h1>
  )
}


export default CharacterPage;
