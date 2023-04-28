
import axios, { AxiosInstance } from 'axios'
import { Todo } from '../components/Todo.type';

export class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'https://ab73-2600-1700-9778-d210-d55c-4fea-67ec-eb28.ngrok-free.app/todos',
            timeout: 1000,
            headers: {'Content-Type': 'application/json'}
        })
    }

    async addTodo(todo: {text: string, completed: boolean}){
        try{
            const { data } = await this.axiosInstance.post(
                '/new-todo',
                todo 
            )
            return data as Todo
        }catch(error){
            
        }
    }

    async toggleTodo(todo: Todo){
        try{
            const { data } = await this.axiosInstance.post(
                `/toggle-todo`,
                todo
            )
            return data
        }catch(error){
            
        }
    }

    async getAllTodos() {
        try{
            const { data } = await this.axiosInstance.post(
                '/get-todos');
            return data;
        }catch(error) {
            return [];
        }
    }

    async deleteTodo(todo: Todo){
        try{
            await this.axiosInstance.post(
                `/delete-todo`,
                todo, 
            )
    
            return await this.getAllTodos()
        }catch(error){
            
        }
    }
}
