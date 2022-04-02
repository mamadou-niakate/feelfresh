import { Typography } from '@mui/material'
import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <Typography variant='h3' gutterBottom sx={{ marginBottom: -1 }}>
        {title}
    </Typography>
  )
}

export default SectionTitle