import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

interface TimerBoxProps {
    time: number
}

const TimerBox: React.FC<TimerBoxProps> = React.memo(({time}) => {
    return (
        <Paper sx={{padding: '2%'}}>
          <Typography>Time: {time}</Typography>
        </Paper>
    );
  });
  
  export default TimerBox