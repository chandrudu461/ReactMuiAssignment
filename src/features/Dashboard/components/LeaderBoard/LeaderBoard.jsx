import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import LeaderBoardCard from './LeaderBoardCard';
import LeaderBoardForDrawer from './LeaderBoardForDrawer';
import { Drawer, Stack } from '@mui/material';
import BackButtonIcon from '../../../../assets/svg/BackButtonIcon'

const LeaderBoard = ({ leaderBoardData, loading }) => {
    const [drawerState, setDrawerState] = useState(null)

    const toggleDrawer = () => {
        setDrawerState(!drawerState)
    }
    const closeDrawer = () => {
        setDrawerState(false);
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
                    loading={loading}
                    data={leaderBoardData}
                // width='319px'
                // height='430px'
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
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>
                            <Typography variant='h6'>Leaderboard</Typography>
                        </Box>
                        <Box
                            onClick={closeDrawer}
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}>
                            <BackButtonIcon />
                        </Box>
                    </Stack>
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