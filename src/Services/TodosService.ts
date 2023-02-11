import { Todo } from "../Components/TodoList/Todo";
import axios from 'axios'

export async function getAllTodos() {
    try{
        const response = await fetch('http://localhost:4000/todos/');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function addNewTodo(todo: {text: string, completed: boolean}){
    try{
        const response = await fetch('http://localhost:4000/todos/new-todo', {
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
        const response = await fetch(`http://localhost:4000/todos/toggle-todo`, {
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

        console.log('ping')
        await axios({
            method: 'post',
            url: `http://localhost:4000/todos/delete-todos`, 
            data: completedTodos,
            headers: {'Content-Type': 'application/json'},    
        })
        console.log('pong')

        const response = await fetch('http://localhost:4000/todos/');
        console.log(response, 'resss')
        return await response.json();
    }catch(error){
        
    }
}

