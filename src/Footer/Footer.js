import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import { FaSnapchat, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll';
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
        textDecoration: 'none',
        color: '#FFF7E8', 
        textAlign:'left',
    },
    text: {
        color: '#FFF7E8', 
        textAlign:'left',
        wordBreak: 'break-all',
    },
    footerSectionTitle: {
        color: '#FFF7E8',
        fontWeight: 'bold',
        textAlign: 'left',
        margin: '20px 0 20px 0 !important',
    },
    socialNetworkIcon: {
        color: '#FFF7E8',
        fontSize: '2rem',
        padding: '10px 10px 10px 0px ',
    },
    mainLink: {
        cursor:'pointer'
    },
    devInfo: {
        color: '#FFF7E8',
        textDecoration: 'none'
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
                        <Typography component={'h6'} variant='h6'>
                            <a href="https://www.facebook.com/" className={classes.link} target='_blank' rel='noreferrer'>
                                <FaFacebook  className={classes.socialNetworkIcon}/>
                                <span> Facebook </span>
                            </a>
                        </Typography>
                        <Typography component={'h6'} variant='h6'>
                            <a href="https://www.instagram.com/" className={classes.link} target='_blank' rel='noreferrer'>
                                <FaInstagram className={classes.socialNetworkIcon}/>
                                <span> Instagram </span>
                            </a>
                        </Typography>
                        <Typography component={'h6'} variant='h6'>
                            <a href="https://www.twitter.com/" className={classes.link} target='_blank' rel='noreferrer'>
                                <FaTwitter className={classes.socialNetworkIcon}/>
                                <span> Twitter </span>
                            </a>
                        </Typography>
                        <Typography component={'h6'} variant='h6'>
                            <a href="https://wwww.snapchat.com/" className={classes.link} target='_blank' rel='noreferrer'>
                                <FaSnapchat className={classes.socialNetworkIcon}/>
                                <span> Snapchat </span>
                            </a>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.infoUtil}>
                    <Typography variant='h5' className={classes.footerSectionTitle}>
                        Infos Utils
                    </Typography>
                    <Link to='testimonial' smooth={true} className={classes.mainLink}>
                        <Typography className={classes.text} component='h6' variant='h6'> Témoignages de nos clients  </Typography>
                    </Link>
                    <Link to='about' smooth={true} className={classes.mainLink}>
                        <Typography className={classes.text} component='h6' variant='h6'>  A Propos de nous </Typography>
                    </Link>
                    <Link to='menu' smooth={true} className={classes.mainLink}>
                        <Typography className={classes.text} component='h6' variant='h6'> Nos Plats </Typography>
                    </Link>
                    <Typography className={classes.text} component='h6' variant='h6'> 
                        <MuiLink href='mailto:mamadouniakate10@yahoo.fr' className={classes.devInfo}>
                            Contacter le développeur
                        </MuiLink>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h5' className={classes.footerSectionTitle}>
                        Où Nous Trouver  ?
                    </Typography>
                    <Typography className={classes.text} component='h6' variant='h6'> 
                        <strong>Téléphone : </strong> +223 70 03 13 13
                    </Typography>
                    <Typography className={classes.text} component='h6' variant='h6'> 
                        <strong>Adresse : </strong> <br/>
                        <span>Rue 413, entre le Palais des Sports et la Place Can Proche de Guaduman </span>
                    </Typography>
                    <Typography className={classes.text} component='h6' variant='h6'> 
                        <strong>Horaires d'ouverture : </strong>  <br/>
                        Lundi - Vendredi : 9:00 - 18:00 <br/>
                        Samedi : 9:00 - 14:00 <br/>
                        Dimanche : Fermé
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer