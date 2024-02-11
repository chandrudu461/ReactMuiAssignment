import React from 'react';
import { Box } from '@mui/material'
const UserProfileSvg = ({ link }) => {
    return (
        <Box>
            <img
                src={link}
                alt="Description of the image"
                width={50}
                height={50}
                style={{
                    borderRadius: '24px',
                    marginTop: '15px',
                    marginBottom: '15px'
                }}
            />
        </Box>
    )
}

export default UserProfileSvg;