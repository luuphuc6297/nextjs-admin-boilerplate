// ** MUI Imports
import Icon from '@/core/components/icon'
import ReactApexcharts from '@/core/components/react-apexcharts'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { ApexOptions } from 'apexcharts'

const EcommerceNewVisitors = () => {
    // ** Hook
    const theme = useTheme()

    const options: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false },
        },
        grid: {
            show: false,
            padding: {
                top: -5,
                left: -10,
                right: -7,
                bottom: -12,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                distributed: true,
                columnWidth: '60%',
                endingShape: 'rounded',
                startingShape: 'rounded',
            },
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        colors: [
            hexToRGBA(theme.palette.primary.main, 0.1),
            hexToRGBA(theme.palette.primary.main, 0.1),
            hexToRGBA(theme.palette.primary.main, 0.1),
            hexToRGBA(theme.palette.primary.main, 0.1),
            theme.palette.primary.main,
            hexToRGBA(theme.palette.primary.main, 0.1),
            hexToRGBA(theme.palette.primary.main, 0.1),
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
            tickPlacement: 'on',
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false },
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        },
        yaxis: { show: false },
    }

    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={{ mb: 7.5 }}>
                            New Visitors
                        </Typography>
                        <Typography component="p" variant="caption">
                            48% new visitors
                        </Typography>
                        <Typography component="p" variant="caption" sx={{ mb: 2.5 }}>
                            this week.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '& svg': { color: 'success.main' },
                            }}
                        >
                            <Typography variant="h6">12,480</Typography>
                            <Icon icon="mdi:chevron-up" />
                            <Typography variant="caption" sx={{ color: 'success.main' }}>
                                28
                            </Typography>
                        </Box>
                    </Box>
                    <ReactApexcharts
                        type="bar"
                        width={144}
                        height={144}
                        options={options}
                        series={[{ data: [40, 60, 50, 60, 90, 40, 50] }]}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}

export default EcommerceNewVisitors
