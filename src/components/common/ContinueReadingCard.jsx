import { Box, Stack } from '@mui/material'
import React from 'react'
import RightButtonIcon from '../../assets/svg/RightButtonIcon'
import DocumentIcon from '../../assets/svg/DocumentIcon'
import { Link } from 'react-router-dom'

const ContinueReadingCard = ({ name, url, onClick, icon }) => {

    return (
        <Link to={`/pdfview/${encodeURIComponent(url)}`}>
            <Stack direction="row" sx={{
                width: '285px',
                height: '80px',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0px 0px 15px 0px rgba(16, 24, 40, 0.04)',
                cursor: 'pointer'
            }}>
                <Box sx={{
                    width: '248px',
                    height: '60px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15px',
                    alignItems: 'center'
                }} onClick={onClick}>
                    <Box sx={{
                        width: '60px',
                        height: '60px',
                        padding: '15px',
                        backgroundColor: '#dfe3e8',
                        borderRadius: '5px',
                    }}> {icon} </Box>
                    <Box sx={{
                        color: '#161C24',
                        height: '60px',
                        width: '135px',
                        lineHeight: 'normal',
                        paddingTop: '10px',
                    }}>{name}</Box>
                    <Box><RightButtonIcon /></Box>
                </Box>
            </Stack>
        </Link>
    )
}

export default ContinueReadingCard