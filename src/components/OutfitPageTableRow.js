import React from "react";
import { imgURL } from "../config";
import { Button, TableRow, TableCell } from "grommet";
import { NavLink } from "react-router-dom";

function OutfitPageTableRow(props) {
  const { member, idx } = props;
  return (
    <TableRow
      key={member.name.first}
      className="outfitTableRow"
    >
      <TableCell>{idx + 1}</TableCell>
      <TableCell>
        <img
          width="30"
          alt={member.main_class[0].name.en}
          src={`${imgURL}${member.main_class[0].image_path}`}
        />
      </TableCell>
      <TableCell>
        <NavLink to={`/char/${member.name.first}`}>
          <Button
            label={member.name.first}
            href={`/char/${member.name.first}`}
          />
        </NavLink>
      </TableCell>
      <TableCell>
        {member.rank_ordinal}. {member.rank}
      </TableCell>
      <TableCell>{member.battle_rank.value}</TableCell>
      <TableCell>{member.kdr}</TableCell>
      {member.online_status === "1" ? (
        <TableCell className="displayOnline">
          Online
        </TableCell>
      ) : (
        <TableCell className="displayOffline">
          Offline
        </TableCell>
      )}
    </TableRow>
  );
}

export default OutfitPageTableRow;
