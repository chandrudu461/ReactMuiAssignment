import { Box } from '@mui/material';
import React from 'react'
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

const DashboardChip = ({ backgroundColor, label, percentage, icon }) => {
    const theme = useTheme()
    return (
        <Box>
            <Box
                display="flex"
                width="230px"
                padding="10px 27px 10px 10px"
                alignItems="center"
                gap="15px"
                borderRadius="10px"
                border="1px solid"
                borderColor={theme.palette.grey[100]}
                bgcolor={theme.palette.primary[0]}
                boxShadow="10px 10px 32px 0px rgba(22, 22, 22, 0.04)"
                margin='20px 12px 28px 14px'
            >
                <Box style={{
                    width: 60,
                    height: 60,
                    background: backgroundColor,
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {icon}
                </Box>
                <Box>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--On-hover-Stroke, #919EAB)',
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            marginBottom: '20px'
                        }}
                    >
                        {label}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#161C24',
                            fontFamily: 'Poppins',
                            fontSize: '25px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                        }}
                    >
                        {percentage}%
                    </Typography>
                </Box>
            </Box >
        </Box >
    )
}

export default DashboardChip