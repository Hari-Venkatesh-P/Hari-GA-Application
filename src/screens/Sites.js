

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

import Header from "../components/Header"
import '../styles/loginStyles.css';
import { useGAPageViewHook,useGAEventTracker } from "../hooks/GAhooks";


const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));


function HomeScreen(props) {

    const classes = useStyles();
    useGAPageViewHook(window.location.pathname);
    const eventTracker = useGAEventTracker("External Links")
    
    const switchPage = (url,action) => {
        eventTracker(action,url)
        window.open(url)
    };

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
            >
                <React.Fragment>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                        onClick={()=>{switchPage("https://github.com/","GITHUB VIEW EVENT")}}
                    >
                        Youtube
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button} 
                        startIcon={<YouTubeIcon />}
                        onClick={()=>{switchPage("https://www.youtube.com/","YOUTUBE VIEW EVENT")}}
                    >
                        GitHub
                    </Button>
                </React.Fragment>
            </Grid>
        </div>
    );
}

export default HomeScreen;
