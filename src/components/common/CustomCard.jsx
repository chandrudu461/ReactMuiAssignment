import { Box } from '@mui/material'
import React from 'react'

const CustomCard = ({ children, width = '100%', height = '100%' }) => {
    return (
        <Box sx={{
            width: width,
            height: height,
            padding: '20px',
            backgroundColor: theme => theme.palette.primary[0],
            borderRadius: '8px',
            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)'
        }}>
            <>{children}</>
        </Box>
    )
}

export default CustomCard