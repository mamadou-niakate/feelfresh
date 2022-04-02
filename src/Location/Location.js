import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
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
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        height: 600,
        // backgroundColor: 'rgba(255, 247, 232, 0.2)',
    },
    locationTitleContainer: {
        padding: 20
    },
    locationTitle: {
        color: '#686D76',
    },
    map: {
        width: 400,
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
            <Box className={classes.location}>
                {/* <LocationMap /> */}
                <LocationDetails />
                <img src={'/images/map1.svg'} alt='location' className={classes.map}/>
            </Box>
        </Box>
    )
}

export default Location