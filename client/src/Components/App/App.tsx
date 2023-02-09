import React, { useState } from "react";
import Header from "../Header/Header";
import TodoListApp from "../TodoList/TodoListApp";
import './App.css'

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Header />
      <TodoListApp />
    </React.Fragment>
  );
};

export default App;
