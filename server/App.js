import React from "react;";
import "./App.css";
// import the UI component needed from the material UI
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png'
function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant='h2' align='center'> Eventing My Life</Typography>
        <img src={memories} alt='memories' height='60'/>
      </AppBar>
    </Container>
  );
}

export default App;
