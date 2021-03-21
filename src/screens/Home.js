import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector} from "react-redux"

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

function HomeScreen() {
  
  const classes = useStyles();
  const profileInfo = useSelector(state=> state.profileReducer.profile)
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
          profileInfo.name &&
          <React.Fragment>
            <div className={classes.root}>Name  : {profileInfo.name}</div>
            <div className={classes.root}>Email  : {profileInfo.email}</div>
          </React.Fragment>
        }
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
}

export default HomeScreen;
