
import axios from 'axios'

export async function getAllTodos() {
    try{
        const response = await fetch('https://a87d-2600-1700-9778-d210-6c8c-516d-e72d-c4ae.ngrok.io/todos/get-todos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function addNewTodo(todo: {text: string, completed: boolean}){
    try{
        const response = await fetch('https://a87d-2600-1700-9778-d210-6c8c-516d-e72d-c4ae.ngrok.io/todos/new-todo', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo)
        })
        return await response.json()
    }catch(error){
        
    }
}

export async function toggleTodo(todo: Todo){
    try{
        const response = await fetch(`https://a87d-2600-1700-9778-d210-6c8c-516d-e72d-c4ae.ngrok.io/todos/toggle-todo`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo)
        })
        return await response.json()
    }catch(error){
        
    }
}

export async function deleteCompleted(todos: Todo[]){
    try{
        const completedTodos = todos.filter(todo => todo.completed).map(todo => todo.id)
        await axios({
            method: 'post',
            url: `https://a87d-2600-1700-9778-d210-6c8c-516d-e72d-c4ae.ngrok.io/todos/delete-todos`, 
            data: completedTodos,
            headers: {'Content-Type': 'application/json'},    
        });

        return await getAllTodos()
    }catch(error){
        
    }
}

