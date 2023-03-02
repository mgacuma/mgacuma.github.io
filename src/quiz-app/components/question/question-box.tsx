import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Question } from "./question.type";


interface QuestionBoxProp {
  question: Question;
  time: number;
}

const QuestionBox: React.FC<QuestionBoxProp> = React.memo(({question, time}) => {

  

  return (
    <Grid container className="QuestionBox" justifyContent='center' xs={12} paddingY={6} sx={{backgroundColor: ''}}>
      <Paper sx={{margin: 0, padding: 0, width: '90%', backgroundColor: ''}}>
        <Grid container direction='column' justifyContent='flex-between' alignItems='center' paddingY='2%'>
          <Grid item>
            <Typography>Time: {time}</Typography>
          </Grid>
        </Grid>
        <Grid container direction='column' justifyContent='flex-between' alignItems='center' paddingY='4%' sx={{backgroundColor: ''}} minHeight={200}>
          <Grid item>
            <Typography variant='h6'>{question.question}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

  );
  });
  
  export default QuestionBox