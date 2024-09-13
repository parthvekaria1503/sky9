import React, {useState, useEffect, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
const LazyItem = React.lazy(()=>import('./components/Items'))
// import Items from "./components/Items";
import Service from "./components/Service";
import Products from "./components/Products";
import ProductsItem from "./components/ProductsItem";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Permanent from "./components/Permanent";
import Loader from "./components/Loader";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Permanent />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading && <Loader />}
    {!loading && (
    <Router>
      <Routes>
        <Route path="/" element={
            <MainLayout>
              <Suspense fallback={<div>loading</div>}>
              <LazyItem/>
              </Suspense>
              {/* <Items /> */}
              <Service />
              <ProductsItem />
              <About />
              <Contact />
            </MainLayout>
          }
        />
        <Route path="/products" element={
            <>
              <Navbar />
              <Products />
              <Permanent />
            </>
          }
        />
      </Routes>
    </Router>
    )}
    </>
  );
};

export default App;
