import React from "react";
import { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { initialTodos } from "./initialTodos";
import { AddTodo, Todo, ToggleComplete } from "./Todo";
import { TodoList } from "./TodoList";
import './TodoListApp.css'

const TodoListApp: React.FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  
    const toggleComplete: ToggleComplete = selectedTodo => {
      const updatedTodos = todos.map(todo => {
        if (todo === selectedTodo) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    const addTodo: AddTodo = newTodo => {
      newTodo.trim() !== "" &&
        setTodos([...todos, { text: newTodo, complete: false }]);
    };
  
    return (
      <React.Fragment>
        <div className="main">
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} />
        </div>
      </React.Fragment>
    );
  };
  
  export default TodoListApp;