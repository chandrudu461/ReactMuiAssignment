import React from 'react'
import { Box, Stack, Typography, Icon } from '@mui/material'
import CountUp from 'react-countup'

const AssessmentDetailCard = ({
  icon,
  iconBgColor,
  iconSize,
  title,
  contentMagnitude,
  contentType,
  showCountingAnimation,
}) => {
  return (
    <Box
      sx={{
        height: {
          sm: '80px', // Height for small screens
          md: '70px', // Height for medium screens
          lg: '60px', // Height for large screens
          xl: '60px',
        },
        minHeight: '60px',
        minWidth: '100px',
        width: '100%',
        maxWidth: '230px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        padding: '8px 8px 8px 8px',
      }}
    >
      <Stack
        direction={'row'}
        gap='0 10px'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <Stack
          direction='row'
          alignItems='center'
          sx={{
            width: '44px',
            height: '44px',
            background: `${iconBgColor}`,
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <Icon children={icon} fontSize={iconSize} />
          {/* {icon} */}
        </Stack>

        <Stack direction='column' justifyContent='center'>
          <Typography variant='caption2'>{title}</Typography>
          <Typography variant='h5'>
            {showCountingAnimation ? (
              <CountUp
                start={0}
                end={contentMagnitude}
                duration={3}
                suffix={
                  contentType === 'percent'
                    ? '%'
                    : contentType === 'time'
                      ? ' Min'
                      : contentType === 'count'
                        ? ''
                        : ''
                }
              />
            ) : contentType === 'percent' ? (
              `${contentMagnitude}%`
            ) : contentType === 'time' ? (
              `${contentMagnitude} Min`
            ) : (
              contentMagnitude
            )}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AssessmentDetailCard
