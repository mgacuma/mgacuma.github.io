import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import { useInputValue, useTodos } from "./custom-hooks";

import Layout from "./components/Layout";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const TodoApp = React.memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={checkTodo}
        onItemRemove={removeTodo}
      />
    </Layout>
  );
});

ReactDOM.render(<TodoApp />, document.getElementById("root"));
