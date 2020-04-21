import React from "react";
const styles = {
  border: "1px solid #1890ff",
};
const User = (props) => {
  const { id, name, username, email } = props;
  return (
    <div style={styles}>
      <p> ID: {id} </p>
      <h4>Name: {name} </h4>
      <h4>username: {username} </h4>
      <h4>email: {email} </h4>
    </div>
  );
};

export default User;
