import React from 'react'
import UserProfileSvg from '../../svg/UserProfileSvg';
import Stack from '@mui/material/Stack';
import { Typography, Box, useTheme } from '@mui/material';


const UserProfile = ({ name, email }) => {

    const theme = useTheme();

    return (
        <>
            <Box backgroundColor={theme.palette.grey[100]} sx={{
                maxWidth: '319px',
            }}>
                <Stack
                    direction={'row'}>
                    <UserProfileSvg />
                    <Stack padding={'0 0 0 22px'}>
                        <Typography
                            sx={{
                                color: theme.palette.grey[800],
                                fontWeight: 600,
                                lineHeight: '24px'
                            }}>{name}</Typography>
                        <Typography style={{
                            color: theme.palette.grey[400],
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '16px',
                        }}>{email}</Typography>
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}

export default UserProfile;