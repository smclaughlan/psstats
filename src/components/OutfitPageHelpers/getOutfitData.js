import { backEndURL } from "../../config";
import formatMemData from "./formatMemData";
import sortMembers from "./sortMembers";

async function getOutfitData(setData, setMembers) {
  try {
    let outfitId = window.location.href.split("/")[4];
    const res = await fetch(
      `${backEndURL}/outfit/${outfitId}`
    );
    if (res.ok) {
      const resData = await res.json();
      setData(resData);
      let unsortedMembers = resData.outfit_list[0].members.slice();
      let convertedMembers = formatMemData(unsortedMembers);
      sortMembers(convertedMembers, "online", setMembers);
    }
  } catch (err) {
    console.error(err);
  }
}

export default getOutfitData;
