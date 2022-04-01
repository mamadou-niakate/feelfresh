import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { figures } from '../data';

const useStyles = makeStyles({
   root: {
         display: 'flex',
         alignItems: 'center',
        height: 500,
        margin: 'auto',
        backgroundColor: '#FFFFF',
        padding: 20,
    },
    singleFigureNumber: {
        fontWeight: 'bold'
    },
    singleFigureTitle: {
        color: 'GrayText',
        fontSize: '0.8rem',
    },
});

const Figure = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            {figures.map(({id, number, title}) => (
                <Grid key={id} item xs={12} sm={3}>
                    <Typography variant='h4' className={classes.singleFigureNumber}>{number}</Typography>
                    <Typography variant='h6' className={classes.singleFigureTitle}>{title}</Typography>
                </Grid>
            )
            )}
        </Grid>
    )
}

export default Figure