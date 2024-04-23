import "./App.css";
import Home from "./Component/Home";
import NavBar from "./Component/navBar";
import { Routes, Route } from "react-router-dom";
import Products from "./Component/products";
import Product from "./Component/product";
import ProductCart from "./Component/ProductCart";




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<ProductCart/>} />

      </Routes>
    </>
    
  );
}

export default App;
