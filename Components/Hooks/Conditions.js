/* ===============================================
                Fetch User Data 
================================================ */
const emailValidity =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* ===============[ Set Meal Condition ]================= */
const date = new Date();
// let time = date.toTimeString().split(":")[0];
// time = parseInt(time);
const today = date.toLocaleDateString();
date.setDate(date.getDate() + 1);
const tomorrow = date.toLocaleDateString();
let day = today;
let time = {
  h: parseInt(new Date().toTimeString().split(":")[0]),
  m: parseInt(new Date().toTimeString().split(":")[1]),
  s: parseInt(new Date().toTimeString().split(":")[2]),
};
let meal;
if (
  time.h < 5 ||
  time.h === 10 ||
  time.h === 11 ||
  time.h === 12 ||
  time.h === 13 ||
  time.h === 18 ||
  time.h === 19
) {
  meal = 0;
} else if (time.h > 4 && time.h < 10) {
  meal = "Lunch";
} else if (time.h > 13 && time.h < 18) {
  meal = "Dinner";
} else if (time.h > 19 || time.h <= 23) {
  meal = "Breakfast";
  day = tomorrow;
}
let checkMealTime;
if (
  time.h < 5 ||
  time.h === 10 ||
  time.h === 11 ||
  time.h === 12 ||
  time.h === 13 ||
  time.h === 18 ||
  time.h === 19
) {
  checkMealTime = 0;
} else if (time.h > 4 && time.h < 12) {
  checkMealTime = "Breakfast";
} else if (time.h > 12 && time.h < 17) {
  checkMealTime = "Lunch";
} else if (time.h > 19 || time.h <= 23) {
  checkMealTime = "Dinner";
}
/* ====================================================== */
/* ===============[ Set Payment Condition ]================= */
const fullMonths = [
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
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();
const nextMonth =
  months[new Date().getMonth()] + "-" + new Date().getFullYear();
const payMonth = fullMonths[new Date().getMonth() + 1];
let twoDays = 1;
/* ====================================================== */

const getTimeAndData = (i) => {
  return new Date(parseInt(i?.toString().substring(0, 8), 16) * 1000);
};

export {
  meal,
  day,
  today,
  twoDays,
  payMonth,
  nextMonth,
  month,
  emailValidity,
  time,
  checkMealTime,
  getTimeAndData
};
