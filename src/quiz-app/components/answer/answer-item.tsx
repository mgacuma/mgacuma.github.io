import { Box, Button, Grid, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";

interface AnswerItemProps {
    answer: string;
    selectAnswer: (text: string) => void;
    showAnswer: Boolean
    correctAnswer: string
}

const AnswerItem: React.FC<AnswerItemProps> = React.memo(({ answer, selectAnswer, showAnswer, correctAnswer }) => {
  return (
    <Paper sx={ showAnswer ? (correctAnswer === answer ? {margin: '1%', width: {xs: '90%', sm: '70%'}, backgroundColor: 'rgba(0, 200, 83, 0.69)'} : {margin: '1%', width: {xs: '90%', sm: '70%'}, backgroundColor: 'rgba(213, 0, 0, 0.69)'} ) : {margin: '1%', width: {xs: '90%', sm: '70%'}, backgroundColor: 'white'} } >
        <Button onClick={() => selectAnswer(answer)} fullWidth sx={{height: 48}}>
          <Typography color={showAnswer ? 'white' : "black"} >{answer}</Typography>
        </Button>
    </Paper>
  );
});
  
  export default AnswerItem