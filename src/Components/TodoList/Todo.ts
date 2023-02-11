export type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
  
export type ToggleComplete = (selectedTodo: Todo) => void;
  
export type AddTodo = (newTodo: string) => void;

export type DeleteTodos = () => void;
  