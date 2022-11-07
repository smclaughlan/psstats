import React from "react";
import {
  Box,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "grommet";
import { imgURL } from "../config";
import Comments from "./Comments";
import Footer from "./Footer";
import Loading from "./Loading";
import OutfitPageTableRow from "./OutfitPageTableRow";
import getOutfitData from "./OutfitPageHelpers/getOutfitData";
import getMemberData from "./OutfitPageHelpers/getMemberData";
import sortMembers from "./OutfitPageHelpers/sortMembers";

function OutfitPage() {
  const [data, setData] = React.useState(null);
  const [members, setMembers] = React.useState([]);
  const [factionMemberData, setFactionMemberData] =
    React.useState(null);
  const [tableColumns] = React.useState([
    { label: "Class", config: "class" },
    { label: "Name", config: "name" },
    { label: "Outfit Rank", config: "outfitrank" },
    { label: "Battle Rank", config: "battlerank" },
    { label: "Kill/Death Ratio", config: "kdr" },
    { label: "Online Status", config: "online" },
  ]);

  React.useEffect(() => {
    getOutfitData(setData, setMembers);
  }, []);

  React.useEffect(() => {
    getMemberData(members, setFactionMemberData);
  }, [members]);

  return data && members && factionMemberData ? (
    <>
      <div className="basicwide">
        <Box
          className="basicwide"
          direction="row"
          justify="evenly"
          animation="fadeIn"
        >
          <Box>
            <h1>{data.outfit_list[0].alias}</h1>
            <h2>{data.outfit_list[0].name}</h2>
            <h3>
              Creation Date:{" "}
              {
                data.outfit_list[0].time_created_date.split(
                  " "
                )[0]
              }
            </h3>
            <h3>
              Member Count:{" "}
              {data.outfit_list[0].member_count}
            </h3>
          </Box>
          <img
            width="300"
            alt={factionMemberData.faction.name.en}
            src={`${imgURL}${factionMemberData.faction.image_path}`}
          />
        </Box>
        <Box className="basicwide" animation="fadeIn">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell></TableCell>
                {tableColumns.map((currCol) => {
                  return (
                    <TableCell key={currCol.config}>
                      <Button
                        label={`${currCol.label}`}
                        onClick={() => {
                          sortMembers(
                            members,
                            `${currCol.config}`,
                            setMembers
                          );
                        }}
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
              {members.map((member, idx) => {
                return (
                  <OutfitPageTableRow
                    key={idx}
                    member={member}
                    idx={idx}
                  />
                );
              })}
            </TableHeader>
          </Table>
        </Box>
        {/* <Comments name={data.outfit_list[0].alias} /> */}
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default OutfitPage;
