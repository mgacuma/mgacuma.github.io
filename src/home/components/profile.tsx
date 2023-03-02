import { Grid, Box, Typography, Container, Divider } from "@mui/material"

const Profile: React.FC = () => {
  return (
    <Grid container className="Profile" justifyContent="center" paddingY={8} style={{backgroundColor: "#27323d", color: "white"}}>
              
              <Grid item container sm={5} xs={12} justifyContent={{xs: "center", md: "flex-end"}}>
                <Grid item>
                  <Box
                    component="img"
                    padding={2}
                    sx={{
                      maxHeight: {xs: 281, sm: 295},
                      maxWidth: {xs: 281, sm: 295}
                    }}
                    alt="Profile picture"
                    src="https://i.ibb.co/SxCdQYN/123-AC1-DC-B8-C1-4-BEE-BBC7-81-AF08-AC8414-1-105-c-cropped.png"
                  />
                </Grid>
              </Grid>

              <Grid item sm={7} xs={12} container direction="column" justifyContent="flex-start" alignContent={{xs: "center", md: "flex-start"}} padding={2}  spacing={1} >
                <Grid item >
                  <Typography variant="h3">Miguel Gacuma</Typography>
                </Grid>
                <Grid item >
                  <Divider sx={{backgroundColor: "white", borderBottomWidth: 2}} />
                </Grid>
                <Grid item >
                  <Typography component="h4">Millbrae, CA, 94030</Typography>
                </Grid>
                <Grid item >
                  <Typography component="h4">415-613-5666</Typography>
                </Grid>
                <Grid item >
                  <Typography component="h4">miguel.gacuma@outlook.com</Typography>
                </Grid>
              </Grid>
    </Grid>
  )
}

export default Profile