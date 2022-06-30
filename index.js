const day = document.getElementById('day')
const dayMobile = document.getElementById("day-mobile");

currentDay = moment().format("dddd"); 

if (currentDay === "Monday") {
  day.innerHTML = "11:00am to 11:00pm";
  dayMobile.innerHTML = "11:00am to 11:00pm";
} else if (currentDay === "Tuesday") {
  day.innerHTML = "11:00am to 11:00pm";
  dayMobile.innerHTML = "11:00am to 11:00pm";
} else if (currentDay === "Wednesday") {
  day.innerHTML = "11:00am to 1:30am";
  dayMobile.innerHTML = "11:00am to 1:30am";
} else if (currentDay === "Thursday") {
  day.innerHTML = "11:00am to 3:00am";
  dayMobile.innerHTML = "11:00am to 3:00am";
} else if (currentDay === "Friday") {
  day.innerHTML = "11:00am to 3:00am";
  dayMobile.innerHTML = "11:00am to 3:00am";
} else if (currentDay === "Saturday") {
  day.innerHTML = "11:00am to 3:00am";
  dayMobile.innerHTML = "11:00am to 3:00am";
} else if (currentDay === "Sunday") {
  day.innerHTML = "12:00pm to 1:30am";
  dayMobile.innerHTML = "12:00pm to 1:30am";
};

