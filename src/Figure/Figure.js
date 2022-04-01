import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { figures } from '../data';

const useStyles = makeStyles({
   root: {
        height: 400,
        backgroundColor: '#FFFFF',
    },
    singleFigure: {
        height: 200,
    },
    singleFigureNumber: {
        fontWeight: 'bold'
    },
    singleFigureTitle: {
        color: 'GrayText',
        fontSize: '0.8rem',
        fontFamily: 'Vazir',
    },
});

const SingleFigure = ({ singleFigure }) => {
    const { number, title} = singleFigure;
    const classes = useStyles();
    return (
        <div className={classes.singleFigure}>
            <Typography variant='h4' className={classes.singleFigureNumber}>{number}</Typography>
            <Typography variant='h6' className={classes.singleFigureTitle}>{title}</Typography>
        </div>
    )
}

const Figure = () => {
    const classes = useStyles();
    return (
        <Grid container justifyContent={'center'} alignItems='center' spacing={2} className={classes.root}>
            {figures.map((singleFigure) => (
                <Grid item>
                    <SingleFigure singleFigure={singleFigure} />
                </Grid>
            )
            )}
        </Grid>
    )
}

export default Figure