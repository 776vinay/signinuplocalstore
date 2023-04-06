import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import UserData from "./UserData";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSignUp = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleLogin = (userCredentials) => {
    const foundUser = users.find(
      (user) =>
        user.username === userCredentials.username &&
        user.password === userCredentials.password
    );
    if (foundUser) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div>
      <SignUp onSignUp={handleSignUp} />
      <Login onLogin={handleLogin} />
      <UserData data={users} />
    </div>
  );
}

export default App;
