import { useState } from "react";
import UserInput from "./components/Users/UserInput";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [userList, setUserList] = useState([]);
  // const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

  const saveDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    setUserList((previousState) => {
      return [...userList, userData];
    });
  };

  return (
    <div>
      <UserInput onSaveUserData={saveDataHandler} />
      <UsersList userList={userList} />
    </div>
  );
};

export default App;
