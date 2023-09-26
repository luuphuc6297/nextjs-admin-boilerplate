// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from '@/core/components/option-menu'
import ReactApexcharts from '@/core/components/react-apexcharts'

const series = [
  {
    name: 'Product A',
    data: [16000, 12000, 16000, 18000, 15000, 35000, 16000]
  },
  {
    name: 'Product B',
    data: [10000, 12000, 10000, 0, 10000, 10000, 10000]
  },
  {
    name: 'Product C',
    data: [0, 15000, 0, 0, 12000, 0, 10000]
  }
]

const CardWidgetsAnalytics = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      offsetY: -25,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '35%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 10,
      borderColor: theme.palette.divider,
      padding: {
        left: -15,
        right: -5
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      curve: 'smooth',
      lineCap: 'round',
      colors: [theme.palette.background.paper]
    },
    colors: [theme.palette.success.main, theme.palette.secondary.main, theme.palette.warning.main],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 430,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Analytics'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='bar' height={207} series={series} options={options} />
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', '& svg': { color: 'success.main' } }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 600, fontSize: '0.875rem', lineHeight: '1.25rem' }}>
            Revenue
          </Typography>
          <Typography variant='body2' sx={{ mr: 6 }}>
            $845k
          </Typography>
          <Typography sx={{ mr: 4, fontWeight: 600, fontSize: '0.875rem', lineHeight: '1.25rem' }}>82%</Typography>
          <Icon icon='mdi:chevron-up' />
        </Box>
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', '& svg': { color: 'error.main' } }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 600, fontSize: '0.875rem', lineHeight: '1.25rem' }}>
            Transactions
          </Typography>
          <Typography variant='body2' sx={{ mr: 6 }}>
            $12.5k
          </Typography>
          <Typography sx={{ mr: 4, fontWeight: 600, fontSize: '0.875rem', lineHeight: '1.25rem' }}>37%</Typography>
          <Icon icon='mdi:chevron-down' />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'success.main' } }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 600, fontSize: '0.875rem', lineHeight: '1.25rem' }}>
            Total Profit
          </Typography>
          <Typography variant='body2' sx={{ mr: 6 }}>
            $27.6k
          </Typography>
          <Typography sx={{ mr: 4, fontWeight: 600, fontSize: '0.875rem', lineHeight: '1.25rem' }}>49%</Typography>
          <Icon icon='mdi:chevron-up' />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsAnalytics
