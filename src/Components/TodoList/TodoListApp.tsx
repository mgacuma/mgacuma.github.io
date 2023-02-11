import React, { useEffect } from "react";
import { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { AddTodo, DeleteTodos, Todo, ToggleComplete } from "./Todo";
import { TodoList } from "./TodoList";
import { getAllTodos, addNewTodo, toggleTodo, deleteCompleted } from "../../Services/TodosService";
import './TodoListApp.css'

const TodoListApp: React.FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
      setIsLoading(true);
      getAllTodos()
      .then(data => {
        setIsLoading(false)
        setTodos(data)
      })
    }, []);
  
    const toggleComplete: ToggleComplete = selectedTodo => {
      toggleTodo(selectedTodo)
      .then(data => {
        const updatedTodos = todos.map(todo => {
          if (todo.id === data.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });

        setTodos(updatedTodos);
      })
    };
  
    const addTodo: AddTodo = newTodo => {
      addNewTodo({text: newTodo, completed: false})
      .then(data => {
        setTodos([data, ...todos])});
    };

    const deleteTodos: DeleteTodos = () => {
      deleteCompleted(todos)
      .then(data => {
        setTodos(data);
      });
    }
  
    return (
      <React.Fragment>
        <div className="main">
            <AddTodoForm addTodo={addTodo} deleteTodos={deleteTodos} />
            {isLoading && <p>loading todos...</p>}
            {todos && <TodoList todos={todos} toggleComplete={toggleComplete} />}
        </div>
      </React.Fragment>
    );
  };
  
  export default TodoListApp;