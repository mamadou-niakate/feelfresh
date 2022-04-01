import { Paper, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'fcenter',
        minHeight: 300,
        width: '50%',
        margin: 'auto',
        padding: 20,
    }
});

const Review = ({review}) => {
    const classes = useStyles();
    const { rating, text } = review

    return (
        <Paper className={classes.root} elevation={0}>
            <Typography component={'h4'} variant='h4'>{text?.substr(0,25)}</Typography>
            <Typography component={'h6'} variant='h6'>
                {rating && (
                    <Rating
                        name="simple-controlled"
                        value={parseInt(rating)}
                        alignSelf={'center'}
                        readOnly
                    /> 
                )}   
            </Typography>
            <Typography component={'q'} variant="q" style={{ fontStyle: 'italic' }}>{text}</Typography>
        </Paper>
    )
}

export default Review