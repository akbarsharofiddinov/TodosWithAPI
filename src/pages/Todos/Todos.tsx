import React from "react";
import { TodosList } from "@components/index";

const Todos: React.FC = () => {
  return (
    <section className="section-app">
      <div className="container">
        <h1>Todos</h1>
        <TodosList />
      </div>
    </section>
  );
};

export default Todos;
