import React, { useEffect, useRef } from 'react'
import { Box, Grid, Paper, Toolbar, Typography } from '@mui/material'
import { testimonials } from '../data'
import Review from './Review'
import { makeStyles } from '@mui/styles';
import SectionTitle from '../shared/SectionTitle';
import SectionSubtitle from '../shared/SectionSubtitle';
import { useAppContext } from '../store/AppContext';

const useStyles = makeStyles({
   testimonial: {
        // width: '75%',
        // margin: 'auto',
        minHeight: 500,
        // padding:40,
        backgroundColor: '#FFF',
        // '& > *': {
        //     margin: 20,
        // }
    },
    authorDiv: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 100,
        width: 250,
        cursor: 'pointer',
        border: '1px solid #E0E0E0',
    },
    avatar: {
        width: 50,
        height: 'auto',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    sectionTitle: {
        paddingBottom: 50,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    review: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F2F2F2',
        '& >:last-child': {
            wordBreak: 'break-word',
        }
    }
});


export const Testimonial = () => {
    const classes = useStyles();
    const [review, setReview] = React.useState('');
    const [selectedAuthor, setSelectedAuthor] = React.useState('');

    const handleReviewChange = (review) => {
        setReview(review);
        setSelectedAuthor(review.author);
    }

    const { dispatch } = useAppContext()
    const  testimonialRef = useRef(null)

    useEffect(() => {
        const bodyRect = document.body.getBoundingClientRect();
        const { top } = testimonialRef.current.getBoundingClientRect()
        const offset   = top - bodyRect.top;
        dispatch({ type: 'SET_TESTIMONIALS_POSITION', payload: offset})
    },[dispatch])

    useEffect(() => {
        setReview(testimonials[0]);
        setSelectedAuthor(testimonials[0].author);
    }, []);

    return (
        <Grid ref={testimonialRef} container justifyContent={'center'} alignItems='center' wrap='wrap' className={classes.testimonial}>
            <Grid item xs={12} lg={6} md={6}>
                <SectionTitle title={'Témoignages'} />
                <SectionSubtitle subTitle={'Nos clients nous font confiance pourquoi pas vous aussi !'} />
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
                >
                    {testimonials.map((testimonial) => (
                        <Box
                            color="inherit"
                            noWrap
                            key={testimonial._id}
                            variant="body2"
                            sx={{ p: 1, flexShrink: 0 }}
                            onClick={() => handleReviewChange(testimonial)}
                        >
                            <Paper 
                                className={classes.authorDiv} 
                                elevation={selectedAuthor === testimonial.author ? 10 : 0}
                            >
                                <img className={classes.avatar} src={'https://cdn-icons-png.flaticon.com/512/147/147144.png'} alt={testimonial.author} />
                                <Typography variant='h5'>{testimonial.author}</Typography>
                            </Paper>
                        </Box>
                    ))}
                </Toolbar>
                <Review review={review} />
            </Grid>
        </Grid>
  )
}
