import "./UsersList.css";

const UsersList = (props) => {
  const content = (user) => {
    return (
      <div className="user_block">
        <p>
          {user.username} ({user.age} years old)
        </p>
      </div>
    );
  };

  if (props.userList.length === 0) {
    return (
      <div className="new_user_form">
        <h2>Found no Users!!</h2>
      </div>
    );
  }
  return (
    <div className="new_user_form">
      {props.userList.map((user) => {
        return content(user);
      })}
    </div>
  );
};

export default UsersList;
