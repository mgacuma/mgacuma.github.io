import { useEffect, useState } from "react";
import { QuizApiService } from "./services/quizApiService";
import { Question } from "./components/question/question.type";

const initialQuestions: Question[] = [
  {
    question: '1+1?',
    correct_answer:'2', 
    shuffled_answers: [
      '1',
      '3',
      '4',
      '2'
    ]
  }
]

export const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [score, setScore] = useState<number>(0);
  const [activeTimer, setActiveTimer] = useState<Boolean>(false);
  const [time, setTime] = useState<number>(15);
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);

  const quizApiService = new QuizApiService();

  useEffect(() => {
    quizApiService.getQuestions()
    .then(results => {
      setQuestions(results!)
      setActiveTimer(true);
    })
  }, [])

  useEffect(() => {
    let timerInterval: number | undefined

    if(time === 0){
      selectAnswer('')
    }

    if(activeTimer){
      timerInterval = setInterval(() => {setTime(time - 1)}, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [activeTimer, time])

  const populateQuestions = () => {
    quizApiService.getQuestions()
    .then(questions => {
      setQuestions(questions)
      setActiveTimer(true);
    });
  }

  const selectAnswer = (answer: string) => {   
    setActiveTimer(false);
    setShowAnswer(true);

    if (answer === questions[0].correct_answer) {
      setScore(score + 1)
    }
    
    setTimeout(() => {

    if(questions.length > 1){
      setQuestions(questions.slice(1))
      
    } else {
      populateQuestions();
    }

    
      setTime(15)
      setShowAnswer(false)
      setActiveTimer(true)
    }, 2500)
  }

  return {
    questions,
    selectAnswer,
    score,
    time,
    showAnswer
  }
}
