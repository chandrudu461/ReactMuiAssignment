
import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material'

MuiCustomChipCount.defaultProps = {
  label: 0,
  selected: true,
  padding: '3px 4px 1px 4px'
}

export default function MuiCustomChipCount({ label, selected, padding, ...props }) {
  const theme = useTheme()
  return (
    <Chip sx={{
      width: 'auto',
      height: '16px',
      mb: '2px',
      background: (theme) => selected ? theme.palette.grey[400] : theme.palette.grey[100],
      color: selected ? theme.palette.primary[0] : theme.palette.grey[400],
      fontSize: '12px',
      ml: 0.5,
      ...props,
      '& .MuiChip-label': {
        p: padding,
      },
    }}
      label={label} />

  )
}
