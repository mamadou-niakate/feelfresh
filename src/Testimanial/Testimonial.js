import React from 'react'
import { Box, Paper, Toolbar, Typography } from '@mui/material'
import { testimonials } from '../data'
import Review from './Review'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
   testimonial: {
        width: '50%',
        margin: 'auto',
        minHeight: 500,
        padding:40,
        backgroundColor: '#FFF',
        '& > *': {
            margin: 20,
        }
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

    React.useEffect(() => {
        setReview(testimonials[0]);
        setSelectedAuthor(testimonials[0].author);
    }, []);

    return (
        <div className={classes.testimonial}>
            <Typography variant='h4' style={{ textAlign: 'center' }} className={classes.sectionTitle}>
                What our customers say
            </Typography>
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
            {/* <Grid container justifyContent={'center'} alignItems={"center"} spacing={4}>
                <Grid item>
                    <Grid container flexDirection={'column'} spacing={3}>
                        {testimonials.map((testimonial) => (
                            <Grid item xs={12} sm={6} onClick={() => handleReviewChange(testimonial)} key={testimonial.id}>
                                <Paper 
                                    className={classes.authorDiv} 
                                    elevation={selectedAuthor === testimonial.author ? 10 : 0}
                                >
                                    <img className={classes.avatar} src={'https://cdn-icons-png.flaticon.com/512/147/147144.png'} alt={testimonial.author} />
                                    <Typography variant='h5'>{testimonial.author}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item>
                    <Review review={review} />
                </Grid>
            </Grid>   */}
        </div>
  )
}
