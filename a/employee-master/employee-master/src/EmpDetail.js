import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const fetchEmployee = async (empid) => {
    const response = await fetch(`http://localhost:8000/employee/${empid}`);
    if (!response.ok) throw new Error("Error fetching employee data");
    return response.json();
};

const EmpDetail = () => {
    const { empid } = useParams();
    const { data: empdata, error, isLoading } = useQuery(["employee", empid], () => fetchEmployee(empid));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    {empdata && (
                        <div>
                            <h2>{empdata.name} (ID: {empdata.id})</h2>
                            <h5>Email: {empdata.email}</h5>
                            <h5>Phone: {empdata.phone}</h5>
                            <Link to="/" className="btn btn-danger">Back to Listing</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmpDetail;
