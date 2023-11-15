import { Paper, List, Grid, Box } from "@mui/material";
import React from "react";
import { Todo } from "./Todo.type";
import TodoListItem from "./todo-list-item";

interface TodoListProps {
  todos: Todo[];
  onItemCheck: (todo: Todo) => void;
  onItemRemove: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = React.memo(({ todos, onItemCheck, onItemRemove }) => {
  return (
    <Paper style={{ margin: 16, background: '' }}>
      {todos?.length > 0 && (
        <List sx={{backgroundColor: ''}}>
          {todos.map(todo => (
            <TodoListItem
              todo={todo}
              key={`TodoItem.${todo.id}`}
              divider={todos.indexOf(todo) === todos.length - 1 ? false : true}
              onButtonClick={() => onItemRemove(todo)}
              onCheckBoxToggle={() => onItemCheck(todo)}
            />
          ))}
        </List>
        )
      }
    </Paper>
    )
  });

export default TodoList;
