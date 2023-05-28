import React from "react";
import { ProductsTable } from "@components/index";

const Products: React.FC = () => {
  return (
    <section className="section-app">
      <div className="container">
        <h1>Products</h1>
        <ProductsTable />
      </div>
    </section>
  );
};

export default Products;
