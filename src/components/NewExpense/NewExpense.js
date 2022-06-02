import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const displayFormHandler = () => {
    setDisplayExpenseForm((previousState) => !previousState);
  };

  return (
    <div className="new-expense">
      {!displayExpenseForm && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
      {displayExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveDataHandler}
          clickedCancel={displayFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
