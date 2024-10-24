import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const empSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().nonempty("Phone is required"),
    active: z.boolean(),
});

const fetchEmployee = async (empid) => {
    const response = await fetch(`http://localhost:8000/employee/${empid}`);
    if (!response.ok) throw new Error("Error fetching employee data");
    return response.json();
};

const EmpEdit = () => {
    const { empid } = useParams();
    const navigate = useNavigate();
    const { data: empdata, error, isLoading } = useQuery(["employee", empid], () => fetchEmployee(empid));
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        active: true,
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (empdata) {
            setFormData(empdata);
        }
    }, [empdata]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            empSchema.parse(formData);
            await fetch(`http://localhost:8000/employee/${empid}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            alert('Updated successfully.');
            navigate('/');
        } catch (err) {
            const validationErrors = {};
            if (err.errors) {
                err.errors.forEach((error) => {
                    validationErrors[error.path[0]] = error.message;
                });
            }
            setErrors(validationErrors);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-title">
                        <h2>Edit Employee</h2>
                    </div>
                    <div className="card-body">
                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                        {errors.phone && <span className="text-danger">{errors.phone}</span>}
                        <button type="submit">Save</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmpEdit;
