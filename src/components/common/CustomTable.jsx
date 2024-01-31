import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material'

import { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
//import ArrowBackIcon from '@mui/icons-material/ArrowBack'
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const rows = [
  {
    subject: 'Subject 01',
    semester: 2,
    total_timespent: 69,
    submission_type: 2,
    internet_speed: 7,
    percentage_scored: 66,
    attempted: 1,
  },
  {
    subject: 'Subject 02',
    semester: 3,
    total_timespent: 9,
    submission_type: 2,
    internet_speed: 10,
    percentage_scored: 3,
    attempted: 1,
  },
  {
    subject: 'Subject 03',
    semester: 1,
    total_timespent: 87,
    submission_type: 3,
    internet_speed: 9,
    percentage_scored: 38,
    attempted: 1,
  },
  {
    subject: 'Subject 04',
    semester: 1,
    total_timespent: 7,
    submission_type: 4,
    internet_speed: 1,
    percentage_scored: 23,
    attempted: 1,
  },
  {
    subject: 'Subject 05',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 06',
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 07',
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 08',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 09',
    semester: 2,
    total_timespent: 31,
    submission_type: 4,
    internet_speed: 10,
    percentage_scored: 40,
    attempted: 1,
  },
  {
    subject: 'Subject 10',
    semester: 2,
    total_timespent: 77,
    submission_type: 3,
    internet_speed: 9,
    percentage_scored: 74,
    attempted: 1,
  },
  {
    subject: 'Subject 11',
    semester: 1,
    total_timespent: 92,
    submission_type: 4,
    internet_speed: 7,
    percentage_scored: 22,
    attempted: 1,
  },
  {
    subject: 'Subject 12',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 13',
    semester: 1,
    total_timespent: 39,
    submission_type: 4,
    internet_speed: 4,
    percentage_scored: 81,
    attempted: 1,
  },
  {
    subject: 'Subject 14',
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 15',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 16',
    semester: 1,
    total_timespent: 4,
    submission_type: 4,
    internet_speed: 9,
    percentage_scored: 50,
    attempted: 1,
  },
  {
    subject: 'Subject 17',
    semester: 2,
    total_timespent: 54,
    submission_type: 2,
    internet_speed: 6,
    percentage_scored: 89,
    attempted: 1,
  },
  {
    subject: 'Subject 18',
    semester: 2,
    total_timespent: 36,
    submission_type: 2,
    internet_speed: 3,
    percentage_scored: 61,
    attempted: 1,
  },
  {
    subject: 'Subject 19',
    semester: 1,
    total_timespent: 34,
    submission_type: 2,
    internet_speed: 3,
    percentage_scored: 72,
    attempted: 1,
  },
  {
    subject: 'Subject 20',
    semester: 1,
    total_timespent: 4,
    submission_type: 4,
    internet_speed: 7,
    percentage_scored: 38,
    attempted: 1,
  },
  {
    subject: 'Subject 21',
    semester: 3,
    total_timespent: 69,
    submission_type: 2,
    internet_speed: 8,
    percentage_scored: 14,
    attempted: 1,
  },
  {
    subject: 'Subject 22',
    semester: 1,
    total_timespent: 66,
    submission_type: 1,
    internet_speed: 2,
    percentage_scored: 76,
    attempted: 1,
  },
  {
    subject: 'Subject 23',
    semester: 3,
    total_timespent: 26,
    submission_type: 1,
    internet_speed: 5,
    percentage_scored: 55,
    attempted: 1,
  },
  {
    subject: 'Subject 24',
    semester: 3,
    total_timespent: 39,
    submission_type: 4,
    internet_speed: 10,
    percentage_scored: 61,
    attempted: 1,
  },
  {
    subject: 'Subject 25',
    semester: 2,
    total_timespent: 80,
    submission_type: 3,
    internet_speed: 3,
    percentage_scored: 27,
    attempted: 1,
  },
  {
    subject: 'Subject 26',
    semester: 2,
    total_timespent: 24,
    submission_type: 1,
    internet_speed: 3,
    percentage_scored: 96,
    attempted: 1,
  },
  {
    subject: 'Subject 27',
    semester: 1,
    total_timespent: 49,
    submission_type: 1,
    internet_speed: 3,
    percentage_scored: 13,
    attempted: 1,
  },
  {
    subject: 'Subject 28',
    semester: 1,
    total_timespent: 7,
    submission_type: 3,
    internet_speed: 9,
    percentage_scored: 27,
    attempted: 1,
  },
  {
    subject: 'Subject 29',
    semester: 2,
    total_timespent: 40,
    submission_type: 3,
    internet_speed: 6,
    percentage_scored: 60,
    attempted: 1,
  },
  {
    subject: 'Subject 30',
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 31',
    semester: 3,
    total_timespent: 48,
    submission_type: 3,
    internet_speed: 2,
    percentage_scored: 35,
    attempted: 1,
  },
  {
    subject: 'Subject 32',
    semester: 1,
    total_timespent: 59,
    submission_type: 2,
    internet_speed: 6,
    percentage_scored: 66,
    attempted: 1,
  },
  {
    subject: 'Subject 33',
    semester: 1,
    total_timespent: 71,
    submission_type: 4,
    internet_speed: 4,
    percentage_scored: 16,
    attempted: 1,
  },
  {
    subject: 'Subject 34',
    semester: 3,
    total_timespent: 9,
    submission_type: 3,
    internet_speed: 5,
    percentage_scored: 56,
    attempted: 1,
  },
  {
    subject: 'Subject 35',
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 36',
    semester: 3,
    total_timespent: 64,
    submission_type: 3,
    internet_speed: 8,
    percentage_scored: 37,
    attempted: 1,
  },
  {
    subject: 'Subject 37',
    semester: 2,
    total_timespent: 86,
    submission_type: 3,
    internet_speed: 9,
    percentage_scored: 15,
    attempted: 1,
  },
  {
    subject: 'Subject 38',
    semester: 2,
    total_timespent: 20,
    submission_type: 2,
    internet_speed: 1,
    percentage_scored: 48,
    attempted: 1,
  },
  {
    subject: 'Subject 39',
    semester: 3,
    total_timespent: 85,
    submission_type: 3,
    internet_speed: 9,
    percentage_scored: 21,
    attempted: 1,
  },
  {
    subject: 'Subject 40',
    semester: 2,
    total_timespent: 53,
    submission_type: 1,
    internet_speed: 7,
    percentage_scored: 4,
    attempted: 1,
  },
  {
    subject: 'Subject 41',
    semester: 2,
    total_timespent: 71,
    submission_type: 4,
    internet_speed: 4,
    percentage_scored: 15,
    attempted: 1,
  },
  {
    subject: 'Subject 42',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 43',
    semester: 2,
    total_timespent: 11,
    submission_type: 4,
    internet_speed: 4,
    percentage_scored: 98,
    attempted: 1,
  },
  {
    subject: 'Subject 44',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 45',
    semester: 2,
    total_timespent: 87,
    submission_type: 1,
    internet_speed: 6,
    percentage_scored: 40,
    attempted: 1,
  },
  {
    subject: 'Subject 46',
    semester: 3,
    total_timespent: 22,
    submission_type: 4,
    internet_speed: 5,
    percentage_scored: 19,
    attempted: 1,
  },
  {
    subject: 'Subject 47',
    semester: 3,
    total_timespent: 62,
    submission_type: 4,
    internet_speed: 7,
    percentage_scored: 16,
    attempted: 1,
  },
  {
    subject: 'Subject 48',
    semester: 3,
    total_timespent: 99,
    submission_type: 1,
    internet_speed: 9,
    percentage_scored: 96,
    attempted: 1,
  },
  {
    subject: 'Subject 49',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 50',
    semester: 2,
    total_timespent: 46,
    submission_type: 2,
    internet_speed: 4,
    percentage_scored: 5,
    attempted: 1,
  },
  {
    subject: 'Subject 51',
    semester: 2,
    total_timespent: 15,
    submission_type: 2,
    internet_speed: 6,
    percentage_scored: 41,
    attempted: 1,
  },
  {
    subject: 'Subject 52',
    semester: 1,
    total_timespent: 3,
    submission_type: 3,
    internet_speed: 3,
    percentage_scored: 69,
    attempted: 1,
  },
  {
    subject: 'Subject 53',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 54',
    semester: 3,
    total_timespent: 20,
    submission_type: 1,
    internet_speed: 6,
    percentage_scored: 31,
    attempted: 1,
  },
  {
    subject: 'Subject 55',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 56',
    semester: 3,
    total_timespent: 1,
    submission_type: 2,
    internet_speed: 8,
    percentage_scored: 13,
    attempted: 1,
  },
  {
    subject: 'Subject 57',
    semester: 2,
    total_timespent: 38,
    submission_type: 2,
    internet_speed: 9,
    percentage_scored: 35,
    attempted: 1,
  },
  {
    subject: 'Subject 58',
    semester: 2,
    total_timespent: 23,
    submission_type: 3,
    internet_speed: 3,
    percentage_scored: 51,
    attempted: 1,
  },
  {
    subject: 'Subject 59',
    semester: 3,
    total_timespent: 94,
    submission_type: 3,
    internet_speed: 1,
    percentage_scored: 52,
    attempted: 1,
  },
  {
    subject: 'Subject 60',
    semester: 3,
    total_timespent: 32,
    submission_type: 1,
    internet_speed: 7,
    percentage_scored: 18,
    attempted: 1,
  },
  {
    subject: 'Subject 61',
    semester: 3,
    total_timespent: 81,
    submission_type: 1,
    internet_speed: 9,
    percentage_scored: 31,
    attempted: 1,
  },
  {
    subject: 'Subject 62',
    semester: 2,
    total_timespent: 98,
    submission_type: 4,
    internet_speed: 10,
    percentage_scored: 9,
    attempted: 1,
  },
  {
    subject: 'Subject 63',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 64',
    semester: 2,
    total_timespent: 77,
    submission_type: 4,
    internet_speed: 2,
    percentage_scored: 90,
    attempted: 1,
  },
  {
    subject: 'Subject 65',
    semester: 2,
    total_timespent: 58,
    submission_type: 3,
    internet_speed: 7,
    percentage_scored: 7,
    attempted: 1,
  },
  {
    subject: 'Subject 66',
    semester: 1,
    total_timespent: 62,
    submission_type: 2,
    internet_speed: 9,
    percentage_scored: 76,
    attempted: 1,
  },
  {
    subject: 'Subject 67',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 68',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 69',
    semester: 1,
    total_timespent: 45,
    submission_type: 1,
    internet_speed: 10,
    percentage_scored: 74,
    attempted: 1,
  },
  {
    subject: 'Subject 70',
    semester: 3,
    total_timespent: 85,
    submission_type: 2,
    internet_speed: 1,
    percentage_scored: 38,
    attempted: 1,
  },
  {
    subject: 'Subject 71',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 72',
    semester: 2,
    total_timespent: 53,
    submission_type: 1,
    internet_speed: 5,
    percentage_scored: 52,
    attempted: 1,
  },
  {
    subject: 'Subject 73',
    semester: 2,
    total_timespent: 19,
    submission_type: 3,
    internet_speed: 7,
    percentage_scored: 63,
    attempted: 1,
  },
  {
    subject: 'Subject 74',
    semester: 3,
    total_timespent: 66,
    submission_type: 4,
    internet_speed: 8,
    percentage_scored: 37,
    attempted: 1,
  },
  {
    subject: 'Subject 75',
    semester: 1,
    total_timespent: 48,
    submission_type: 3,
    internet_speed: 9,
    percentage_scored: 76,
    attempted: 1,
  },
  {
    subject: 'Subject 76',
    semester: 1,
    total_timespent: 90,
    submission_type: 1,
    internet_speed: 4,
    percentage_scored: 76,
    attempted: 1,
  },
  {
    subject: 'Subject 77',
    semester: 2,
    total_timespent: 22,
    submission_type: 3,
    internet_speed: 6,
    percentage_scored: 16,
    attempted: 1,
  },
  {
    subject: 'Subject 78',
    semester: 3,
    total_timespent: 98,
    submission_type: 1,
    internet_speed: 3,
    percentage_scored: 45,
    attempted: 1,
  },
  {
    subject: 'Subject 79',
    semester: 3,
    total_timespent: 21,
    submission_type: 3,
    internet_speed: 8,
    percentage_scored: 86,
    attempted: 1,
  },
  {
    subject: 'Subject 80',
    semester: 2,
    total_timespent: 87,
    submission_type: 1,
    internet_speed: 1,
    percentage_scored: 64,
    attempted: 1,
  },
  {
    subject: 'Subject 81',
    semester: 3,
    total_timespent: 20,
    submission_type: 3,
    internet_speed: 1,
    percentage_scored: 53,
    attempted: 1,
  },
  {
    subject: 'Subject 82',
    semester: 1,
    total_timespent: 11,
    submission_type: 4,
    internet_speed: 10,
    percentage_scored: 85,
    attempted: 1,
  },
  {
    subject: 'Subject 83',
    semester: 3,
    total_timespent: 31,
    submission_type: 4,
    internet_speed: 10,
    percentage_scored: 70,
    attempted: 1,
  },
  {
    subject: 'Subject 84',
    semester: 1,
    total_timespent: 94,
    submission_type: 4,
    internet_speed: 2,
    percentage_scored: 100,
    attempted: 1,
  },
  {
    subject: 'Subject 85',
    semester: 1,
    total_timespent: 25,
    submission_type: 2,
    internet_speed: 4,
    percentage_scored: 43,
    attempted: 1,
  },
  {
    subject: 'Subject 86',
    semester: 3,
    total_timespent: 71,
    submission_type: 1,
    internet_speed: 5,
    percentage_scored: 19,
    attempted: 1,
  },
  {
    subject: 'Subject 87',
    semester: 3,
    total_timespent: 100,
    submission_type: 3,
    internet_speed: 8,
    percentage_scored: 6,
    attempted: 1,
  },
  {
    subject: 'Subject 88',
    semester: 1,
    total_timespent: 73,
    submission_type: 1,
    internet_speed: 3,
    percentage_scored: 37,
    attempted: 1,
  },
  {
    subject: 'Subject 89',
    semester: 1,
    total_timespent: 56,
    submission_type: 4,
    internet_speed: 2,
    percentage_scored: 46,
    attempted: 1,
  },
  {
    subject: 'Subject 90',
    semester: 3,
    total_timespent: 61,
    submission_type: 2,
    internet_speed: 2,
    percentage_scored: 57,
    attempted: 1,
  },
  {
    subject: 'Subject 91',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 92',
    semester: 3,
    total_timespent: 96,
    submission_type: 2,
    internet_speed: 5,
    percentage_scored: 17,
    attempted: 1,
  },
  {
    subject: 'Subject 93',
    semester: 1,
    total_timespent: 98,
    submission_type: 4,
    internet_speed: 6,
    percentage_scored: 69,
    attempted: 1,
  },
  {
    subject: 'Subject 94',
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 95',
    semester: 2,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0,
  },
  {
    subject: 'Subject 96',
    semester: 1,
    total_timespent: 24,
    submission_type: 3,
    internet_speed: 6,
    percentage_scored: 30,
    attempted: 1,
  },
  {
    subject: 'Subject 97',
    semester: 2,
    total_timespent: 79,
    submission_type: 1,
    internet_speed: 1,
    percentage_scored: 44,
    attempted: 1,
  },
  {
    subject: 'Subject 98',
    semester: 3,
    total_timespent: 86,
    submission_type: 2,
    internet_speed: 1,
    percentage_scored: 52,
    attempted: 1,
  },
  {
    subject: 'Subject 99',
    semester: 2,
    total_timespent: 0,
    submission_type: 2,
    internet_speed: 7,
    percentage_scored: 62,
    attempted: 1,
  },
  {
    subject: 'Subject 100',
    semester: 1,
    total_timespent: 28,
    submission_type: 4,
    internet_speed: 6,
    percentage_scored: 97,
    attempted: 1,
  },
]

const rankedRows = rows.map((row) => ({
  ...row,
  rank:
    1 + rows.filter((r) => r.percentage_scored > row.percentage_scored).length,
}))

const columns = [
  {
    field: 'subject',
    headerName: 'Subject',
    flex: 1,
    // width: 150,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'total_timespent',
    headerName: 'Total Time Spent',
    disableColumnMenu: true,
    flex: 1,
    // width: 200,
    renderCell: (params) => {
      const timeSpent = params.value
      if (timeSpent !== null) {
        const hours = Math.floor(timeSpent / 60)
        const minutes = timeSpent % 60
        return `${hours}h ${minutes}min`
      }
      return '-'
    },
  },
  {
    field: 'submission_type',
    headerName: 'Submission Type',
    flex: 1,
    // width: 150,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: 'internet_speed',
    headerName: 'Internet Speed',
    flex: 1,
    // width: 150,
    sortable: true,
    disableColumnMenu: true,
  },

  {
    field: 'rank',
    headerName: 'Rank',
    flex: 1,
    // width: 150,
    sortable: true,
    disableColumnMenu: true,
    renderCell: (params) => {
      const rank = params.value
      if (rank == 1) {
        return `${rank}st`
      }
      if (rank == 2) {
        return `${rank}nd`
      }
      if (rank == 3) {
        return `${rank}rd`
      } else {
        return `${rank}th`
      }
    },
  },

  {
    field: 'percentage_scored',
    headerName: 'Mark',
    flex: 1,
    // width: 150,
    sortable: true,
    disableColumnMenu: true,
    renderCell: (params) => {
      const mark = params.value
      if (mark == null) return '0%'
      else return `${mark}%`
    },
  },
]

export default function DataTable() {
  const theme = useTheme()
  const [semesterFilter, setSemesterFilter] = React.useState('')
  const getRowId = (row) => row.subject
  const filteredRows =
    semesterFilter === ''
      ? rankedRows
      : rankedRows.filter(
          (row) => row.semester === parseInt(semesterFilter, 10)
        )

  const [page, setPage] = React.useState(1)
  const rowsPerPage = 8

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  )

  const semesters = ['All Semesters', 'Semester 1', 'Semester 2', 'Semester 3']
  const [currentIndex, setCurrentIndex] = useState(0)

  const goBack = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
    setSemesterFilter(currentIndex - 1 == 0 ? '' : currentIndex - 1)
    console.log(currentIndex - 1 == 0 ? '' : currentIndex - 1)
  }

  const goForward = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(semesters.length - 1, prevIndex + 1)
    )
    setSemesterFilter(currentIndex + 1)
    console.log(currentIndex + 1)
  }
  //
  console.log(filteredRows)
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography
          sx={{
            color: '#161C24',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px', // Note: Ensure this works as expected
          }}
        >
          Assessments
        </Typography>

        <Stack direction={'row'} alignItems={'center'}>
          <Button onClick={goBack} disabled={currentIndex === 0}>
            {/* <ArrowBackIcon /> */}
          </Button>
          <Box flexGrow={1} textAlign='center'>
            {semesters[currentIndex]}
          </Box>
          <Button
            onClick={goForward}
            disabled={currentIndex === semesters.length - 1}
          >
            {/* <ArrowForwardIcon /> */}
          </Button>
        </Stack>
      </Stack>

      {/* Data Grid */}
      <Box
        sx={{
          width: '100%',
        }}
      >
        <DataGrid
          pagination={false}
          rows={paginatedRows}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          paginationMode='server'
          onSelectionModelChange={(selection) => console.log(selection)}
          disableSelectionOnClick
          autoHeight
          autoWidth
          filterModel={{
            items: [
              {
                columnField: 'semester',
                operatorValue: '=',
                value: semesterFilter,
              },
            ],
          }}
          onFilterModelChange={(model) => {
            // Update semester filter when changed
            if (model.items.length > 0) {
              setSemesterFilter(model.items[0].value)
            } else {
              setSemesterFilter('')
            }
          }}
          getRowId={getRowId}
          hideFooter={true}
        />

        <Stack spacing={2} justifyContent='center' alignItems='center' mt={2}>
          <Pagination
            count={Math.ceil(filteredRows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color='primary'
          />
        </Stack>
      </Box>
    </Box>
  )
}
