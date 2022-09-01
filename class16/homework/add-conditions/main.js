// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// let day = prompt("What day is today?");
// switch (day) {
//   case "Monday":
//     console.log("Tuesday");
//     break;
//   case "Tuesday":
//     console.log("Wednesday");
//     break;
//   case "Wednesday":
//     console.log("Thursday");
//     break;
//   case "Thursday":
//     console.log("Friday");
//     break;
//   case "Friday":
//     console.log("Saturday");
//     break;
//   case "Saturday":
//     console.log("Sunday");
//     break;
//   case "Sunday":
//     console.log("Monday");
//     break;
//   default:
//     console.log("Invaid day");
// }

let month = prompt("What month you want to check? Give months number");
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 9 ||
  month === 11
) {
  console.log("This month has 31 days");
} else if (month < 1 || month > 12) {
  console.log("Invalid month number");
} else {
  console.log("This month has 30 days");
}
