import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import LeaderBoardCard from './LeaderBoardCard';
import LeaderBoardForDrawer from './LeaderBoardForDrawer';
import { Drawer } from '@mui/material';

const LeaderBoard = ({ leaderBoardData }) => {
    const [drawerState, setDrawerState] = useState(null)

    const toggleDrawer = () => {
        setDrawerState(!drawerState)
    }

    return (
        <>
            <Box
                onClick={toggleDrawer}
                sx={{
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }}
            >
                <LeaderBoardCard
                    data={leaderBoardData}
                    width='319px'
                    height='425px'
                />
            </Box>
            <Drawer
                anchor='right'
                open={drawerState}
                onClose={toggleDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '30%',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        p: 2,
                    }}
                >
                    <Typography variant='h6'>Leaderboard</Typography>
                    <LeaderBoardForDrawer
                        data={leaderBoardData}
                        width='100%'
                        height='100%'
                    />
                </Box>
            </Drawer>
        </>
    )
}

export default LeaderBoard