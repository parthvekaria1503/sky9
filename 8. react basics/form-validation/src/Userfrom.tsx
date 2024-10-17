import React, { useState } from 'react';
interface User {
    id: number;
    name: string;
    email: string;
}

const UserForm: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<User | { id: 0; name: ''; email: '' }>({
        id: 0,
        name: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.id) {
            setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
        } else {
            setUsers([...users, { ...formData, id: Date.now() }]);
        }
        setFormData({ id: 0, name: '', email: '' }); 
    };

    const handleEdit = (user: User) => {
        setFormData(user);
    };

    const handleDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <button type="submit">{formData.id ? 'Update' : 'Add'}</button>
            </form>

            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
