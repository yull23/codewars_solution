function formatDate(inputDate) {
  const date = new Date(inputDate);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  const formattedDate = `${dayOfWeek}, ${month} ${day < 10 ? "0" : ""}${day}`;

  return formattedDate; // "Saturday, October 01"
}

const dateString = "2021-10-01";

console.log(formatDate(dateString));
