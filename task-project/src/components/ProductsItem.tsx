import { useState, useEffect } from "react";
import "../App.css";

interface User {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Productsitem = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

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

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-heading">
      <p className='product-head-text'>Our Products</p>
      
        <div className="main-product">
        {currentItems.map((user, item) => (
            <div className="cardeffect" key={user.id}>
              <div className="cardeffect-image">
                <img src={user.image} alt="Cardeffect Image" className="img-product" />
                <div className="textonimage">
                  <p>Number {item +1}</p>
                </div>
              </div>
              <div className="cardeffect-content">
                <h3>{user.title}</h3>
                <p></p>
              </div>
            </div>
            ))}
        </div>
        <div className="pagination">
          {pageNumbers.map(number => (
            <button 
              key={number} 
              className={`page-button ${currentPage === number ? 'active' : ''}`} 
              onClick={() => handlePageChange(number)}>{number}</button>
          ))}
        </div>
      </div>
  );
}

export default Productsitem;
