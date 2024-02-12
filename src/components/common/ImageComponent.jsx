import React from 'react'
import { Box } from '@mui/material'

const ImageComponent = ({ imageUrl }) => {
    return (
        <Box style={{
            width: 50,
            height: 50,
            borderRadius: 24,
            background: `url(${imageUrl}) lightgray 50% / cover no-repeat, #C4C4C4`,
        }}>
        </Box>
    )
}

export default ImageComponent