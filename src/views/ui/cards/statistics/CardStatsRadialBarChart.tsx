// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from '@/core/components/react-apexcharts'

const CardStatsRadialBarChart = () => {
    // ** Hook
    const theme = useTheme()

    const options: ApexOptions = {
        chart: {
            sparkline: { enabled: true },
        },
        stroke: { lineCap: 'round' },
        colors: [theme.palette.info.main],
        plotOptions: {
            radialBar: {
                endAngle: 90,
                startAngle: -90,
                hollow: { size: '60%' },
                track: { background: theme.palette.customColors.trackBg },
                dataLabels: {
                    name: { show: false },
                    value: {
                        offsetY: 0,
                        fontWeight: 500,
                        fontSize: '1.25rem',
                        color: theme.palette.text.secondary,
                    },
                },
            },
        },
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 2.5 }}>
                    135k
                </Typography>
                <ReactApexcharts type="radialBar" height={150} options={options} series={[78]} />
                <Typography
                    variant="body2"
                    sx={{ mt: 7.5, fontWeight: 600, textAlign: 'center', color: 'text.primary' }}
                >
                    Total Sales
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardStatsRadialBarChart
