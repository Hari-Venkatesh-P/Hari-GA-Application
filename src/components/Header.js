import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();

  const switchWindowLocation = (path) => {
    history.push({
      pathname: path
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Analytics Application
          </Typography>
          {
            window.location.pathname === "/home" &&
            <Button color="inherit" onClick={(e) => { switchWindowLocation('/sites') }}>Sites</Button>
          }
          {
            window.location.pathname === "/sites" &&
            <Button color="inherit" onClick={(e) => { switchWindowLocation('/home') }}>Home</Button>
          }
          {
           (window.location.pathname === "/home"  || window.location.pathname === "/sites") &&
            <Button color="inherit" onClick={(e) => { switchWindowLocation('/') }}>Log out</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
