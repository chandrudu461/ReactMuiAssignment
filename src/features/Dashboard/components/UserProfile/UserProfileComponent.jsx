import React from 'react'
import { Typography } from '@mui/material'
import UserProfile from './UserProfile'

const UserProfileComponent = () => {
    return (
        <>
            <Typography
                style={{
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '28px',
                }}
            >
                User Profile
            </Typography>
            <UserProfile
                name={'Maharrm Hasanli'}
                email={'maga.hesenli@gmail.com'}
            />

        </>
    )
}

export default UserProfileComponent