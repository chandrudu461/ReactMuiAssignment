import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  TableCell,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
} from '@mui/material'
import { useTheme } from '@mui/material'
import Circle from '../../svg/Circle';
// import { ArrowDown } from '../../../../assets/Svg/ArrowDown'
// import { ArrowUp } from '../../../../assets/Svg/ArrowUp'
// import { DownArrow2 } from '../../../../assets/Svg/DownArrow2'

const options = [
  { id: 1, value: 'Timeout' },
  { id: 2, value: 'Interrupted' },
  { id: 3, value: 'On Submit' },
  { id: 4, value: 'Tabswitch' },
]

const ITEM_HEIGHT = 48

const MuiCustomTableHeaderCellWithSortandSelect = ({
  itemData,
  index,
  isSortable,
  isSelectable,
  arrayLength,
  sortHandler,
  selectHandler,
}) => {
  // const { submissionTypesToShowinStudentTable } = useSelector(
  //   (state) => state.assessment
  // )
  const submissionTypesToShowinStudentTable = [1, 2, 3];
  const [sortOrder, setSortOrder] = useState('asc')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    //console.log(event)
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeSortOrder = () => {
    if (sortOrder === 'asc') {
      sortHandler('des', index)
      setSortOrder('des')
    } else {
      sortHandler('asc', index)
      setSortOrder('asc')
    }
  }
  const theme = useTheme()
  return (
    <>
      <TableCell
        sx={{
          padding: '5px 0 5px 16px',
          borderRadius:
            index === 0
              ? '5px 0 0 5px'
              : index === arrayLength - 1
                ? '0 5px 5px 0'
                : '0',
          border: 'none',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          gap={'0.5rem'}
          sx={{ height: '20px' }}
        >
          <Typography
            variant='body2'
            sx={{
              color: theme.palette.grey[500],
              lineHeight: '1rem',
            }}
          >
            {itemData.label}
          </Typography>
          {isSortable ? (
            <IconButton
              aria-label='delete'
              sx={{ padding: '0' }}
              onClick={changeSortOrder}
            >
              {sortOrder === 'asc' ? (
                // <ArrowUp fontsize='small' color={theme.palette.grey[500]} />
                <Circle />
              ) : (
                // <ArrowDown fontsize='small' color={theme.palette.grey[500]} />
                <Circle />
              )}
            </IconButton>
          ) : null}
          {isSelectable ? (
            <>
              <IconButton
                aria-label='delete'
                sx={{ padding: '0' }}
                onClick={handleClick}
              >
                {/* <DownArrow2 color={theme.palette.grey[500]} /> */}
              </IconButton>
              <Menu
                id='long-menu'
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} sx={{ padding: '0' }}>
                    <Stack direction='row' alignItems='center'>
                      <Checkbox
                        size='small'
                        sx={{
                          '&.Mui-checked': {
                            color: 'primary',
                          },
                        }}
                        onChange={(e) => selectHandler(e, option.id)}
                        checked={submissionTypesToShowinStudentTable?.includes(
                          option.id
                        )}
                      />
                      <Typography
                        variant='body1'
                        sx={{ color: theme.palette.grey[900] }}
                      >
                        {option.value}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={(e) => {
                    selectHandler(e, 5)
                    handleClose()
                  }}
                  sx={{ justifyContent: 'center' }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      color: theme.palette.info[700],
                      fontWeight: 500,
                    }}
                  >
                    Clear all
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : null}
        </Stack>
      </TableCell>
    </>
  )
}

export default MuiCustomTableHeaderCellWithSortandSelect
