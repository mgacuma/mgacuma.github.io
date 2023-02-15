import { DeleteOutlined } from "@mui/icons-material";
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import React from "react";

interface TodoListItemProps {
  text: string;
  divider: boolean;
  completed: boolean;
  onCheckBoxToggle: () => void;
  onButtonClick: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = React.memo(
  ({ text, divider, completed, onCheckBoxToggle, onButtonClick }) => (
    <ListItem divider={divider}>
      <Checkbox onClick={onCheckBoxToggle} checked={completed} disableRipple />
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

export default TodoListItem;
