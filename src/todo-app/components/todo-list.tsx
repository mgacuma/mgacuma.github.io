import { Paper, List } from "@mui/material";
import React from "react";
import { Todo } from "./Todo.type";
import TodoListItem from "./todo-list-item";

interface TodoListProps {
  todos: Todo[];
  onItemCheck: (todo: Todo) => void;
  onItemRemove: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = React.memo(({ todos, onItemCheck, onItemRemove }) => (
  <>
    {todos.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {todos.map(todo => (
            <TodoListItem
              todo={todo}
              key={`TodoItem.${todo.id}`}
              divider={true}
              onButtonClick={() => onItemRemove(todo)}
              onCheckBoxToggle={() => onItemCheck(todo)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
