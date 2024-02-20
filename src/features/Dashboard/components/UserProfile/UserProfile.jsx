import React from 'react'
import UserProfileSvg from '../../../../assets/svg/UserProfileSvg';
import Stack from '@mui/material/Stack';
import { Typography, Box, useTheme } from '@mui/material';


const UserProfile = ({ name, email, link, width }) => {

    const theme = useTheme();

    return (
        <>
            <Box backgroundColor={theme.palette.grey[100]}
                maxWidth={width}>

                <Stack
                    direction={'row'}>
                    <Box margin={'10px'}>
                        <UserProfileSvg link={link} customRadius={"4px"} />
                    </Box>
                    <Stack alignItems={'flex-start'} justifyContent={'center'}>
                        <Typography
                            variant='body8'
                            sx={{
                                color: theme.palette.grey[800],
                                // fontWeight: 600,
                                // lineHeight: '24px'
                            }}>{name}</Typography>
                        <Typography
                            variant='body1'
                            style={{
                                color: theme.palette.grey[400],
                                // fontFamily: 'Poppins',
                                // fontSize: '12px',
                                // fontStyle: 'normal',
                                // fontWeight: 400,
                                // lineHeight: '16px',
                            }}>{email}</Typography>
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}

export default UserProfile;