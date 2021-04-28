import React from "react";
import { imgURL } from "../config";
import { Button, Box, Tabs, Tab } from "grommet";
import { NavLink } from "react-router-dom";

function CharacterPageTop(props) {
  const { data } = props;
  return (
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
  );
}

export default CharacterPageTop;
