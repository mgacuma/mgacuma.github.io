import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo, DeleteTodos } from "./Todo";

interface AddTodoFormProps {
  addTodo: AddTodo;
  deleteTodos: DeleteTodos;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo, deleteTodos }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //pushes up to app todos[]
    addTodo(newTodo);

    //reset value
    setNewTodo("");
  };

  const handleDelete = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //pushes up to app todos[]
    deleteTodos();
  };

  return (
    <div className="AddTodo">
      <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add Todo
        </button>
        <button type="submit" onClick={(e) => handleDelete(e)}>
          Delete Checked
        </button>
      </form>
    </div>
  );
};
