import React from 'react';
import { Box } from '@mui/material'
const UserProfileSvg = ({ link, editIcon, customRadius }) => {
    return (
        <Box position={'relative'}>
            <img
                src={link}
                alt="user profile"
                width={50}
                height={50}
                style={{
                    borderRadius: customRadius,
                }}
            />
            <Box position={'absolute'} right={0} bottom={0} height={'15px'} width={'15px'}>
                {editIcon}
            </Box>
        </Box>
    )
}

export default UserProfileSvg;