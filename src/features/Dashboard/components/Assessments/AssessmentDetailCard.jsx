import React from 'react'
import { Box, Stack, Typography, Icon } from '@mui/material'
import CountUp from 'react-countup'
import { useTheme } from '@mui/material'

const AssessmentDetailCard = ({
  icon,
  iconBgColor,
  iconSize,
  title,
  contentMagnitude,
  contentType,
  showCountingAnimation,
}) => {

  const theme = useTheme();
  const greyColor = theme.palette.grey[100]
  console.log(greyColor)

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
        boxShadow: ' 10px 10px 32px 0px rgba(22, 22, 22, 0.04);',
        padding: '10px 27px 10px 10px',
        border: '1px solid ${greyColor}'
      }}
    >
      <Stack
        direction={'row'}
        gap='0 10px'
        alignItems='center'
        sx={{ width: '50%', height: '100%' }}
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
          <Box width={'126px'}>
            <Typography variant='caption2'>{title}</Typography>
          </Box>
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
