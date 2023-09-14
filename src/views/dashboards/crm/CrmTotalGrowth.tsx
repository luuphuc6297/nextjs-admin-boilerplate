// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from '@/core/components/react-apexcharts'

const series = [
    {
        name: 'Subscribers',
        data: [28, 40, 36, 52, 38, 60, 55]
    }
]

const CrmTotalGrowth = () => {
    // ** Hook
    const theme = useTheme()

    const options: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false }
        },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
        stroke: {
            width: 3,
            curve: 'smooth',
            lineCap: 'round'
        },
        grid: {
            show: false,
            padding: {
                left: 2,
                top: -30,
                right: 2
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: [
                    [
                        {
                            offset: 0,
                            opacity: 0.3,
                            color: theme.palette.success.main
                        },
                        {
                            offset: 100,
                            opacity: 0.1,
                            color: theme.palette.background.paper
                        }
                    ]
                ]
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                // ** Must to fix
                // shadeIntensity: 1,
                // color: theme.palette.success.main
            }
        },
        xaxis: {
            type: 'numeric',
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false }
        },
        yaxis: { show: false }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>42.5k</Typography>
                <ReactApexcharts type='area' height={103} options={options} series={series} />
                <Typography variant='body2' sx={{ fontWeight: 600, textAlign: 'center', color: 'text.primary' }}>
                    Total Growth
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CrmTotalGrowth
