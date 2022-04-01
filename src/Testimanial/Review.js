import { Paper, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 500,
        width: 400,
        backgroundColor: '#FFF7E8',
        padding: 20,
    }
});

const Review = ({review}) => {
    const classes = useStyles();
    const { rating, text } = review
    return (
        <Paper className={classes.root} elevation={1}>
            <Typography component={'h4'} variant='h4'>{text?.substr(0,25)}</Typography>
            <Typography>{rating}</Typography>
            <Typography>{text}</Typography>
        </Paper>
    )
}

export default Review