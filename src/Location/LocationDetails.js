import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

export const LocationDetails = () => {
  return (
    <Paper elevation={10} style={{ width: '90%', height: 'auto', margin:'auto', alignSelf: 'center', borderRadius: 20, backgroundColor: 'transparent'}}>
        <List>
          <ListItem divider>
            <Typography variant="h4">
              Feel Fresh
            </Typography>
          </ListItem>
          <ListItem divider>
            <p>
              <Typography component={'strong'} variant='strong'>Adresse : </Typography><br/>
              <Typography component={'span'} variant='span'>
                Rue 413 Entre Le Palais Des Sports Et La Place Can Proche De Guaduman, Bamako Mali
              </Typography>
            </p>
          </ListItem>
          <ListItem>
            <p>
              <Typography component={'strong'} variant='strong'>Horraire : </Typography>
              <Typography>Lundi - Vendredi : 9:00 - 18:00</Typography>
              <Typography>Samedi : 9:00 - 14:00</Typography>
              <Typography>Dimanche : Fermé</Typography>
            </p>
          </ListItem>
        </List>
    </Paper>
  )
}
