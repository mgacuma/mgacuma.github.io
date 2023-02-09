import React from "react";

import './Header.css'

const Header: React.FC = () => {
    // const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  
    // const toggleComplete: ToggleComplete = selectedTodo => {
    //   const updatedTodos = todos.map(todo => {
    //     if (todo === selectedTodo) {
    //       return { ...todo, complete: !todo.complete };
    //     }
    //     return todo;
    //   });
    //   setTodos(updatedTodos);
    // };
  
    // const addTodo: AddTodo = newTodo => {
    //   newTodo.trim() !== "" &&
    //     setTodos([...todos, { text: newTodo, complete: false }]);
    // };
  
    return (
      <React.Fragment>
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
        {/* <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} /> */}
      </React.Fragment>
    );
  };
  
  export default Header;