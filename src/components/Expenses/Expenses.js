import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  let expensesWrapper = props.expenses.map((expense) => {
    return <ExpenseItem expense={expense} key={expense.id} />;
  });

  return <Card className="expenses">{expensesWrapper}</Card>;
};

export default Expenses;
