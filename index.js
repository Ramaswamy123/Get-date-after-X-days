const addDays = require("date-fns/addDays");
const Result = (days) => {
  const newDate = addDays(new Date(2020, 8, 22), days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
// console.log(Result(3));
module.exports = Result;
