import React from "react";
import { UserListProps } from "./interfaces";

const UserList: React.FC<UserListProps> = ({ users, deleteHandler }) => {
  const content = users.map((user, index) => (
    <div
      style={{ width: "10%", margin: "1rem auto", border: "1px solid black" }}
      key={index}
    >
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={hEvent => deleteHandler(hEvent, user)}>
        Delete This
      </button>
    </div>
  ));

  return <>{content}</>;
};

export default UserList;
