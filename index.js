
const day = document.getElementById('day')

currentDay = moment().format("dddd"); 

console.log(currentDay);

if (currentDay === "Monday") {
  day.innerHTML = "11:00am to 11:00pm";
} else if (currentDay === "Tuesday") {
  day.innerHTML = "11:00am to 11:00pm";
} else if (currentDay === "Wednesday") {
  day.innerHTML = "11:00am to 1:30am";
} else if (currentDay === "Thursday") {
  day.innerHTML = "11:00am to 3:00am";
} else if (currentDay === "Friday") {
  day.innerHTML = "11:00am to 3:00am";
} else if (currentDay === "Saturday") {
  day.innerHTML = "11:00am to 3:00am";
} else if (currentDay === "Sunday") {
  day.innerHTML = "12:00pm to 1:30am";
};

