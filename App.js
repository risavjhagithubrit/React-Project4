import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      setUsers(Array.from(response.data));
    });
  }, []);

  const renderTable = () => {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.profilePic} alt={user.firstName} width="50" height="50" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const sortTable = (colIndex) => {
    // Sort the users array by the specified column index.
    users.sort((a, b) => {
      return a[colIndex] - b[colIndex];
    });

    // Set the updated users array to the state.
    setUsers([...users]);
  };

  return (
    <div>
      <h1>User Table</h1>
      <button onClick={() => sortTable(0)}>Sort by ID</button>
      <button onClick={() => sortTable(2)}>Sort by First Name</button>
      <button onClick={() => sortTable(3)}>Sort by Last Name</button>
      {renderTable()}
    </div>
  );
};

function App() {
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
