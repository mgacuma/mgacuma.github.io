import { School } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material"

const Education: React.FC = () => {
  return (
    <Grid container className="Education" alignItems="center" direction="column" xs={12} paddingY={8} >
      <Typography variant="h4" paddingBottom={4}>
          Education
      </Typography>

      <Grid item container direction="column" justifyContent="center" alignItems="center" sx={{height: 300, width: 300, color: "white", backgroundColor: "#27323d"}}>
        <Grid item>
          <Typography variant="h5" textAlign='center'>San Francisco State University</Typography>
        </Grid>
        <Grid item>
          <School />
        </Grid>
        <Grid item>
          <Typography variant="body1" textAlign='center'>Bachelor of Science</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" textAlign='center'>Computer Engineering</Typography>
        </Grid>
        <Grid item>
          <School />
        </Grid>
        <Grid item>
          <Typography variant="body1" textAlign='center'>December 2021</Typography>
        </Grid>
        
      </Grid>

    </Grid>
  );
}

export default Education