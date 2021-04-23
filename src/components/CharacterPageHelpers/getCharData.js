import { backEndURL } from "../../config";

const getCharData = async () => {
  const characterPageName = window.location.href.split(
    "/"
  )[4];

  try {
    const res = await fetch(
      `${backEndURL}/char/${characterPageName}`
    );
    if (res.ok) {
      const resData = await res.json();
      if (
        resData &&
        resData.character_list &&
        resData.character_list[0]
      ) {
        return resData.character_list[0];
      } else {
        getCharData();
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export default getCharData;
