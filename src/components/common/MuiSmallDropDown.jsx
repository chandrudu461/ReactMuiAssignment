import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FormLabel } from '@mui/material'
import { Typography, useTheme } from '@mui/material'
import ArrowDown from '../../assets/svg/ArrowDown'
// import { DownArrowIcon } from '../../assets/Svg/DownArrowIcon'
// import { ArrowDropDown } from '@mui/icons-material'
export default function MuiSmallDropDown({
  label,
  data,
  onChange,
  nullIsAll,
  dropDownValue,
  setDropDownValue,
  disabled,
  ...props
}) {

  const theme = useTheme()
  const handleChange = (event) => {
    // console.log('value changed')
    setDropDownValue(event.target.value)
    onChange(event.target.value);
    console.log('event ;', event.target.name);
  }
  const isDisabled = disabled ? true : false

  React.useEffect(() => {
    if (data && !dropDownValue) {
      setDropDownValue(data[0]?.value)
    }
  }, [data, isDisabled])

  return (
    <div style={{ display: 'flex', alignItems: 'center', ...props }}>
      <FormLabel sx={{ fontSize: '10px' }}>{label}</FormLabel>
      <FormControl
        sx={{
          ml: 0.5,
          minWidth: 50,
          backgroundColor: (theme) => theme.palette.primary[0],
          borderRadius: '4px',
          '& .MuiSelect-root': {
            height: '20px',
          },
          '& .MuiSelect-select': {
            padding: '2.5px 12px',
          },
          '& .MuiSelect-select:focus': {
            // backgroundColor: (theme) => theme.palette.grey[100],
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
            borderWidth: '1px',
          },
          '& .MuiInputBase-root': {
            height: '21px',
          },
          '& fieldset': {
            border: 'none',
          },
        }}
        size='small'
        disabled={isDisabled}
      >
        <Select
          labelId='dropdown-small'
          id='dropdown-small'
          value={dropDownValue ? dropDownValue : ''}
          displayEmpty
          onChange={handleChange}
          // IconComponent={'none'}
          sx={{
            padding: '5px',
            '& .css-eghtey-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: '3px 8px',
            },
          }}
        >
          {/* <MenuItem disabled={true} value='' sx={{ display: 'none' }}>
            Subjects
          </MenuItem> */}
          {data &&
            data?.map((input, index) => (
              <MenuItem
                key={input?.value}
                sx={{
                  '&:hover': { backgroundColor: `${input?.color} !important` },
                  borderRadius: '3px',
                }}
                value={input?.value}
              >
                <Typography color={theme.palette.grey[400]} variant='body2'>{input?.name}</Typography>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  )
}
