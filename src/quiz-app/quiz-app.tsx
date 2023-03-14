import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import AnswersBox from "./components/answer/answer-box";
import { useTodos } from "./custom-hooks";
import QuestionBox from "./components/question/question-box";
import UtilsBox from "./components/utils/utils";

interface QuizAppProps {

}

const QuizApp: React.FC<QuizAppProps> = React.memo(({}) => {
  const { questions, score, selectAnswer, time, showAnswer} = useTodos();

  return (
    <Box className="QuizApp" >
      <UtilsBox 
        score={score} 
        time={time} 
      />
      <QuestionBox
        question={questions[0]}
        time={time}
        score={score}
      />
      <AnswersBox
        correctAnswer={questions[0].correct_answer}
        answers={questions[0].shuffled_answers}
        selectAnswer={selectAnswer}
        showAnswer={showAnswer}
      />
    </Box>
  );
});

export default QuizApp
