import { backEndURL } from "../../config";

async function getMemberData(
  members,
  setFactionMemberData
) {
  //no faction data in the outfit data. Get from first character in faction.
  try {
    if (members[0]) {
      let randomMemberName = members[0].name.first;
      const factionData = await fetch(
        `${backEndURL}/char/${randomMemberName}`
      );
      if (factionData.ok) {
        const factionJson = await factionData.json();
        await setFactionMemberData(
          factionJson.character_list[0]
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
}

export default getMemberData;
