import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  let expensesWrapper = props.expenses.map((expense) => {
    return <ExpenseItem expense={expense} key={expense.id} />;
  });

  const [pickedYear, setPickedYear] = useState("2019");
  const savePickedYearHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          pickedYear={pickedYear}
          onSelect={savePickedYearHandler}
        />
        {expensesWrapper}
      </Card>
    </div>
  );
};

export default Expenses;
