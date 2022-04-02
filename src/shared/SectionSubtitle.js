import { Typography } from '@mui/material'
import React from 'react'

const SectionSubtitle = ({ subTitle }) => {
  return (
    <Typography variant='h6' gutterBottom sx={{ color: '#686D76', marginBottom: 5 }}>
        {subTitle}
    </Typography>
  )
}

export default SectionSubtitle