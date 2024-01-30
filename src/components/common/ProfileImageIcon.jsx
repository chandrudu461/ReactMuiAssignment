import React from 'react'
import { Box } from '@mui/material'
import User from '../../assets/images/userProfile.png';

const ProfileImageIcon = () => {
    return (
        <Box>
            <img
                width='50px'
                height='50px'
                style={{ borderRadius: '24px' }}
                src={User}
                alt="Description of the image"
            />
        </Box>
    )
}

export default ProfileImageIcon
