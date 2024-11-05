import React from 'react';

const UserTable = ({users}) => (
  <table className="w-full text-sm overflow-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 pt-2 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>E-Mail</th>
        <th>Password</th>
        <th>Type</th>
        <th>City</th>
        <th>Sub-Type</th>
        <th>Additional Field</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.email}>
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.type}</td>
          <td>{user.city || 'N/A'}</td>
          <td>{user.subType || 'N/A'}</td>
          <td>{user.additionalField || 'N/A'}</td>
          <td>
            <button className="bg-green-900 p-2 rounded text-white hover:bg-green-500 m-1">Update</button>
            <button className="bg-red-900 p-2 rounded text-white hover:bg-red-500 m-1">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
