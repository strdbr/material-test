import { Box } from '@mui/material'
import React from 'react'

const Project = () => {
  return (
    <Box
        sx={{
            width: '300px',
            height: '300px',
            backgroundColor: '#424242',
            borderRadius: '16px',
            m: '5px',
            p: '10px',
            boxShadow: 20,
            '&:hover': {
                backgroundColor: '#808080',
                opacity: [0.9, 0.8, 0.7],
                transform: 'scale(1.05)',
                transition: 'all .2s ease-in-out',
            },
        }}
    >
        <p>Hello test!</p>
    </Box>
  )
}

export default Project