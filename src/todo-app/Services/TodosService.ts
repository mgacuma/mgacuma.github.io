
import axios, { AxiosInstance } from 'axios'
import { Todo } from '../components/Todo.type';

export class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'https://xyoxs6skdc.execute-api.us-west-1.amazonaws.com/default/',
            timeout: 1000,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }

    async addTodo(todo: Todo){
        try{
            const { data } = await this.axiosInstance.post(
                '/',
                {
                    todo: todo,
                    jobType: 'create' 
                }
            )
            return data as Todo
        }catch(error){
            
        }
    }

    async toggleTodo(todo: Todo){
        try{
            const { data } = await this.axiosInstance.post(
                `/`,
                {
                    todo: {...todo, completed: !todo.completed},
                    jobType: 'update'
                }
            )
            return data
        }catch(error){
            
        }
    }

    async getAllTodos() {
        try{
            const { data } = await this.axiosInstance.get('/');
            console.log(data)
            return data;
        }catch(error) {
            return [];
        }
    }

    async deleteTodo(todo: Todo){
        try{
            await this.axiosInstance.post(
                `/`,
                {todo: todo, jobType: 'delete'}
            )
            return await this.getAllTodos()
        } catch(error){
            
        }
    }
}
