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

const CardWidgetsTotalProfitRadialBar = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    stroke: { dashArray: 5 },
    colors: [theme.palette.primary.main],
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
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '55%' },
        track: { background: theme.palette.customColors.trackBg },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -5,
            fontWeight: 500,
            fontSize: '1.25rem',
            color: theme.palette.text.primary,
            formatter: val => {
              const num = (val * 35250) / 100

              return num > 999 ? `${(num / 1000).toFixed(1)}k` : `${num}`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Profit'
        action={
          <OptionsMenu
            options={['Refresh', 'Edit', 'Delete']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
          />
        }
        titleTypographyProps={{
          sx: {
            fontSize: '1rem !important',
            fontWeight: '600 !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', pt: `${theme.spacing(7)} !important` }}
      >
        <ReactApexcharts type='radialBar' height={243} series={[80]} options={options} />
        <Typography sx={{ mt: 10, mb: 2.5 }} variant='caption'>
          18k New Sales
        </Typography>
        <CustomChip
          skin='light'
          color='primary'
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

export default CardWidgetsTotalProfitRadialBar
