import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScoreBox from "../utils/score/score";

import { Question } from "./question.type";


interface QuestionBoxProp {
  question: Question;
  time: number;
  score: number;
}

const QuestionBox: React.FC<QuestionBoxProp> = React.memo(({question, time, score}) => {

  

  return (
    <Grid container className="QuestionBox" justifyContent='center' xs={12} paddingY={3} sx={{backgroundColor: ''}}>
      <Paper sx={{margin: 0, padding: 0, width: '90%', backgroundColor: ''}}>
        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{backgroundColor: ''}} height={240}>
          <Grid item textAlign='center' paddingX={4}>
            <Typography variant='h6'>{question.question}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

  );
  });
  
  export default QuestionBox