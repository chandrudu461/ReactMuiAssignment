import React from 'react'
import { Grid, useTheme } from '@mui/material'
import AssessmentDetailCard from '../../../../components/common/AssessmentDetailCard'
import CalenderIcon from '../../../../assets/svg/CalenderIcon'
import PerformanceIcon from '../../../../assets/svg/PerformanceIcon'
import AssessmentIcon from '../../../../assets/svg/AssessmentIcon'
import AssignmentIcon from '../../../../assets/svg/AssignmentIcon'
import CodingIcon from '../../../../assets/svg/CodingIcon'
import { Skeleton, Stack } from '@mui/material';

const Assessments = ({ loading }) => {
    const theme = useTheme()
    return (
        <>
            {loading ? (
                <Stack spacing={3} direction={'row'}>
                    <Skeleton variant="rectangular" width={230} height={80} animation="wave" />
                    <Skeleton variant="rectangular" width={230} height={80} animation="wave" />
                    <Skeleton variant="rectangular" width={230} height={80} animation="wave" />
                    <Skeleton variant="rectangular" width={230} height={80} animation="wave" />
                    <Skeleton variant="rectangular" width={230} height={80} animation="wave" />
                </Stack>
            ) : (
                <>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<CalenderIcon />}
                            iconBgColor={theme.palette.primary[100]}
                            title={'Attendance'}
                            contentMagnitude={92}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<PerformanceIcon />}
                            iconBgColor={theme.palette.info[0]}
                            title={'Avg. Performance'}
                            contentMagnitude={88}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<AssessmentIcon />}
                            iconBgColor={theme.palette.warning[100]}
                            title={'Assessment'}
                            contentMagnitude={45}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<AssignmentIcon />}
                            iconBgColor={theme.palette.error[100]}
                            title={'Assignment'}
                            contentMagnitude={79}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<CodingIcon />}
                            iconBgColor={theme.palette.success[100]}
                            title={'code'}
                            contentMagnitude={65}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                </>
            )}
        </>
    )
}

export default Assessments