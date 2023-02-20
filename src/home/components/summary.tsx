import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Summary: React.FC = () => {
    return (
      <Grid container className="Summary" justifyContent="center" xs={12} paddingY={12}>
        <Typography variant="h4" paddingBottom={4}>
            Professional Summary
        </Typography>

          <Grid item container direction="row" justifyContent="center">
            <Grid item xs={0} sm={5}  height={{xs: '110%', sm: '115%'}} sx={{backgroundColor: ''}}>

            </Grid>

            <Grid item xs={11} sm={7} paddingLeft={4} sx={{ borderLeft: "2px solid black"}} paddingRight={{xs: 4, sm: 12, md: 32}} >
              <Typography variant="body1">
                Proficient Software Engineer with a comprehensive background in the entire software development life cycle, from design to deployment of web-based client and server applications. Proactively embraces new challenges with a strong desire to continuously learn and master new skills and technologies resulting in effective and efficient solutions. Strong communicator with exceptional interpersonal skills, able to effectively collaborate with team members to foster a positive work environment and achieve exceptional results.
              </Typography>
            </Grid>
          </Grid>
      </Grid>
    );
}

export default Summary