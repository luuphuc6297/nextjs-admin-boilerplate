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
        name: '2022',
        data: [45, 85, 65, 50, 70],
    },
]

const CardStatsDistributedColumnChart = () => {
    // ** Hook
    const theme = useTheme()

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            stacked: false,
            parentHeightOffset: 0,
            toolbar: { show: false },
        },
        tooltip: {
            x: { show: false },
        },
        grid: {
            show: false,
            padding: {
                top: -10,
                left: -7,
                right: 0,
                bottom: 5,
            },
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        colors: [
            theme.palette.error.main,
            theme.palette.primary.main,
            theme.palette.error.main,
            theme.palette.primary.main,
            theme.palette.primary.main,
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                borderRadius: 4,
                startingShape: 'rounded',
                endingShape: 'rounded',
                distributed: true,
                colors: {
                    backgroundBarRadius: 5,
                    backgroundBarColors: [
                        theme.palette.customColors.trackBg,
                        theme.palette.customColors.trackBg,
                        theme.palette.customColors.trackBg,
                        theme.palette.customColors.trackBg,
                        theme.palette.customColors.trackBg,
                    ],
                },
            },
        },
        xaxis: {
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false },
        },
        yaxis: { show: false },
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">2,856</Typography>
                <ReactApexcharts type="bar" height={116} options={options} series={series} />
                <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, textAlign: 'center', color: 'text.primary' }}
                >
                    Sessions
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardStatsDistributedColumnChart
