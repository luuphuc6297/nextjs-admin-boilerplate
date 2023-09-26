// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from '@/core/components/option-menu'
import ReactApexcharts from '@/core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from '@/core/utils/hex-to-rgba'

const CardWidgetsTotalVisitors = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    colors: [
      theme.palette.primary.main,
      hexToRGBA(theme.palette.primary.main, 0.7),
      hexToRGBA(theme.palette.primary.main, 0.5),
      theme.palette.customColors.trackBg
    ],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: {
      show: true,
      position: 'bottom',
      labels: { colors: theme.palette.text.secondary }
    },
    labels: ['FR', 'UK', 'ESP', 'USA'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              fontSize: '0.875rem',
              color: theme.palette.text.secondary
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              formatter: value => `${value}k`,
              color: theme.palette.text.primary
            },
            total: {
              show: true,
              fontSize: '0.875rem',
              label: 'Weekly Visits',
              color: theme.palette.text.secondary,
              formatter: value => `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}k`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Visitors'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <OptionsMenu
            options={['Refresh', 'Update', 'Delete']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
          />
        }
      />
      <CardContent>
        <ReactApexcharts type='donut' height={292} series={[12, 25, 13, 50]} options={options} />
      </CardContent>
    </Card>
  )
}

export default CardWidgetsTotalVisitors
