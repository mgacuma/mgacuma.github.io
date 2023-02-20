import React from "react";

import { useInputValue, useTodos } from "./components/custom-hooks";

import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";
import Box from "@mui/material/Box/Box";

const TodoApp = React.memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Box className="TodoApp" >
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        todos={todos}
        onItemCheck={toggleTodo}
        onItemRemove={removeTodo}
      />
    </Box>
  );
});

export default TodoApp
