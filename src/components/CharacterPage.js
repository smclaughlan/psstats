import React from 'react';
import { backEndURL } from '../config';

const CharacterPage = () => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const getCharData = async () => {
    console.log(window.location.href.split('/')[4]);
    const res = fetch(`${backEndURL}/`);
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
      console.log(data);
    }
  }

  React.useEffect(() => {
    //try using lots of variables and updating them here instead

  });

  if (data) {
    const { first, creation_date } = data;
    return (
      <div>
        <h1>{first}</h1>
        <h2>{creation_date}</h2>
      </div>
    )
  }

  if (!loaded) {
    setLoaded(true);
  }

  return (
    <h1>Loading...</h1>
  )
}

export default CharacterPage;
