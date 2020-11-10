import React from 'react';
import { textField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'



const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {

  }
  return (
    <Paper  className={classes.paper}>
      <form autocomplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography>
          
        </Typography>
      </form>

    </Paper>
  );
}

export default Form;