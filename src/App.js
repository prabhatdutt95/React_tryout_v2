import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Television",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Restaurant",
      amount: 317,
      date: new Date(2022, 5, 2),
    },
  ];

  const [expenseData, setExpenseData] = useState([...expenses]);

  const expenseDataChangeHandler = (event) => {
    setExpenseData((previousState) => {
      return [...previousState, event];
    });
  };

  const saveDataHandler = (enteredExpenseData) => {
    expenseDataChangeHandler(enteredExpenseData);
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={saveDataHandler} />
      <Expenses expenses={expenseData} />
    </div>
  );
};

export default App;
