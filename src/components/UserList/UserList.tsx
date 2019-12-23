import React from "react";
import { UserListProps } from "./interfaces";

const UserList: React.FC<UserListProps> = ({ users }) => {
  const content = users.map(user => (
    <div
      style={{ width: "10%", margin: "1rem auto", border: "1px solid black" }}
    >
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  ));

  return <>{content}</>;
};

export default UserList;
