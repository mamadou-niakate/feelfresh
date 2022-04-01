import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { figures } from '../data';

const useStyles = makeStyles({
   root: {
        height: 400,
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
        <Grid container justifyContent={'center'} alignItems='center' spacing={2} className={classes.root}>
            {figures.map(({number, title}) => (
                <Grid item>
                    <Typography variant='h4' className={classes.singleFigureNumber}>{number}</Typography>
                    <Typography variant='h6' className={classes.singleFigureTitle}>{title}</Typography>
                </Grid>
            )
            )}
        </Grid>
    )
}

export default Figure