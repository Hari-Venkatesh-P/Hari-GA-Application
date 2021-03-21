import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from "../components/Header"
import '../styles/loginStyles.css';
import {useGAPageViewHook} from "../hooks/GAhooks";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));


function HomeScreen(props) {
  const classes = useStyles();

  useGAPageViewHook(window.location.pathname);

  return (
    <div>
      <Header></Header>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      > {
          props.location.state?.profileObj &&
          <React.Fragment>
            <div className={classes.root}>Name  : {props.location.state?.profileObj?.name}</div>
            <div className={classes.root}>Email  : {props.location.state?.profileObj?.email}</div>
          </React.Fragment>
        }

        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
}

export default HomeScreen;
