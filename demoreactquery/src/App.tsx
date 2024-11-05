import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const queryClient = new QueryClient();

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UserForm />
        <UserTable users={users} />
      </QueryClientProvider>
    </div>
  );
};

export default App;

