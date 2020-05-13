import React from 'react';
import { Button, Table, TableHeader, TableRow, TableCell } from 'grommet';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';
import sortArray from 'sort-array';


const OutfitPage = () => {
  const [data, setData] = React.useState(null);
  const [members, setMembers] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  const getOutfitData = async () => {
    let outfitId = window.location.href.split('/')[4];
    const res = await fetch(`${backEndURL}/outfit/${outfitId}`);
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
      let unsortedMembers = resData.outfit_list[0].members.slice();
      let convertedMembers = convertMemDataToInt(unsortedMembers);
      sortMembers(convertedMembers, "online");
    }
  }

  const convertMemDataToInt = (unsortedMembers) => {
    return unsortedMembers.map(member => {
      member.rank_ordinal = parseInt(member.rank_ordinal);
      member.battle_rank.value = parseInt(member.battle_rank.value);
      return member;
    })
  }

  const sortMembers = (arr, sortMethod) => {
    let newMemberArr = arr.slice();
    if (sortMethod === "online") {
      sortArray(newMemberArr, {
        by: "online_status",
        order: "desc",
      })
    } else if (sortMethod === "class") {
      sortArray(newMemberArr, {
        by: "en",
        order: "desc",
        computed: {
          en: member => member.main_class[0].name.en
        }
      })
    } else if (sortMethod === "name") {
      sortArray(newMemberArr, {
        by: "first",
        order: "asc",
        computed: {
          first: member => member.name.first
        }
      })
    } else if (sortMethod === "outfitrank") {
      sortArray(newMemberArr, {
        by: "rank_ordinal",
        order: "asc"
      })
    } else if (sortMethod === "battlerank") {
      sortArray(newMemberArr, {
        by: "value",
        order: "desc",
        computed: {
          value: member => member.battle_rank.value
        }
      })
    }
    setMembers(newMemberArr);
  }

  if (!loaded) {
    setLoaded(true);
    getOutfitData();
  }

  console.log(members);
  return (data && members ?
    <div>
      <h1>{data.outfit_list[0].alias}</h1 >
      <h2>{data.outfit_list[0].name}</h2>
      <h2>{data.outfit_list[0].time_created_date.split(' ')[0]}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><Button label="Class" onClick={() => { sortMembers(members, "class") }} /></TableCell>
            <TableCell><Button label="Name" onClick={() => { sortMembers(members, "name") }} /></TableCell>
            <TableCell><Button label="Outfit Rank" onClick={() => { sortMembers(members, "outfitrank") }} /></TableCell>
            <TableCell><Button label="Battle Rank" onClick={() => { sortMembers(members, "battlerank") }} /></TableCell>
            <TableCell><Button label="Online Status" onClick={() => { sortMembers(members, "online") }} /></TableCell>
          </TableRow>
          {members.map((member, idx) => {
            return (
              <TableRow className="outfitTableRow">
                <TableCell>{idx + 1}</TableCell>
                <TableCell><img width="30" alt={member.main_class[0].name.en} src={`${imgURL}${member.main_class[0].image_path}`} /> {member.main_class[0].name.en}</TableCell>
                <TableCell><Button key={member.name.first} label={member.name.first} href={`/char/${member.name.first}`} /></TableCell>
                <TableCell>{member.rank_ordinal}. {member.rank}</TableCell>
                <TableCell>{member.battle_rank.value}</TableCell>
                <TableCell className="displayOnline">{member.online_status === "1" ? "--- ONLINE ---" : " "}</TableCell>
              </TableRow>
            )
          })}
        </TableHeader>
      </Table>
    </div>
    :
    <Loading />
  )
}

export default OutfitPage;
