import React from 'react';
import { Box } from '@mui/material'
const UserProfileSvg = ({ link }) => {
    return (
        <Box>
            <img
                src={link}
                alt="Description of the image"
                width={48}
                height={48}
            />
        </Box>
    )
}

export default UserProfileSvg;