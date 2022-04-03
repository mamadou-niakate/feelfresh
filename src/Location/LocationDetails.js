import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

export const LocationDetails = () => {
  return (
    <Paper 
      elevation={0} 
      style={{ 
        width: '90%', 
        height: '100%', 
        margin:'auto', 
        alignSelf: 'center', 
        borderRadius: 20, 
        backgroundColor: 'transparent'
      }}
    >
        <List>
          <ListItem divider>
            <Typography variant="h4">
              <span>Venez nous faire un tour !</span> 
            </Typography>
          </ListItem>
          <ListItem divider>
            <List>
              <ListItem>
                <Typography component={'h4'} variant='h4'><strong>Adresse :</strong> </Typography>
              </ListItem>
              <ListItem>
                <Typography component={'h6'} variant='h6'>
                  <strong>Pays :</strong> Mali
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={'h6'} variant='h6'>
                  <strong>Ville :</strong> Bamako
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={'h6'} variant='h6'>
                  <strong>Quartier :</strong> ACI 2000
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component={'h6'} variant='h6'>
                  <strong>Rue :</strong> Rue 413 Entre Le Palais Des Sports Et La Place Can Proche De Guaduman, Bamako Mali
                </Typography>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
              <List>
                <ListItem>
                  <Typography component={'h4'} variant='h4'><strong>Horaires d'ouverture :</strong> </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'h6'} variant='h6'>
                    Lundi - Vendredi : 9h - 18h
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'h6'} variant='h6'>
                    Samedi : 9h - 14h
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'h6'} variant='h6'>
                    Dimanche : Fermé
                  </Typography>
                </ListItem>
              </List>
          </ListItem>
        </List>
    </Paper>
  )
}
