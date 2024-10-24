import React, { useEffect, useState } from 'react';

const TestFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/employee");
                if (!response.ok) throw new Error("Error fetching employees");
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            }
        };
        
        fetchData();
    }, []);
    
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;
    
    return (
        <div>
            <h2>Employee Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default TestFetch;
