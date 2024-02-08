import React from 'react'
import { Typography } from '@mui/material'
import UserProfile from './UserProfile'

const UserProfileComponent = ({ name, email, link }) => {
    return (
        <>
            <Typography
                variant='h5'
            >
                User Profile
            </Typography>
            <UserProfile
                name={name}
                email={email}
                link={link}
            />
        </>
    )
}

export default UserProfileComponent