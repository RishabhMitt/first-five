import React, { useState } from "react";
// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";
// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];
const App = () => {
  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, //open 24 hours
      close: 24,
    },
  };

  // Object.keys is used to access property names
  const properties = Object.keys(openingHours);
  console.log("cghj", properties);
  let openStr = `We are open on ${properties.length} days:`;
  for (const day of properties) {
    openStr += `${day},`;
  }

  //Object.values is used to access property values
  const values = Object.values(openingHours);
  console.log(values);

  //Object.entries is used to access keys and values both
  const entries = Object.entries(openingHours);
  for (const [key, { open, close }] of entries) {
    console.log(`on ${key} we open at ${open} and close at ${close}`);
  }

  //Object.assign is used to combine or merge 2 or more objects together
  const course = {
    name: "web programming",
    score: 92,
  };
  const grade = {
    score: 79,
  };
  const finalResult = Object.assign(course, grade, { teacher: "Mrs Water" });
  console.log(finalResult);
  console.log("finalResult", finalResult);

  //Object.assign is also used to coby an object
  const copy = Object.assign({}, finalResult);
  console.log(copy);

  //Object.assign is also used to override a default value
  function printName(options) {
    const defaults = {
      firstName: "Steve",
      lastName: "Bottle",
    };

    options = Object.assign(defaults, options);
    console.log(`${options.firstName} ${options.lastName}`);
  }

  printName({ lastName: "Roggers" });

  return (
    <div>
      <h1>{properties}</h1>
      <h1>{`we are open on ${properties.length} days`}</h1>
      <h1>{openStr}</h1>
      <h1></h1>

      {/* <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} /> */}
    </div>
  );
};

export default App;
