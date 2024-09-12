import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Service from "./components/Service";
import Products from "./components/Products";
import ProductsItem from "./components/ProductsItem";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Permanent from "./components/Permanent";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Permanent />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Items />
              <Service />
              <ProductsItem />
              <About />
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
