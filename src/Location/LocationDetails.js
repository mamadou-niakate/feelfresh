import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import { restaurant } from '../jsonfile'

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
        backgroundColor: 'transparent',
        color: '#657786'
      }}
    >
        <List>
          <ListItem divider>
            <Typography variant="h4">
              <span>Venez faire un tour 😉</span> 
            </Typography>
          </ListItem>
          <ListItem divider>
            <List>
              <ListItem>
                <Typography component={'h5'} variant='h5'><strong>Adresse :</strong> </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>Pays :</strong> { restaurant.address.country }
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>Ville :</strong> { restaurant.address.city }
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>Quartier :</strong> { restaurant.address.neighborhood }
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>Rue :</strong> {restaurant.address.street}
                </Typography>
              </ListItem>
            </List>
          </ListItem>
          <ListItem divider>
              <List>
                <ListItem>
                  <Typography component={'h5'} variant='h5'><strong>Horaires d'ouverture :</strong> </Typography>
                </ListItem>
                  {restaurant.schedule.map((item, index) => {
                    const [date, time] = item.split(':');
                    return (
                      <ListItem key={index}>
                        <Typography>
                            <strong>{date} : </strong> {time}
                        </Typography>
                      </ListItem>
                    )
                  })}
              </List>
          </ListItem>
          <ListItem>
              <List>
                <ListItem>
                  <Typography component={'h5'} variant='h5'><strong>Contact :</strong> </Typography>
                </ListItem>
                <ListItem>
                  <Typography> <strong> Téléphone : </strong> {restaurant.phone}</Typography>
                </ListItem>
                <ListItem>
                  <Typography> <strong> Email : </strong>  {restaurant.email}  </Typography>
                </ListItem>
              </List>
          </ListItem>
        </List>
    </Paper>
  )
}
