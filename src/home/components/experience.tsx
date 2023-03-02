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
                  Rebuilt existing flagship integrations for Slack and MS Teams, derived from legacy code, to deliver expanding products and features to approximately 15000 of weekly active users.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Utilized NodeJS applications written in Javascript/Typescript following common design patterns and practices to create an auto-completing, easily readable, testable, and scalable codebase.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Leveraged several UI frameworks like React to create a seamless and consistent experience aligning with our mobile experience to bring accessibility to our workplace platform tools.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Introduced user authorization and authentication by implementing OAuth type flow to verify identity and allow client access to backend resources.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Established data caching and storage solutions using Redis and PostgreSQL, optimizing backend service communication to significantly reduce asynchronous http request wait times by 250ms.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                 Ensured a professional level of quality by following a Test Driven Development approach, designing unit tests with test frameworks like Jest to uphold 90% code coverage on all Github repositories.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Collaborated closely with product and design, practicing agile methodologies and effective peer coding to deliver outstanding results ensuring alignment with companies roadmap.
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
              Senior Autonomous Vehicle Trainer
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}}  paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              San Francisco, CA
            </Typography>
            <Typography variant="h6" textAlign={{xs:"start", sm: 'end'}}  paddingRight={{xs: 0, sm: 4}} sx={{backgroundColor: ""}}>
              September 2019 - February 2022
            </Typography>
          </Grid>

          <Grid item xs={11} sm={7} sx={{ borderLeft: "2px solid white"}}  paddingLeft={{xs: 4, sm: 2}} paddingRight={{xs: 4, sm: 12, md: 32}} >
            <List sx={{backgroundColor: ""}}>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Executed autonomous runs on public roads with emphasis on safety and efficiency, supplying accurate data collection while achieving a daily average of 120 autonomous miles.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Demonstrated a great understanding of the autonomous system by supporting fellow operators with system information during runtime and minimizing downtime with common troubleshooting workarounds.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon sx={{color: 'white'}} />
                </ListItemIcon>
                <ListItemText>
                  Followed an adaptive teaching approach catered to each individual operator to improve new hire onboarding time by 20%.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          
        </Grid>

      </Grid>
  )
}

export default Experience