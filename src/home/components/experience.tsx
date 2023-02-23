import { Box, Container, Divider, Grid, Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import GamepadIcon from '@mui/icons-material/Gamepad'

const Experience: React.FC = () => {
  return (
    <Grid container className="Experience" justifyContent="center" paddingY={8} style={{backgroundColor: "#27323d", color: "white"}}>
        <Typography variant="h4" paddingBottom={4}>
            Experience
        </Typography>

        <Grid item container justifyContent="center" direction="row" sx={{backgroundColor: ""}}>

          <Grid item sm={5} sx={{backgroundColor: "", paddingBottom: 4}} >
            <Typography variant="h4" textAlign={{xs:"start", sm: 'end'}} paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              Envoy
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}} paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              Software Engineer
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}} paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              San Francisco, CA
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}} paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              May 2022 - January 2023
            </Typography>
          </Grid>

          <Grid item xs={11} sm={7} sx={{ borderLeft: "2px solid white"}}  paddingLeft={{xs: 4, sm: 2}} paddingRight={{xs: 4, sm: 12, md: 32}} >
            <List sx={{backgroundColor: ""}}>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Developed the Slack and Microsoft Teams flagship integrations, utilizing Javascript/TypeScript running on NodeJS and deployed using Docker and Kubernetes.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Implemented frameworks such as Express, Azure Bot SDK and Bolt SDK to integrate Envoy's workplace API platform, driving seamless user interactions using chat bots and modals.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Secured integrations by validating HTTP requests and implementing custom OAuth flows for safe data access on behalf of users.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Optimized performance by utilizing and interfacing with Redis caches and PostgreSQL DBs for fast and reliable data storage solutions.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Ensured code quality by following a Test Driven Development approach, designing unit tests using Mocha, Chai, and Jest.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Box sx={{backgroundColor: "", height: 48, width: '100%'}} />

          <Grid item sm={5} spacing={4} sx={{backgroundColor: "",  paddingBottom: 4}} >
            <Typography variant="h4" textAlign={{xs:"start", sm: 'end'}} paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              Cruise, Zoox
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}}  paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              San Francisco, CA
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}}  paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              September 2019 - February 2022
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}}  paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              Senior Autonomous Vehicle Trainer
            </Typography>
          </Grid>

          <Grid item xs={11} sm={7} sx={{ borderLeft: "2px solid white"}}  paddingLeft={{xs: 4, sm: 2}} paddingRight={{xs: 4, sm: 12, md: 32}} >
            <List sx={{backgroundColor: ""}}>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Executed daily autonomous runs with emphasis on safety, achieving a daily average of 120 autonomous miles.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Implemented an adaptive training approach improving new hire training time by 20%.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Minimized downtime by effectively troubleshooting systems using common proven workarounds.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          
        </Grid>

      </Grid>
  )
}

export default Experience