import { useState, useEffect } from "react";
import "../App.css";

interface User {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Products = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('network not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('error');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchproduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!users) return <div>No users found</div>;

  return (
    <div className="product-heading">
      <p className='product-head-text'>Our Products</p>
      <div className="product-page-main">
        {users.map((product, index) => (
          <div className="cardeffect" key={product.id}>
            <div className="cardeffect-image">
              <img src={product.image} alt="Cardeffect Image" className="img-product" />
              <div className="textonimage">
                <p>Number {index + 1}</p>
              </div>
            </div>
            <div className="cardeffect-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
