// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
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

const CardWidgetsTotalRevenue = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Returning', 'New Users', 'Referrals'],
    legend: { show: false },
    stroke: { lineCap: 'round' },
    colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.warning.main],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%'
        },
        track: {
          margin: 10,
          background: 'transparent'
        },
        dataLabels: {
          name: {
            offsetY: 28,
            fontSize: '0.75rem',
            color: theme.palette.text.secondary
          },
          value: {
            offsetY: -12,
            fontWeight: 500,
            fontSize: '2.125rem',
            color: theme.palette.text.primary,
            formatter(value) {
              return `${value}k`
            }
          },
          total: {
            show: true,
            fontWeight: 400,
            fontSize: '0.75rem',
            color: theme.palette.text.secondary,
            label: `${new Date().getFullYear()}`,
            formatter(value) {
              return `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}k`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Revenue'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
          />
        }
      />
      <CardContent>
        <ReactApexcharts type='radialBar' height={243} series={[71, 78, 86]} options={options} />
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': { mr: 1.25, color: 'primary.main' }
              }}
            >
              <Icon icon='mdi:circle' fontSize='0.75rem' />
              <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>345</Typography>
            </Box>
            <Typography variant='caption'>Returning</Typography>
          </Box>
          <Divider orientation='vertical' sx={{ m: 0, height: 'auto' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': { mr: 1.25, color: 'success.main' }
              }}
            >
              <Icon icon='mdi:circle' fontSize='0.75rem' />
              <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>856</Typography>
            </Box>
            <Typography variant='caption'>New User</Typography>
          </Box>
          <Divider orientation='vertical' sx={{ m: 0, height: 'auto' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': { mr: 1.25, color: 'warning.main' }
              }}
            >
              <Icon icon='mdi:circle' fontSize='0.75rem' />
              <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>258</Typography>
            </Box>
            <Typography variant='caption'>Referrals</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsTotalRevenue
