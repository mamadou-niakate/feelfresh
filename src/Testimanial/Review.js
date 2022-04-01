import { Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'fcenter',
        width: '100%',
        margin: 'auto',
        padding: 'auto'
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