function formatMemData(unsortedMembers) {
  return unsortedMembers.map((member) => {
    member.rank_ordinal = parseInt(member.rank_ordinal);
    member.battle_rank.value = parseInt(
      member.battle_rank.value
    );
    let tempKDR = (
      parseInt(member.stats_history[1].all_time) /
      parseInt(member.stats_history[0].all_time)
    ).toString();
    if (isNaN(tempKDR)) {
      member.kdr = 0;
    } else if (tempKDR.indexOf(".") === -1) {
      //no dot, use whole number
      member.kdr = tempKDR;
    } else {
      let idxToSplit = tempKDR.indexOf(".");
      let startKDR = tempKDR.slice(0, idxToSplit);
      let endKDR = tempKDR.slice(
        idxToSplit,
        idxToSplit + 3
      );
      member.kdr = startKDR + endKDR;
    }
    return member;
  });
}

export default formatMemData;
