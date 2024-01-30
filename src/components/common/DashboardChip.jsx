import { Box } from '@mui/material';
import React from 'react'
import Typography from '@mui/material/Typography';
import Calender from './CalendarComponent'

const DashboardChip = ({ backgroundColor, label, percentage, icon }) => {
    return (
        <div>
            <Box
                display="flex"
                width="230px"
                padding="10px 27px 10px 10px"
                alignItems="center"
                gap="15px"
                borderRadius="10px"
                border="1px solid #F4F6F8"
                bgcolor="#FFF"
                boxShadow="10px 10px 32px 0px rgba(22, 22, 22, 0.04)"
                margin='20px 12px 28px 14px'
            >
                <div style={{
                    width: 60,
                    height: 60,
                    background: backgroundColor,
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {icon}
                </div>
                <div>
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
                </div>
            </Box >
        </div >
    )
}

export default DashboardChip