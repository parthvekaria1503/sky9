// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { z } from "zod";

// const empSchema = z.object({
//     name: z.string().nonempty("Name is required"),
//     email: z.string().email("Invalid email"),
//     phone: z.string().nonempty("Phone is required"),
//     active: z.boolean(),
// });

// const fetchEmployee = async (empid) => {
//     const response = await fetch(`http://localhost:8000/employee/${empid}`);
//     if (!response.ok) throw new Error("Error fetching employee data");
//     return response.json();
// };

// const EmpEdit = () => {
//     const { empid } = useParams();
//     const navigate = useNavigate();
//     const { data: empdata, error, isLoading } = useQuery(["employee", empid], () => fetchEmployee(empid));

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         active: true,
//     });
//     const [errors, setErrors] = useState({});

//     useEffect(() => {
//         if (empdata) {
//             setFormData(empdata);
//         }
//     }, [empdata]);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         try {
//             empSchema.parse(formData);
//             fetch(`http://localhost:8000/employee/${empid}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             }).then(() => {
//                 alert('Updated successfully.');
//                 navigate('/');
//             });
//         } catch (err) {
//             const validationErrors = {};
//             if (err.errors) {
//                 err.errors.forEach((error) => {
//                     validationErrors[error.path[0]] = error.message;
//                 });
//             }
//             setErrors(validationErrors);
//         }
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {/* Input fields similar to EmpCreate.js */}
//             </form>
//         </div>
//     );
// };

// export default EmpEdit;


import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchEmployees = async () => {
    const response = await fetch("http://localhost:8000/employee");
    if (!response.ok) throw new Error("Error fetching employees");
    return response.json();
};

const EmpListing = () => {
    const { data: employees, error, isLoading } = useQuery(["employees"], fetchEmployees);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Employee Listing</h2>
            <Link to="/employee/create" className="btn btn-primary">Add Employee</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>
                                <Link to={`/employee/detail/${employee.id}`} className="btn btn-info">Details</Link>
                                <Link to={`/employee/edit/${employee.id}`} className="btn btn-warning">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmpListing;



import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;












































import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><Link onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</Link>
                                            <Link onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</Link>
                                            <Link onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</Link>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;