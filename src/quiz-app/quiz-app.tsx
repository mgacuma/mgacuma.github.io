import { Box } from "@mui/material";
import React from "react";
import AnswersBox from "./components/answer/answer-box";
import { useTodos } from "./custom-hooks";
import QuestionBox from "./components/question/question-box";
import Question from "./components/question/question-box";
import ScoreBox from "./components/score/score";

interface QuizAppProps {

}

const QuizApp: React.FC<QuizAppProps> = React.memo(({}) => {
  const { questions, score, selectAnswer, time} = useTodos();

  return (
    <Box className="QuizApp" >
      <QuestionBox
        question={questions[0]}
        time={time}
      />
      <AnswersBox
        answers={questions[0].shuffled_answers}
        selectAnswer={selectAnswer}
      />
      <ScoreBox score={score} />
    </Box>
  );
});

export default QuizApp
