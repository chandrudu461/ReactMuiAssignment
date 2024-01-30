import React, { useEffect, createRef, useState } from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
  Skeleton,
  Stack,
  Pagination,
} from '@mui/material'
import MuiCustomTableHeaderRowWithSortandSelect from './MuiCustomTableHeaderRowWithSortandSelect'
import MuiCustomStudentTableRow from './MuiCustomStudentTableRow'

const MuiCustomTableWithSortandSelect = (props) => {
  const {
    HeaderArr,
    tableData,
    viewStudentResult,
    sortHandler,
    selectHandler,
    loading_reportData,
    currentPageforTablepaginaton,
    tablePaginationHandler,
    filtered_studentAssessmentList,
    submissionTypesToShowinStudentTable,
  } = props

  return (
    <>
      <Paper
        sx={{
          boxShadow: 'none',
          marginTop: '1.5rem',
        }}
      >
        <Table sx={{ width: '100%' }} aria-label='sticky table'>
          <TableHead
            sx={{
              position: 'sticky',
              top: '162px',
              zIndex: 100,
              background: 'white',
            }}
          >
            <MuiCustomTableHeaderRowWithSortandSelect
              headerArray={HeaderArr}
              sortHandler={sortHandler}
              selectHandler={selectHandler}
            />
          </TableHead>
          <TableBody>
            {tableData?.map((stu, i) => (
              <MuiCustomStudentTableRow
                stu={stu}
                key={i}
                viewStudentResult={viewStudentResult}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ marginTop: '1rem' }}
      >
        <Pagination
          count={Math.ceil(
            filtered_studentAssessmentList?.filter((stu) =>
              submissionTypesToShowinStudentTable.includes(stu.submission_type)
            ).length / 15
          )}
          page={currentPageforTablepaginaton}
          onChange={tablePaginationHandler}
        />
      </Stack>
    </>
  )
}

export default MuiCustomTableWithSortandSelect