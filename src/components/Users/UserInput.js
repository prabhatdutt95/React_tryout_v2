import { useState } from "react";
import "./UserInput.css";

import Modal from "../UI/Modal";

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({
    enteredUsername: "",
    enteredAge: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userNameChangeHandler = (_) => {
    setUserInput((previousState) => {
      return { ...userInput, enteredUsername: _.target.value };
    });
  };

  const userAgeChangeHandler = (_) => {
    setUserInput((previousState) => {
      return { ...userInput, enteredAge: _.target.value };
    });
  };

  const cancelHandler = () => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredUsername: "",
        enteredAge: "",
      };
    });
    setIsSubmitted(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (userInput.enteredUsername !== "" && userInput.enteredAge !== "") {
      const userData = {
        username: userInput.enteredUsername,
        age: userInput.enteredAge,
      };
      props.onSaveUserData(userData);
      cancelHandler();
    } else {
      if (userInput.enteredUsername === "") {
        setErrorMessage((previousState) => {
          return previousState + "Username is missing. ";
        });
      }
      if (userInput.enteredAge === "") {
        setErrorMessage((previousState) => {
          return previousState + "Age is missing.";
        });
      }
      setShowModal(true);
    }
  };

  const modalHandler = (_) => {
    setShowModal(false);
    setErrorMessage("");
  };

  return (
    <form className="new_user_form" onSubmit={submitHandler}>
      <div className="new_user__controls">
        <div className="new_user__control">
          <label>Username</label>
          <input
            className={
              isSubmitted && userInput.enteredUsername === ""
                ? "invalid_field"
                : "valid_field"
            }
            type="text"
            value={userInput.enteredUsername}
            onChange={userNameChangeHandler}
            placeholder="Enter the Username"
          />
        </div>
        <div className="new_user__control">
          <label>Age (Years)</label>
          <input
            className={
              isSubmitted && userInput.enteredAge === ""
                ? "invalid_field"
                : "valid_field"
            }
            type="number"
            placeholder="Enter the Age"
            value={userInput.enteredAge}
            onChange={userAgeChangeHandler}
          />
        </div>
        <div className="new_user__actions">
          <button type="submit">Add User</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          errorMessage={errorMessage}
          handleClose={modalHandler}
        />
      )}
    </form>
  );
};

export default UserInput;
