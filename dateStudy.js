const addDays = (date,period) => {
    date.setDate(date.getDate() + period);
};

let date = new Date();

console.log("Todays date",date);

addDays(date,2);
console.log("Future Date", date);