import OptionsMenu from '@/core/components/option-menu'
import ReactApexcharts from '@/core/components/react-apexcharts'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { ApexOptions } from 'apexcharts'

const AnalyticsWeeklyOverview = () => {
    // ** Hook
    const theme = useTheme()

    const options: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 9,
                distributed: true,
                columnWidth: '40%',
                endingShape: 'rounded',
                startingShape: 'rounded',
            },
        },
        stroke: {
            width: 2,
            colors: [theme.palette.background.paper],
        },
        legend: { show: false },
        grid: {
            strokeDashArray: 7,
            borderColor: theme.palette.divider,
            padding: {
                top: -1,
                left: -9,
                right: 0,
                bottom: 5,
            },
        },
        dataLabels: { enabled: false },
        colors: [
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg,
            theme.palette.primary.main,
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg,
        ],
        states: {
            hover: {
                filter: { type: 'none' },
            },
            active: {
                filter: { type: 'none' },
            },
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            tickPlacement: 'on',
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false },
        },
        yaxis: {
            show: true,
            tickAmount: 4,
            labels: {
                offsetY: 2,
                offsetX: -17,
                style: { colors: theme.palette.text.disabled },
                formatter: (value) => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`,
            },
        },
    }

    return (
        <Card>
            <CardHeader
                title="Weekly Overview"
                titleTypographyProps={{
                    sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' },
                }}
                action={
                    <OptionsMenu
                        options={['Refresh', 'Update', 'Delete']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
            />
            <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                <ReactApexcharts
                    type="bar"
                    height={205}
                    options={options}
                    series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]}
                />
                <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ mr: 4 }}>
                        45%
                    </Typography>
                    <Typography variant="body2">
                        Your sales performance is 45% 😎 better compared to last month
                    </Typography>
                </Box>
                <Button fullWidth variant="contained">
                    Details
                </Button>
            </CardContent>
        </Card>
    )
}

export default AnalyticsWeeklyOverview
