import React from 'react';
import Header from "../components/Header"
import Grid from '@material-ui/core/Grid';

export default function PageNotFound() {

    return (
        <div >
            <Header></Header>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <h2 style={{ color: "red" }}> 404 Page Not Found</h2>
                <Grid item xs={5}></Grid>
            </Grid>
        </div>
    );
}