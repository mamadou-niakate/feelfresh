import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
// import LocationMap from './LocationMap';
import { LocationDetails } from './LocationDetails';
import SectionTitle from '../shared/SectionTitle';
import SectionSubtitle from '../shared/SectionSubtitle';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F2F2F2',
    },
   location: {
        height: 650,
    },
    locationTitleContainer: {
        padding: 20
    },
    locationTitle: {
        color: '#686D76',
    },
    map: {
        width: '100%',
    }
});
const Location = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <div className={classes.locationTitleContainer}>
                <SectionTitle title={'Emplacement'} />
                <SectionSubtitle subTitle={'Nous sommes à Bamako dans le quartier chic de l\'ACI 2000'} />
            </div>
            <Grid container justifyContent={'space-evenly'} alignItems='center' className={classes.location}>
                {/* <LocationMap /> */}
                <Grid item xs={12} sm={5}>
                    <LocationDetails />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img src={'/images/map1.svg'} alt='location' className={classes.map}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Location