import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScoreBox from "../utils/score/score";
import TimerBox from "./timer/timer";



interface UtilsBoxProp {
  time: number;
  score: number;
}

const UtilsBox: React.FC<UtilsBoxProp> = React.memo(({ time, score }) => {

  

  return (
    <Grid container className="UtilsBox" justifyContent='center' xs={12} paddingTop={3} sx={{backgroundColor: ''}}>
      <Box sx={{margin: 0, padding: 0, width: '90%', backgroundColor: ''}}>
        <Grid container direction={{xs: 'column', sm: 'row'}} justifyContent='space-evenly' sx={{backgroundColor: ''}}>
            <Grid item textAlign='center' sm={4} >
                <TimerBox time={time} />
            </Grid>
            <Grid item textAlign='center' sm={4} >
                <ScoreBox score={score}/>
            </Grid>
        </ Grid>
      </Box>
    </Grid>

  );
  });
  
  export default UtilsBox