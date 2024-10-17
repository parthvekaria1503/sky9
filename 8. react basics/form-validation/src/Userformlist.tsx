import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const { data, isLoading, isError } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => fetch('http://localhost:3000/users').then((res) => res.json()),
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
