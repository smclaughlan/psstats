import sortArray from "sort-array";

const sortMethods = {
  online: (newMemberArr) =>
    sortArray(newMemberArr, {
      by: "online_status",
      order: "desc",
    }),
  class: (newMemberArr) =>
    sortArray(newMemberArr, {
      by: "en",
      order: "desc",
      computed: {
        en: (member) => member.main_class[0].name.en,
      },
    }),
  name: (newMemberArr) =>
    sortArray(newMemberArr, {
      by: "first",
      order: "asc",
      computed: {
        first: (member) => member.name.first,
      },
    }),
  outfitrank: (newMemberArr) =>
    sortArray(newMemberArr, {
      by: "rank_ordinal",
      order: "asc",
    }),
  battlerank: (newMemberArr) =>
    sortArray(newMemberArr, {
      by: "value",
      order: "desc",
      computed: {
        value: (member) => member.battle_rank.value,
      },
    }),
  kdr: (newMemberArr) =>
    sortArray(newMemberArr, {
      by: "kdr",
      order: "desc",
    }),
};

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
  const method = sortMethods[sortMethod];
  method(newMemberArr);
  setMembers(newMemberArr);
}

export default sortMembers;
