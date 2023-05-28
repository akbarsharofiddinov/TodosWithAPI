import React from "react";
import Layout from "@components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { CreateAndEdit, Home, Todos, Products } from "@pages/index";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="products" element={<Products />} />
          <Route path="/setting" element={<CreateAndEdit />} />
          <Route path="/edit/:id" element={<CreateAndEdit />} />
          <Route path="/editProduct/:id" element={<CreateAndEdit />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
