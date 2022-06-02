import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2021");

  const savePickedYearHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(pickedYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          pickedYear={pickedYear}
          onSelect={savePickedYearHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
