import { DeleteOutlined } from "@mui/icons-material";
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import React from "react";
import { Todo } from "./Todo.type";

interface TodoListItemProps {
  todo: Todo;
  divider: boolean;
  onCheckBoxToggle: () => void;
  onButtonClick: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = React.memo(
  ({ todo, divider, onCheckBoxToggle, onButtonClick }) => (
    <ListItem divider={divider}>
      <Checkbox onClick={onCheckBoxToggle} checked={todo.completed} disableRipple />
      <ListItemText primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

export default TodoListItem;
