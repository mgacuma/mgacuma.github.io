
import axios, { AxiosInstance } from 'axios'
import { Question } from '../components/question/question.type';
import { ResponseParser } from './responseParser';

export class QuizApiService {
    private axiosInstance: AxiosInstance;
    private responseParser: ResponseParser;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'https://opentdb.com/api.php?amount=10',
            timeout: 1000
        })
        
        this.responseParser = new ResponseParser();
    }
    async getQuestions(){
        try{
            const { data } = await this.axiosInstance.get('');
                        
            const questions = data.results.map((result: { question: string; correct_answer: string; incorrect_answers: any[]; }) => {

                const question = this.responseParser.parse(result.question);

                const correct_answer = this.responseParser.parse(result.correct_answer);

                const incorrect_answers = result.incorrect_answers.map(incorrect_answer => {
                    return this.responseParser.parse(incorrect_answer);
                })

                return { question: question, correct_answer: correct_answer, shuffled_answers: [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5) }
            })

            return questions;
        }catch(error){
            
        }
    }
}
