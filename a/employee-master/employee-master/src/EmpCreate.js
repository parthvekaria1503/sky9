import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const empSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().nonempty("Phone is required"),
    active: z.boolean(),
});

const EmpCreate = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        active: true,
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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
            await fetch("http://localhost:8000/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            alert('Saved successfully.');
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

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {errors.name && <span className="text-danger">{errors.name}</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                            {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input
                                                name="active"
                                                checked={formData.active}
                                                onChange={handleChange}
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpCreate;
