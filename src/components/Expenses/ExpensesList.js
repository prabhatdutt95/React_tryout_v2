import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  /* Abuse of Javascript; Anything after && is returned if first condition is true
        {filteredExpense.length === 0 && <p>No Expenses found!</p>}
        {filteredExpense.length > 0 && expensesWrapper} */
  // expensesContent

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
