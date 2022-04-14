import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { figures } from '../data';
import CountUp from 'react-countup';

const useStyles = makeStyles({
   root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        margin: 'auto',
        backgroundColor: '#FFFFF',
        padding: 20,
    },
    singleFigureNumber: {
        fontWeight: 'bold'
    },
    singleFigureTitle: {
        color: 'GrayText',
    },
});

const Figure = () => {
    const classes = useStyles();
    const figureRef = useRef(null)
    const [animateFigures, setAnimateFigures] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setAnimateFigures(entry.isIntersecting)
            })
        })
        const { current } = figureRef;
        observer.observe(current);
        return () => observer.unobserve(current);
    })

    return (
        <Grid container className={classes.root}>
            {figures.map(({id, number, title}) => (
                <Grid key={id} item xs={12} sm={3} ref={figureRef}>
                    <CountUp
                        start={0}
                        end={number}
                        duration={5}
                    >
                        {({ countUpRef, start }) => (
                            <>
                                <Typography variant='h5' className={classes.singleFigureNumber} ref={countUpRef}>
                                <span ref={countUpRef} />
                                </Typography>
                                {animateFigures && start()}
                            </> 
                        )}
                    </CountUp>
                    <Typography variant='h5' className={classes.singleFigureTitle}>{title}</Typography>
                </Grid>
            )
            )}
        </Grid>
    )
}

export default Figure