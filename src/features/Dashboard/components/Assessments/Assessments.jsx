import React from 'react'
import { Grid } from '@mui/material'
import AssessmentDetailCard from '../../../../components/common/AssessmentDetailCard'
import CalenderIcon from '../../../../assets/svg/CalenderIcon'
import PerformanceIcon from '../../../../assets/svg/PerformanceIcon'
import AssessmentIcon from '../../../../assets/svg/AssessmentIcon'
import AssignmentIcon from '../../../../assets/svg/AssignmentIcon'
import CodingIcon from '../../../../assets/svg/CodingIcon'
import { Skeleton, Stack } from '@mui/material';

const Assessments = ({ loading }) => {
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
                            iconBgColor={'#E7EEFE'}
                            title={'Attendance'}
                            contentMagnitude={92}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<PerformanceIcon />}
                            iconBgColor={'#E6F2FD'}
                            title={'Avg. Performance'}
                            contentMagnitude={88}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<AssessmentIcon />}
                            iconBgColor={'#FFF8EC'}
                            title={'Assessment'}
                            contentMagnitude={45}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<AssignmentIcon />}
                            iconBgColor={'#FEECEB'}
                            title={'Assignment'}
                            contentMagnitude={79}
                            contentType={'percent'}
                            showCountingAnimation
                        />
                    </Grid>
                    <Grid item xs>
                        <AssessmentDetailCard
                            icon={<CodingIcon />}
                            iconBgColor={'#EDFAEE'}
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