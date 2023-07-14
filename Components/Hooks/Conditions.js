/* ===============================================
                Fetch User Data 
================================================ */

/* ===============[ Set Meal Condition ]================= */
let coupon = 7;
let time = parseInt(new Date().toTimeString().split(":")[0]);
let meal;
if (
  time < 5 ||
  time === 10 ||
  time === 11 ||
  time === 12 ||
  time === 13 ||
  time === 18 ||
  time === 19
) {
  meal = 0;
} else if (time > 4 && time < 10) {
  meal = "Lunch";
} else if (time > 13 && time < 18) {
  meal = "Dinner";
} else if (time > 19 || time <= 23) {
  meal = "Breakfast";
}
/* ====================================================== */
/* ===============[ Set Payment Condition ]================= */
const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = months[new Date().getMonth()] + '-' + new Date().getFullYear();
const nextMonth = months[new Date().getMonth()+1] + '-' + new Date().getFullYear();
const payMonth = fullMonths[new Date().getMonth()+1];
let twoDays = 1;
/* ====================================================== */

export { meal, coupon, twoDays, payMonth, nextMonth, month };
