import React from 'react'
import { Stack, Box, Typography, useTheme } from '@mui/material'
import ErrorIcon from '../../assets/svg/ErrorIcon'

const ErrorComponent = () => {
    const theme = useTheme()
    return (
        <Stack alignItems={'center'} justifyContent={'center'} marginY={0} height={'535px'}>
            <ErrorIcon />
            <Typography variant='errorMessage' color={theme.palette.grey[400]}> Error Loading Assessment</Typography>
            <Typography variant='errorReloadMessage' color={theme.palette.info.main}
                sx={{
                    cursor: 'pointer'
                }}
                onClick={() => window.location.reload()
                }> Reload </Typography>
        </Stack>
    )
}

export default ErrorComponent