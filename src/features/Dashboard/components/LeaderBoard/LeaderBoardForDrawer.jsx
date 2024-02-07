import React from 'react'
import CustomCard from '../../../../components/common/CustomCard'
import { Skeleton, Stack } from '@mui/material'
// import crownSvg from './../../../../assets/remedial/svg/crown.svg'
import LeaderRanking from './LeaderRanking'

const LeaderBoardForDrawer = ({ data, width = '100%', height = '100%' }) => {
    return (
        <CustomCard width={width} height={height}>
            <Stack gap={'16px'}>
                <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                    {/* <img src={crownSvg} width={20} height={20} alt='crownSvg'></img> */}
                    {/* <Typography component={'p'} sx={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: '16px',
                        color: 'grey.900' */}
                    {/* // }}>Leader Board</Typography> */}
                </Stack>
                {data ? <Stack gap={'22px'}>
                    {data.map((item, index) => <LeaderRanking key={index + 1} data={item} value={item.percentage} index={item.rank} />)}
                </Stack> :
                    <LeaderPlaceHolder />
                }
            </Stack>
        </CustomCard>
    )
}

export default LeaderBoardForDrawer


const LeaderPlaceHolder = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
        </Stack>
    )
}