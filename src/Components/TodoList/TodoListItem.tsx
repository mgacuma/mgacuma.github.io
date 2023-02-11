import React from "react";
import { Todo, ToggleComplete } from "./Todo";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li>
      <label className={todo.completed ? "completed" : undefined}>
        {todo.id+'. '}{todo.text}
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.completed}
        />
      </label>
    </li>
  );
};
