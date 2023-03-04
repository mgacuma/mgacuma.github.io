import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

interface ScoreBoxProps {
    score: number
}

const ScoreBox: React.FC<ScoreBoxProps> = React.memo(({score}) => {
    return (
      <Paper sx={{padding: '2%'}}>
        <Typography>Score: {score}</Typography>
      </Paper>
    );
  });
  
  export default ScoreBox