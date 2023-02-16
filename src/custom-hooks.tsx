import { useEffect, useState } from "react";
import { ApiService } from "./Services/TodosService";
import { Todo } from "./Todo.type";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event: any) => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event: any, callback: (inputValue: string) => void) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    }
  };
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const api = new ApiService();

  useEffect(() => {
    api.getAllTodos()
    .then(data => {
      setTodos(data)
    })
  }, [])

  return {
    todos,

    addTodo: (text: string) => {
      if (text !== "") {
        api.addTodo({text, completed: false})
        .then(data => {
          setTodos([data!, ...todos])
        });
      }
    },

    toggleTodo: (todo: Todo) => {
      api.toggleTodo(todo)
      .then(data => {
        const updatedTodos = todos.map(todo => {
          if (todo.id === data.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });

        setTodos(updatedTodos);
      });
    },

    removeTodo: (todo: Todo) => {
      api.deleteTodo(todo)
      .then(data => {
        setTodos(data);
      })
    }
  };
};
