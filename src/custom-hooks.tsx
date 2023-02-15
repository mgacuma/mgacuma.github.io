import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    }
  };
};

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (text) => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            completed: false
          })
        );
      }
    },
    checkTodo: (id: number) => {
      setTodos(
        todos.map((todo, index) => {
          if (id === index) {
            todo.completed = !todo.completed;
          }

          return todo;
        })
      );
    },
    removeTodo: (id: number) => {
      setTodos(todos.filter((_, index) => id !== index));
    }
  };
};
