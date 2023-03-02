import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Summary: React.FC = () => {
    return (
      <Grid container className="Summary" justifyContent="center" xs={12} paddingY={8}>
        <Typography variant="h4" paddingBottom={4}>
            Professional Summary
        </Typography>

          <Grid item container direction="row" justifyContent="center">
            <Grid item xs={0} sm={5}  height={{xs: '110%', sm: '115%'}} sx={{backgroundColor: ''}}>

            </Grid>

            <Grid item xs={11} sm={7} paddingLeft={4} sx={{ borderLeft: "2px solid black"}} paddingRight={{xs: 4, sm: 12, md: 32}} >
              <Typography variant="body1">
                Resourceful and results driven software engineer with one year of experience in full-stack web development.  Adaptive problem-solver capable of evaluating benefits and drawbacks in all phases of the software development lifecycle. Proactively embraces challenges and tasks with a strong desire to continuously explore and incorporate new technologies and solutions. Genuine communicator able to effectively collaborate with peers following an open approach to foster a positive collaborative environment. 
              </Typography>
            </Grid>
          </Grid>
      </Grid>
    );
}

export default Summary