import { Box, Button, Grid, List, ListItemButton, ListItemText, Paper } from "@mui/material";
import React from "react";
import AnswerItem from "./answer-item";

interface AnswersBoxProps {
    answers: string[];
    selectAnswer: (text: string) => void;
    showAnswer: Boolean
    correctAnswer: string;
}

const AnswersBox: React.FC<AnswersBoxProps> = React.memo(({ answers, selectAnswer, showAnswer, correctAnswer }) => {
    return (
      <Grid container className="QuestionBox" justifyContent='center' xs={12} paddingBottom={4} sx={{backgroundColor: ''}}>
              {
                answers.map((answer) => {
                  return (
                    <AnswerItem answer={answer} correctAnswer={correctAnswer} showAnswer={showAnswer} selectAnswer={selectAnswer} />
                  )
                })
              }
      </Grid>
    );
  });
  
  export default AnswersBox