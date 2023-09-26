// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomChip from '@/core/components/mui/chip'
import OptionsMenu from '@/core/components/option-menu'
import ReactApexcharts from '@/core/components/react-apexcharts'

const CardWidgetsTotalVisits = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Cricket'],
    stroke: { lineCap: 'round' },
    grid: {
      padding: {
        top: -10
      }
    },
    colors: [theme.palette.info.main],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 90]
      }
    },
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
        endAngle: 180,
        startAngle: -180,
        inverseOrder: true,
        hollow: { size: '62%' },
        track: { background: theme.palette.customColors.trackBg },
        dataLabels: {
          name: { offsetY: 26 },
          value: {
            offsetY: -14,
            fontWeight: 500,
            fontSize: '1.5rem',
            formatter: value => `${value}k`,
            color: theme.palette.text.primary
          },
          total: {
            show: true,
            label: 'Growth',
            fontWeight: 400,
            fontSize: '14px',
            color: theme.palette.text.secondary
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Visits'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
          />
        }
        titleTypographyProps={{
          sx: {
            fontSize: '1rem !important',
            fontWeight: '600 !important',
            lineHeight: '1.5rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <ReactApexcharts type='radialBar' height={199} series={[78]} options={options} />
        <Typography sx={{ mb: 2.5 }} variant='caption'>
          42.2k New Visits
        </Typography>
        <CustomChip
          skin='light'
          color='info'
          label='This Year'
          sx={{
            height: 20,
            fontSize: '0.75rem',
            fontWeight: 500,
            borderRadius: '10px',
            '& .MuiChip-label': { px: 2, lineHeight: '20px' }
          }}
        />
      </CardContent>
    </Card>
  )
}

export default CardWidgetsTotalVisits
