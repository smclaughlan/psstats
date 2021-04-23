import { backEndURL } from "../../config";

const getCharIdData = async (data) => {
  try {
    const charId = data.character_id;
    const charIdRes = await fetch(
      `${backEndURL}/charid/${charId}`
    );
    if (charIdRes.ok) {
      const charIdData = await charIdRes.json();
      if (
        charIdData &&
        charIdData.character_list &&
        charIdData.character_list[0]
      ) {
        return charIdData.character_list[0];
      } else {
        getCharIdData();
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export default getCharIdData;
