import React from 'react';
import { Button, Box } from 'grommet';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';

const OutfitPage = () => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const getOutfitData = async () => {
    let outfitId = window.location.href.split('/')[4];
    console.log(outfitId);
    const res = await fetch(`${backEndURL}/outfit/${outfitId}`);
    console.log(res);
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
      console.log(data);
    }
  }

  if (!loaded) {
    setLoaded(true);
    getOutfitData();
  }

  console.log(data);
  return (data ?
    <div>
      <h1>{data.outfit_list[0].alias}</h1 >
      <h2>{data.outfit_list[0].name}</h2>
      <h2>{data.outfit_list[0].time_created_date.split(' ')[0]}</h2>
      {data.outfit_list[0].members.map(member => {
        return (
          <div>
            <Button key={member.name.first} label={member.name.first} href={`/char/${member.name.first}`} />
            <p><img width="30" alt={member.main_class[0].name.en} src={`${imgURL}${member.main_class[0].image_path}`} /> {member.main_class[0].name.en}</p>
            <p>Outfit Rank: {member.rank_ordinal}     Battle Rank: {member.battle_rank.value}</p>
            <p className="displayOnline">{member.online_status === "1" ? "--- ONLINE ---" : " "}</p>
          </div>
        )
      })}
    </div>
    :
    <Loading />
  )
}

export default OutfitPage;
