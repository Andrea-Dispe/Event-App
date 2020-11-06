import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import image from './images/image.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'


const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant="h2" align="center">image</Typography>
        <img className={classes.image} src={image} alt="something in here" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />

            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;