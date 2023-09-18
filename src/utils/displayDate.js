export default function displayDate(date) {
  //   console.log("date ====> ", date);
  let shortDate = "";
  for (let i = 0; i <= 9; i++) {
    date.split(" ");
    shortDate += date[i];
  }
  return shortDate;
}
