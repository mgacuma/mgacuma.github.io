import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

interface ScoreBoxProps {
    score: number
}

const ScoreBox: React.FC<ScoreBoxProps> = React.memo(({score}) => {
    return (
      <Grid container className="ScoreBox" xs={12} justifyContent='center'  alignItems='center' paddingBottom={4}>
        <Grid item xs={4} textAlign='center' sx={{backgroundColor: ''}}>
          <Paper>
          <Typography>Score: {score}</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  });
  
  export default ScoreBox