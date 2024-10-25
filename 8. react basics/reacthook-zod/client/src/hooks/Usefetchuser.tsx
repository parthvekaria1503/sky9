import { useEffect, useState } from "react";
import { FormData } from "../types/Formdata";

const useFetchUsers = () => {
  const [users, setUsers] = useState<FormData[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3002/users");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, fetchUsers };
};

export default useFetchUsers;
