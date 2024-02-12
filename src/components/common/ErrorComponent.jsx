import React from 'react'
import { Stack, Box, Typography, useTheme } from '@mui/material'
import ErrorIcon from '../../assets/svg/ErrorIcon'

const ErrorComponent = () => {
    const theme = useTheme()
    return (
        <Stack alignItems={'center'} justifyContent={'center'} marginY={0} height={'535px'}>
            <ErrorIcon />
            <Typography variant='errorMessage'> Error Loading Assessment</Typography>
            <Typography color={theme.palette.info.main}> Reload </Typography>
        </Stack>
    )
}

export default ErrorComponent