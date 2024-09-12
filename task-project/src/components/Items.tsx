import { useState, useEffect } from "react";
import img1 from "../assets/first-image.jpg";
import "../App.css";

interface User {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Items = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("network response not ok");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("error ");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) return <div>loading..</div>;
  if (error) return <div>error: {error}</div>;
  if (!users) return <div>no data found</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem < users.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="main-item" id="home">
      <div className="header">
        <div className="min-card">
          {currentItems.map((user) => (
            <div className="item-box-head" key={user.id}>
              <div className="item-card-head">
                <img src={user.image} alt={user.title} className="card-img-fetch"/>
              </div>
              <div className="item-card-head">
                <p className="item-text1">{user.title}</p>
                <p className="item-text2">{user.description}</p>
                <p className="item-text3">Friday . 25 June 2045</p>
                <br />
                <br />
                <hr className="hr-line" />
              </div>
            </div>
          ))}
          <div className="btnstyle">
            <button
              className="btn-pre1"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <button
              className="btn-next1"
              onClick={handleNextPage}
              disabled={indexOfLastItem >= users.length}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      <div className="item-section2">
        <img className="img1-style" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Items;
