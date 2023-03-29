import { Grid, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Link } from "react-router-dom"

export const NavLinks: React.FC = () => {
    return (
        <Grid container direction={{xs: 'column',sm: 'row'}} height='64' columnSpacing={{xs: 0, sm: 2}} display={{xs: 'none', sm: 'flex'}} >
            <Grid item >
              <Link to="/hq/" style={{textDecoration: 'none', color: '#27323d'}}><Typography variant="h4">Home</Typography></Link>
            </Grid>
            <Grid item>
              <Link to="/hq/todo-app" style={{textDecoration: 'none', color: '#27323d'}}><Typography variant="h4">Todo App</Typography></Link>
            </Grid>
            <Grid item>
              <Link to="/hq/quiz-app" style={{textDecoration: 'none', color: '#27323d'}}><Typography variant="h4">Quiz App</Typography></Link>
            </Grid>
            <Grid item >
              <Link to="https://github.com/mgacuma" rel="noopener noreferrer" target="_blank">
                <GitHubIcon sx={{color: '#27323d'}}/>
              </Link>
            </Grid>
            <Grid item>
              <Link to="https://linkedin.com/in/mgacuma" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon sx={{color: '#27323d'}}/>
              </Link>
            </Grid>
          </Grid>
    )
}