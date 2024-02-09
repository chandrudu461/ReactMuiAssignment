import React from 'react'
import { Typography, Skeleton } from '@mui/material'
import UserProfile from './UserProfile'

const UserProfileComponent = ({ name, email, link, loading }) => {
    return (
        <>
            {loading ? (
                <Skeleton variant="rectangular" width={'100%'} height={150} />
            ) : (<>

                <Typography variant='h5'>
                    User Profile
                </Typography>
                <UserProfile
                    name={name}
                    email={email}
                    link={link}
                />
            </>
            )}
        </>
    )
}

export default UserProfileComponent
