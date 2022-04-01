import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material'

const useStyles = makeStyles({
   root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: 200,
        backgroundColor: '#361D31',
        padding: 20
    },
    socialNetwork: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoUtil: {
        '& > *': {
            textAlign: 'center',
        }
    }

});

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <div style={{ display:'flex', flexDirection:'column'}}>
                <Typography variant='h4' style={{ color: '#fff', textAlign:'left'}}>
                    Follow us on social media
                </Typography>
                <div className={classes.socialNetwork}>
                    <p>
                        <a href="https://www.facebook.com/">
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/">
                            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
                        </a>
                    </p>
                    <p>
                        <a href="https://www.twitter.com/">
                            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                        </a>
                    </p>
                    <p>
                        <a href="https://wwww.snapchat.com/">
                            <img src="https://img.icons8.com/color/48/000000/snapchat.png" alt="snapchat" />
                        </a>
                    </p>
                </div>
            </div>
            <div className={classes.infoUtil}>
                <Typography variant='h4' style={{ color: '#fff', textAlign:'left'}}>
                    Infos Utils
                </Typography>
                <p style={{ color: '#fff', textAlign:'left'}}> Témoignages de nos clients  </p>
                <p style={{ color: '#fff', textAlign:'left'}}>  A Propos de nous </p>
                <p style={{ color: '#fff', textAlign:'left'}}> Nos Plats </p>
                <p style={{ color: '#fff', textAlign:'left'}}> Contacter le développeur </p>
            </div>
            <div>
                <Typography variant='h4' style={{ color: '#fff', textAlign:'left'}}>
                    Où Nous Trouver  ?
                </Typography>
                <p style={{ color: '#fff', textAlign:'left'}}> <strong>Adresse : </strong>  Rue 413 Entre Le Palais Des Sports Et La Place Can Proche De Guaduman, Bamako Mali </p>
                <p style={{ color: '#fff', textAlign:'left'}}> 
                    <strong>Horraire : </strong>  <br/>
                    Lundi - Vendredi : 9:00 - 18:00 <br/>
                    Samedi : 9:00 - 14:00 <br/>
                    Dimanche : Fermé
                </p>
            </div>
        </Box>
    )
}

export default Footer