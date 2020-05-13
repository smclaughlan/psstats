import React from 'react';
import { Button, Table, TableHeader, TableRow, TableCell } from 'grommet';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';
import sortArray from 'sort-array';


const OutfitPage = () => {
  const [data, setData] = React.useState(null);
  const [members, setMembers] = React.useState([]);
  const [factionMemberData, setFactionMemberData] = React.useState(null);
  const [loadedOutfit, setLoadedOutfit] = React.useState(false);
  const [loadedMemberData, setLoadedMemberData] = React.useState(false);

  const getOutfitData = async () => {
    let outfitId = window.location.href.split('/')[4];
    const res = await fetch(`${backEndURL}/outfit/${outfitId}`);
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
      console.log(resData);
      let unsortedMembers = resData.outfit_list[0].members.slice();
      let convertedMembers = await formatMemData(unsortedMembers);
      await sortMembers(convertedMembers, "online");
    }
  }

  const getMemberData = async () => {
    //no faction data in the outfit data. Get from first character in faction.
    let randomMemberName = await members[0].name.first;
    const factionData = await fetch(`${backEndURL}/char/${randomMemberName}`);
    if (factionData.ok) {
      const factionJson = await factionData.json();
      await setFactionMemberData(factionJson.character_list[0]);
      console.log(factionJson);
    }
  }

  const formatMemData = (unsortedMembers) => {
    return unsortedMembers.map(member => {
      member.rank_ordinal = parseInt(member.rank_ordinal);
      member.battle_rank.value = parseInt(member.battle_rank.value);
      let tempKDR = (parseInt(member.stats_history[1].all_time) / parseInt(member.stats_history[0].all_time)).toString();
      if (isNaN(tempKDR)) {
        member.kdr = 0;
      } else if (tempKDR.indexOf(".") === -1) { //no dot, use whole number
        member.kdr = tempKDR;
      } else {
        let idxToSplit = tempKDR.indexOf(".");
        let startKDR = tempKDR.slice(0, idxToSplit);
        let endKDR = tempKDR.slice(idxToSplit, idxToSplit + 3);
        member.kdr = startKDR + endKDR;
      }
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
    } else if (sortMethod === "kdr") {
      sortArray(newMemberArr, {
        by: "kdr",
        order: "desc"
      })
    }
    setMembers(newMemberArr);
  }

  if (!loadedOutfit) {
    setLoadedOutfit(true);
    getOutfitData();
  }

  if (members.length > 0 && !loadedMemberData) {
    setLoadedMemberData(true);
    getMemberData();
  }

  console.log(members);
  return (data && members && factionMemberData ?
    <div>
      <h1><img width="30" alt={factionMemberData.faction.name.en} src={`${imgURL}${factionMemberData.faction.image_path}`} />{data.outfit_list[0].alias}</h1 >
      <h2>{data.outfit_list[0].name}</h2>
      <h3>Creation Date: {data.outfit_list[0].time_created_date.split(' ')[0]}</h3>
      <h3>Member Count: {data.outfit_list[0].member_count}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><Button label="Class" onClick={() => { sortMembers(members, "class") }} /></TableCell>
            <TableCell><Button label="Name" onClick={() => { sortMembers(members, "name") }} /></TableCell>
            <TableCell><Button label="Outfit Rank" onClick={() => { sortMembers(members, "outfitrank") }} /></TableCell>
            <TableCell><Button label="Battle Rank" onClick={() => { sortMembers(members, "battlerank") }} /></TableCell>
            <TableCell><Button label="Kill/Death Ratio" onClick={() => { sortMembers(members, "kdr") }} /></TableCell>
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
                <TableCell>{member.kdr}</TableCell>
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
