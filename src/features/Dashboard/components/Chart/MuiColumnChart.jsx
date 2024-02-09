import React from 'react'
import Chart from 'react-apexcharts'
import { useTheme } from '@mui/material/styles'

const MuiColumnChart = ({
  series,
  categories,
  yaxisTitle,
  xaxisTitle,
  width,
  height,
  daataLabelsColor,
  primaryBarColor,
  secondarybarColor,
}) => {
  // console.log(series)
  const theme = useTheme()
  const options = {
    chart: {
      type: 'bar',
      margin: {
        left: 100,
      },
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
        barHeight: '70%',
        columnWidth: '20px',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%'
      },
      offsetY: -20,
      style: {
        fontSize: '10px',
        colors: [daataLabelsColor],
        fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    xaxis: {
      title: {
        text: xaxisTitle,
      },
      tickPlacement: 'on',
      categories: categories,
      lines: {
        show: true,
      },
      position: 'bottom',
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
        style: {
          color: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      lines: {
        // show: false,
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val
        },
        style: {
          colors: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    grid: {
      show: true,
    },
    colors: [
      function ({ value, seriesIndex, w, dataPointIndex }) {
        // console.log(value, seriesIndex, w, dataPointIndex)
        // if (dataPointIndex % 2 === 0) {
        //   return primaryBarColor
        // } else {
        //   return secondarybarColor
        // }
        return primaryBarColor
      },
    ],
    tooltip: {
      enabled: false,
    },
  }
  return (
    <Chart
      options={options}
      series={series}
      type='bar'
      width={width}
      height={height}
    />
  )
}

export default MuiColumnChart
