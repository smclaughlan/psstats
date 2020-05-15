const timePlurality = (num, lengthSingular) => {
  if (num === 0) return "";
  if (num === 1) return `${num} ${lengthSingular}`;
  if (num > 1) return `${num} ${lengthSingular}s`;
}

export const timeFormat = minutes => {
  let years = 0;
  let months = 0;
  let weeks = 0;
  let days = 0;
  let minutesRemaining = 0;
  while (minutes > 525960) {
    years++;
    minutes -= 525960;
  }
  while (minutes > 43830) {
    months++;
    minutes -= 43830;
  }
  while (minutes > 10080) {
    weeks++;
    minutes -= 10080;
  }
  while (minutes > 1440) {
    days++;
    minutes -= 1440;
  }
  minutesRemaining = minutes;
  if (years) {
    return `${timePlurality(years, "year")} ${timePlurality(months, "month")} ${timePlurality(weeks, "week")} ${timePlurality(days, "day")} ${timePlurality(minutesRemaining, "minute")}`;
  }
  if (months) {
    return `${timePlurality(months, "month")} ${timePlurality(weeks, "week")} ${timePlurality(days, "day")} ${timePlurality(minutesRemaining, "minute")}`;
  }
  if (weeks) {
    return `${weeks} weeks, ${days} days, ${minutesRemaining} minutes`;
  }
  if (days) {
    return `${days} days, ${minutesRemaining} minutes`;
  }
  return `${minutesRemaining} minutes`;
}

export const commaFormat = (stringNum) => {
  return stringNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
