import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeaderComponent from "./header";
import ProductsComponent from "./products";
import { Routes, Route } from "react-router-dom";
import Product1Component from "./product_1_details";
import Product2Component from "./product_2_details";
import Product3Component from "./product_3_details";
import Product4Component from "./product_4_details";
import Product5Component from "./product_5_details";
import Product6Component from "./product_6_details";
import Product7Component from "./product_7_details";
import Product8Component from "./product_8_details";
import Model from "./modal";
import { useState } from "react";

function App() {

  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="App">

      <HeaderComponent setSearchKeyword={setSearchKeyword} />

      <Routes>
        <Route path="/" element={<ProductsComponent searchKeyword={searchKeyword} />} />
        <Route path="/details" element={<Product1Component />} />
        <Route path="/details2" element={<Product2Component />} />
        <Route path="/details3" element={<Product3Component />} />
        <Route path="/details4" element={<Product4Component />} />
        <Route path="/details5" element={<Product5Component />} />
        <Route path="/details6" element={<Product6Component />} />
        <Route path="/details7" element={<Product7Component />} />
        <Route path="/details8" element={<Product8Component />} />
        <Route path="/modal" element={<Model />} />
      </Routes>
    </div>
  );
}

export default App;
