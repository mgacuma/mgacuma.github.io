import { Paper, List } from "@mui/material";
import React from "react";
import { Todo } from "../Todo.type";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  items: Todo[];
  onItemCheck: (id: number) => void;
  onItemRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = React.memo(({ items, onItemCheck, onItemRemove }) => (
  <>
    {items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {items.map((todo, id) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${id}`}
              divider={id !== items.length - 1}
              onButtonClick={() => onItemRemove(id)}
              onCheckBoxToggle={() => onItemCheck(id)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
