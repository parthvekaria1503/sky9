import UserForm from "./Components/Organisms/UserForm";
import "./index.css"
import UserTable from "./Components/Organisms/UserTable";
import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <UserForm />
      <UserTable users={users} />
      {/* <UserTable  users={[]} /> */}
    </div>
  );
};

export default App;
