// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from '@/core/components/page-header'

// ** Styled Component Import
import ApexChartWrapper from '@/core/styles/libs/react-apexcharts'
import DatePickerWrapper from '@/core/styles/libs/react-datepicker'

// ** Demo Components Imports
import ApexAreaChart from '@/views/charts/apex-charts/ApexAreaChart'
import ApexBarChart from '@/views/charts/apex-charts/ApexBarChart'
import ApexCandlestickChart from '@/views/charts/apex-charts/ApexCandlestickChart'
import ApexColumnChart from '@/views/charts/apex-charts/ApexColumnChart'
import ApexDonutChart from '@/views/charts/apex-charts/ApexDonutChart'
import ApexHeatmapChart from '@/views/charts/apex-charts/ApexHeatmapChart'
import ApexLineChart from '@/views/charts/apex-charts/ApexLineChart'
import ApexRadarChart from '@/views/charts/apex-charts/ApexRadarChart'
import ApexRadialBarChart from '@/views/charts/apex-charts/ApexRadialBarChart'
import ApexScatterChart from '@/views/charts/apex-charts/ApexScatterChart'

const ApexCharts = () => {
    return (
        <ApexChartWrapper>
            <DatePickerWrapper>
                <Grid container spacing={6} className='match-height'>
                    <PageHeader
                        title={
                            <Typography variant='h5'>
                                <Link href='https://github.com/apexcharts/react-apexcharts' target='_blank'>
                                    React ApexCharts
                                </Link>
                            </Typography>
                        }
                        subtitle={<Typography variant='body2'>React Component for ApexCharts</Typography>}
                    />
                    <Grid item xs={12}>
                        <ApexAreaChart />
                    </Grid>
                    <Grid item xs={12}>
                        <ApexColumnChart />
                    </Grid>
                    <Grid item xs={12}>
                        <ApexScatterChart />
                    </Grid>
                    <Grid item xs={12}>
                        <ApexLineChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexBarChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexCandlestickChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexHeatmapChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexRadialBarChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexRadarChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexDonutChart />
                    </Grid>
                </Grid>
            </DatePickerWrapper>
        </ApexChartWrapper>
    )
}

export default ApexCharts
