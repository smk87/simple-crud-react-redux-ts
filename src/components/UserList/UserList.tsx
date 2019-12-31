import React from "react";
import { UserListProps } from "./interfaces";
import styles from "./styles";

const UserList: React.FC<UserListProps> = ({ users, deleteHandler }) => {
  const content = users.map((user, index) => (
    <div
      style={{ width: "10%", margin: "1rem auto", border: "1px solid black" }}
      key={index}
      className="user"
    >
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={hEvent => deleteHandler(hEvent, user)}>
        Delete This
      </button>

      <style jsx>{styles}</style>
    </div>
  ));

  return <>{content}</>;
};

export default UserList;
