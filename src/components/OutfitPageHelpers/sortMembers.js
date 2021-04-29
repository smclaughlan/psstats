import sortArray from "sort-array";

/**
 * Sorts the array and directly uses setMembers()
 * @param {array} arr
 * This arr should be an array of objects, the members.
 * @param {string} sortMethod
 * This string specified sort method.
 * @returns nothing
 */
function sortMembers(arr, sortMethod, setMembers) {
  let newMemberArr = arr.slice();
  if (sortMethod === "online") {
    sortArray(newMemberArr, {
      by: "online_status",
      order: "desc",
    });
  } else if (sortMethod === "class") {
    sortArray(newMemberArr, {
      by: "en",
      order: "desc",
      computed: {
        en: (member) => member.main_class[0].name.en,
      },
    });
  } else if (sortMethod === "name") {
    sortArray(newMemberArr, {
      by: "first",
      order: "asc",
      computed: {
        first: (member) => member.name.first,
      },
    });
  } else if (sortMethod === "outfitrank") {
    sortArray(newMemberArr, {
      by: "rank_ordinal",
      order: "asc",
    });
  } else if (sortMethod === "battlerank") {
    sortArray(newMemberArr, {
      by: "value",
      order: "desc",
      computed: {
        value: (member) => member.battle_rank.value,
      },
    });
  } else if (sortMethod === "kdr") {
    sortArray(newMemberArr, {
      by: "kdr",
      order: "desc",
    });
  }
  setMembers(newMemberArr);
}

export default sortMembers;
