import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/material';
import { Typography, useTheme, Stack } from '@mui/material';
import Radio from '@mui/material/Radio'; // Import Radio component
import ArrowDown from '../../assets/svg/ArrowDown';

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
  const theme = useTheme();
  const handleChange = (event) => {
    setDropDownValue(event.target.value);
    onChange(event.target.value);
  };
  const isDisabled = disabled ? true : false;

  React.useEffect(() => {
    if (data && !dropDownValue) {
      setDropDownValue(data[0]?.value);
    }
  }, [data, isDisabled]);

  return (
    <FormControl
      sx={{
        display: 'flex',
        alignItems: 'center',
        ...props,
      }}
      size='small'
      disabled={isDisabled}
    >
      <FormLabel sx={{ fontSize: '10px' }}>{label}</FormLabel>
      <Select
        labelId='dropdown-small'
        id='dropdown-small'
        value={dropDownValue ? dropDownValue : ''}
        displayEmpty
        onChange={handleChange}
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
      >
        {data &&
          data?.map((input, index) => (
            <MenuItem
              key={input?.value}
              sx={{
                '&:hover': { backgroundColor: `${input?.color} !important` },
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
              }}
              value={input?.value}
            >
              <Stack direction="row">
                <Radio checked={dropDownValue === input?.value} color='primary' />
                <Stack justifyContent={'center'}>
                  <Typography color={theme.palette.grey[900]} variant='body2'>
                    {input?.name}
                  </Typography>
                </Stack>
              </Stack>
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
