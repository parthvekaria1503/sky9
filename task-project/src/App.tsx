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

// Layout component for routes that need Navbar and Footer
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

// Main App component with routing
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home with all components */}
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
        {/* Route for Products with only Navbar and Products */}
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
