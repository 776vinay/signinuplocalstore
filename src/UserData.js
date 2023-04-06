import React from "react";

function UserData({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserData;
