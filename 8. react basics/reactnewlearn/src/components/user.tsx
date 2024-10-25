import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface User {
  id?: number; // Optional for adding a user
  name: string;
  surname: string;
  email: string;
  password: string;
  type: string;
  city?: string; // Optional field
  subType?: string; // Optional field
  additionalField?: string; // Optional field
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const addUser = async (newUser: User): Promise<User> => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  });
  return response.json();
};

const updateUser = async (updatedUser: User): Promise<User> => {
  if (!updatedUser.id) throw new Error("User ID is required for update");
  const response = await fetch(`http://localhost:3001/users/${updatedUser.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser),
  });
  return response.json();
};

const deleteUser = async (id: number): Promise<void> => {
  await fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' });
};

const UserForm: React.FC = () => {
  const queryClient = useQueryClient();
  const { control, handleSubmit, formState: { errors } } = useForm<User>();
  
  // Change here: Use a tuple for the query key
  const { data: users = [], isLoading } = useQuery<User[], Error>(['users'], fetchUsers);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const mutation = useMutation<User, Error, User>({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });

  const updateMutation = useMutation<User, Error, User>({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      setIsEditing(false);
      setCurrentUserId(null);
    },
  });

  const deleteMutation = useMutation<void, Error, number>({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });

  const onSubmit = (data: User) => {
    if (isEditing && currentUserId) {
      updateMutation.mutate({ ...data, id: currentUserId });
    } else {
      mutation.mutate(data);
    }
  };

  const handleEdit = (user: User) => {
    setIsEditing(true);
    setCurrentUserId(user.id);
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="w-full bg-slate-700 text-white text-center text-5xl">User Form</h1>

        <div className="flex flex-row w-full justify-center">
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input {...field} className="border w-full p-2" placeholder="Enter Name" />
              )}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="surname"
              control={control}
              rules={{ required: "Surname is required" }}
              render={({ field }) => (
                <input {...field} className="border w-full p-2" placeholder="Enter Surname" />
              )}
            />
            {errors.surname && <span className="text-red-500">{errors.surname.message}</span>}
          </div>
        </div>

        <div className="flex flex-row w-full justify-center">
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input {...field} className="border w-full p-2" placeholder="Enter E-Mail" disabled={isEditing} />
              )}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input {...field} type="password" className="border w-full p-2" placeholder="Enter Password" />
              )}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-3 rounded hover:bg-slate-950"
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
      </form>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-center bg-slate-600 text-cyan-200 w-full mt-10 text-4xl">User Data Displayed</h1>
        <table className="w-full text-sm overflow-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 pt-2 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td scope="col" className="px-6 py-3">Name</td>
              <td scope="col" className="px-6 py-3">Surname</td>
              <td scope="col" className="px-6 py-3">E-Mail</td>
              <td scope="col" className="px-6 py-3">Password</td>
              <td scope="col" className="px-6 py-3">Action</td>
            </tr>
          </thead>
          <tbody className="w-full">
            {users.map((user) => (
              <tr key={user.id} className="border w-full">
                <td className="text-slate-950 text-base p-3">{user.name}</td>
                <td className="text-slate-950 text-base p-3">{user.surname}</td>
                <td className="text-slate-950 text-base p-3">{user.email}</td>
                <td className="text-slate-950 text-base p-3">{user.password}</td>
                <td>
                  <button 
                    onClick={() => handleEdit(user)} 
                    className="bg-green-900 p-2 rounded text-white hover:bg-green-500 m-1"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id!)} // Ensure id is not undefined
                    className="bg-red-900 p-2 rounded text-white hover:bg-red-500 m-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserForm;
