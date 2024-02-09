import React, { useState, useEffect } from 'react'
import { Box, Tab, Tabs, IconButton, Skeleton, Chip, Typography } from '@mui/material'
// import { EditIcon } from '../../assets/Svg/EditIcon'
import { styled } from '@mui/material/styles'
import MuiCustomChipCount from '../../../../components/common/MuiCustomChipCount'

const CustomTab = styled(Tabs)(({ theme }) => ({
  display: 'flex !important',
  justifyContent: 'space-around !important',
  // borderBottom: '1px solid #DFE3E8',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '3px',
    // marginBottom: '8px'
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: '80%',
    width: '100%',
    backgroundColor: '#0946C4',
  },
}))
function a11yProps(index) {
  return {
    id: `mui-tab-${index}`,
    'aria-controls': `mui-tabpanel-${index}`,
  }
}

export default function MuiCustomTab({ handleTabChange, value, data, edit }) {
  return (
    <CustomTab
      value={value}
      onChange={handleTabChange}
      TabIndicatorProps={{
        children: <span className='MuiTabs-indicatorSpan' />,
      }}
      aria-label='Tabs'
    >
      {data?.map((part, index) => {
        return (
          <Tab
            key={part.id}
            label={
              <span>
                {/* <Typography variant='muiTab' > */}
                {part.name}
                {/* </Typography> */}
                {part.count || part.count == 0 ? (
                  <MuiCustomChipCount
                    label={part.count}
                    padding={'4px 4px 1px 4px'}
                  />
                ) : null}
              </span>
            }
            // TabIndicatorProps={{ sx: { width: "50px" } }}
            sx={(theme) => ({
              fontWeight: 400,
              color: '#919EAB',
              fontSize: '15px',
              pl: index > 0 ? 2 : '',
              pb: '0px',
              '&.Mui-selected': {
                color: '#0946C4',
                fontWeight: '400',
              },
              '&::before':
                part.group === 'changed'
                  ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    height: '20px', // Adjust the height of the line
                    width: '2px', // Adjust the width of the line
                    backgroundColor: theme.palette.primary.main, // Adjust color as needed
                    transform: 'translateY(-30%)', // Center the line vertically
                  }
                  : '',
            })}
            value={part.id}
            {...a11yProps(index)}
          />
        )
      })}
      {/* 
      {edit && (
        <Chip
          onClick={edit}
          sx={{
            width: '24px',
            height: '24px',
            mt: 2,
            ml: 1,
            '& .MuiChip-label': {
              padding: 0,
            },
          }}
          label={<EditIcon />}
        />
      )} */}
    </CustomTab>
  )
}
