import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import { Link } from 'react-scroll';
import { restaurant } from '../jsonfile'
import * as Icons from 'react-icons/fa';

const useStyles = makeStyles({
   root: {
        // display: 'flex',
        // justifyContent: 'space-evenly',
        // alignItems: 'flex-start',
        // flexWrap: 'wrap',
        height: 'auto',
        backgroundColor: '#361D31',
        padding: '0 50px 20px 50px',
    },
    socialNetwork: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        '& > * a': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        }
    },
    infoUtil: {
        '& > *': {
            textAlign: 'center',
        }
    },
    link: {
        display:'flex',
        alignItems:'center',
        textDecoration: 'none !important',
    },
    linkText: {
        color: '#FFF7E8', 
        textAlign:'left',
        textDecoration: 'none !important',
    },
    text: {
        color: '#FFF7E8', 
        textAlign:'left',
        wordBreak: 'break-all',
        margin: '0 0 10px 0',
        textDecoration: 'none',
    },
    footerSectionTitle: {
        color: '#FFF7E8',
        fontWeight: 'bold',
        textAlign: 'left',
        margin: '20px 0 20px 0 !important',
    },
    socialNetworkIcon: {
        color: '#FFF7E8',
        fontSize: '1.5rem',
        padding: '10px 10px 10px 0px ',
    },
    mainLink: {
        cursor:'pointer'
    },
    devInfo: {
        color: '#FFF7E8',
    }
});

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container justifyContent={'center'} alignItems='flex-start'>
                <Grid item xs={12} md={4} style={{ display:'flex', flexDirection:'column'}}>
                    <Typography variant='h5' className={classes.footerSectionTitle}>
                        Suivez-nous sur les réseaux sociaux
                    </Typography>
                    <div className={classes.socialNetwork}>
                        {restaurant.socialNetwork.map(({name, icon, url}, index) => {
                            return (
                                <MuiLink href={url} target='_blank' rel='noopener noreferrer' key={index} className={classes.link}>
                                    <Typography>
                                        {React.createElement(Icons[icon], {className: classes.socialNetworkIcon})}
                                    </Typography>
                                    <Typography className={classes.linkText}> {name} </Typography>
                                </MuiLink>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.infoUtil}>
                    <Typography variant='h5' className={classes.footerSectionTitle}>
                        Infos Utils
                    </Typography>
                    <Link to='testimonial' smooth={true} className={classes.mainLink}>
                        <Typography className={classes.text}> Témoignages de nos clients  </Typography>
                    </Link>
                    <Link to='about' smooth={true} className={classes.mainLink}>
                        <Typography className={classes.text}>  A Propos de nous </Typography>
                    </Link>
                    <Link to='menu' smooth={true} className={classes.mainLink}>
                        <Typography className={classes.text}> Nos Plats </Typography>
                    </Link> 
                    <MuiLink href='mailto:mamadouniakate10@yahoo.fr' className={classes.linkText}>
                        <Typography className={classes.devInfo}>
                            Contacter le développeur
                        </Typography>
                    </MuiLink>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h5' className={classes.footerSectionTitle}>
                        Où Nous Trouver  ?
                    </Typography>
                    <Typography className={classes.text}> 
                        <strong>Téléphone : </strong> {restaurant.phone}
                    </Typography>
                    <Typography className={classes.text}> 
                        <strong>Adresse : </strong> <br/>
                        <span>{restaurant.address.street} </span>
                    </Typography>
                    <Typography className={classes.text}> 
                        <strong>Horaires d'ouverture : </strong>  <br/>
                        {restaurant.schedule.map((item, index) => (
                            <span key={index}>
                                {item} <br/>
                            </span>
                        ))}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer