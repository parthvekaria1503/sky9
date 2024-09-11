import React, { useState, useEffect } from "react";
import "../App.css";

interface User {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Products: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!users) return <div>No users found</div>;

  return (
    <div className="product-heading">
      <p className='product-head-text'>Our Products</p>
      <div className="product-page-main">
        {users.map(user => (
          <div className="cardeffect" key={user.id}>
          <div className="cardeffect-image">
            <img src={user.image} alt="Cardeffect Image" className="img-product" />
            <div className="textonimage">
              <p>Title</p>
            </div>
          </div>
          <div className="cardeffect-content">
            <h3>{user.title}</h3>
            <p></p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
