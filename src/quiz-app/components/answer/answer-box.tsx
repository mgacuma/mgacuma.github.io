import { Box, Button, Grid, List, ListItemButton, ListItemText, Paper } from "@mui/material";
import React from "react";
import AnswerItem from "./answer-item";

interface AnswersBoxProps {
    answers: string[];
    selectAnswer: (text: string) => void;
}

const AnswersBox: React.FC<AnswersBoxProps> = React.memo(({answers, selectAnswer}) => {
    return (
      <Grid container className="QuestionBox" justifyContent='center' xs={12} paddingBottom={4} sx={{backgroundColor: ''}}>
        <Paper sx={{margin: 0, padding: 0, width: '90%', backgroundColor: ''}}>
          <Grid item >
              {
                answers.map((answer) => {
                  return (
                    <AnswerItem answer={answer} selectAnswer={selectAnswer} />
                  )
                })
              }
          </Grid>
          <Grid item>

          </Grid>
        </Paper>
      </Grid>
    );
  });
  
  export default AnswersBox