import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmpListing = () => {    
    const fetchEmployees = async () => {    
        try {
            const response = await fetch("http://localhost:8000/employee");
            console.log('Response Status:', response.status);
            
            if (!response.ok) throw new Error("Error fetching employees");
            const data = await response.json();
            console.log('Fetched Data:', data);
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error; // Rethrow the error to be handled in the query
        }
    };

    const { data: employees, error, isLoading } = useQuery(["employees"], fetchEmployees());
    // console.log('fetchEmployees', fetchEmployees);
    const [datas, setDatas] = useState(fetchEmployees());
    console.log();
    
    // console.log('employees', employees);
    
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

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
                        {/* <tbody>
                            {employees?.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Link to={`/employee/edit/${item.id}`} className="btn btn-success">Edit</Link>
                                        <Link to={`/employee/detail/${item.id}`} className="btn btn-primary">Details</Link>
                                        <button className="btn btn-danger" onClick={() => {
                                            if (window.confirm('Do you want to remove?')) {
                                                fetch(`http://localhost:8000/employee/${item.id}`, { method: "DELETE" })
                                                    .then(() => {
                                                        alert('Removed successfully.');
                                                        // Optionally trigger a refetch here
                                                    })
                                                    .catch(err => console.log(err.message));
                                            }
                                        }}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmpListing;
