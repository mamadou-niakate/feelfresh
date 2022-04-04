import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles({
   root: {
        paddingTop:65,
    },
    aboutTitle: {
        fontWeight: 'bold',
        textAlign: 'left'
    },
    image: {
        // position: 'relative',
        width:'100%',
        height: 'auto',
        objectFit: 'cover',
    },
    aboutText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 10% 0 10%',
    },
    moreBtn: {
        width: 200,
        margin: 100,
        color: 'red',
    }
});

const AboutInfo = () => {
    const classes = useStyles();
    return (
        <Grid container justifyContent={'center'} alignItems='center' wrap='wrap' className={classes.root}>
            <Grid item xs={12} md={4}>
                <div>
                    <div className={classes.aboutText}>
                        <Typography component={'h1'} variant='h1' className={classes.aboutTitle}> 
                            Feel Fresh 
                        </Typography>
                        <Typography component={'h5'} variant='h5' style={{ textAlign: 'left', color: '#686D76'}}>
                            We are a team of three developers who are passionate about
                            creating web applications.
                        </Typography>
                    </div>
                    <HashLink to={'#location'} style={{ textDecoration: 'none'}}>
                        <Button 
                            variant='contained' 
                            className={classes.moreBtn}
                            elevation={2}
                            style={{ 
                                backgroundColor: '#2EB086',
                                color:'#fff', 
                                borderRadius: 20, 
                                height: 50, 
                                margin: 20,
                                textTransform: 'none'
                            }}
                        >
                                <LocationOnIcon/> Notre emplacement
                        </Button>
                    </HashLink>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <img className={classes.image} src='/images/burger.svg' alt='random' />
            </Grid>
        </Grid>
    ) 
}

export default AboutInfo