import React, { useState } from 'react';
import { z } from 'zod';

interface User {
    id: number;
    name: string;
    email: string;
}

const userSchema = z.object({
    id: z.number(),
    name: z.string()
        .min(4, { message: 'Name must be at least 4 characters long' })
        .regex(/^[a-zA-Z\s]+$/, { message: 'Name can only contain letters and spaces' }), // Restrict to letters and spaces
    email: z.string().email({ message: 'Invalid email address' }),
});

const UserForm: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<User>({ id: 0, name: '', email: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: undefined }); 
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            userSchema.parse(formData);
            if (formData.id) {
                setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
            } else {
                setUsers([...users, { ...formData, id: Date.now() }]);
            }
            setFormData({ id: 0, name: '', email: '' });
        } catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors: { name?: string; email?: string } = {};
                err.errors.forEach((error) => {
                    fieldErrors[error.path[0] as keyof typeof fieldErrors] = error.message;
                });
                setErrors(fieldErrors);
            }
        }
    };

    const handleEdit = (user: User) => {
        setFormData(user);
    };

    const handleDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">User Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                >
                    {formData.id ? 'Update' : 'Add'}
                </button>
            </form>

            <h2 className="text-xl font-semibold mt-8">User List</h2>
            <ul className="mt-4">
                {users.map((user) => (
                    <li key={user.id} className="flex justify-between items-center border-b py-2">
                        <span>{user.name} - {user.email}</span>
                        <div>
                            <button
                                onClick={() => handleEdit(user)}
                                className="text-blue-500 hover:underline mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
