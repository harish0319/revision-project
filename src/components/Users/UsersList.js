// Write your code here:
import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  const users = props.users || [];

  return (
    <Card className="users">
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;