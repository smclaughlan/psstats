import React from 'react';

const CharacterPage = () => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const getCharData = async () => {
    console.log(window.location.href.split('/')[4]);
    const res = fetch(`http://census.daybreakgames.com/s:sm579/get/ps2/character?name.first=${window.location.href.split('/')[4]}&c:resolve=online_status&c:join=type:profile%5Eon:profile_id%5Eto:profile_id%5Elist:0%5Eshow:name.en%27image_path%5Einject_at:main_class&c:join=type:faction%5Eon:faction_id%5Eto:faction_id%5Elist:0%5Eshow:name.en%27image_path%5Einject_at:faction&c:join=type:world%5Eon:world_id%5Eto:world_id%5Elist:0%5Einject_at:world&c:join=type:characters_stat_history%5Eon:character_id%5Eto:character_id%5Elist:0%5Eshow:stat_name%27all_time%5Elist:1%5Einject_at:stats_history%5Eterms:stat_name=deaths%27stat_name=kills&c:join=type:characters_stat%5Eon:character_id%5Eto:character_id%5Elist:0%5Eshow:stat_name%27value_forever%27profile_id%5Elist:1%5Einject_at:stats%5Eterms:stat_name=score%27stat_name=hit_count%27stat_name=fire_count(profile%5Eon:profile_id%5Eto:profile_type_id%5Eshow:name.en%5Einject_at:class)&c:join=type:outfit_member%5Eon:character_id%5Eto:character_id%5Elist:0%5Einject_at:outfit_member(outfit%5Eon:outfit_id%5Eto:outfit_id%5Elist:0%5Einject_at:outfit)&c:join=type:title%5Eon:title_id%5Eto:title_id%5Elist:0%5Eshow:name.en%5Einject_at:title`);
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
