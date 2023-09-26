// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from '@/core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from '@/core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import EcommerceCongratulations from '@/views/dashboards/ecommerce/EcommerceCongratulations'
import EcommerceMeetingSchedule from '@/views/dashboards/ecommerce/EcommerceMeetingSchedule'
import EcommerceNewVisitors from '@/views/dashboards/ecommerce/EcommerceNewVisitors'
import EcommerceTable from '@/views/dashboards/ecommerce/EcommerceTable'
import EcommerceTotalProfit from '@/views/dashboards/ecommerce/EcommerceTotalProfit'
import EcommerceTotalRevenue from '@/views/dashboards/ecommerce/EcommerceTotalRevenue'
import EcommerceTotalSalesDonut from '@/views/dashboards/ecommerce/EcommerceTotalSalesDonut'
import EcommerceTotalSalesRadial from '@/views/dashboards/ecommerce/EcommerceTotalSalesRadial'
import EcommerceTransactions from '@/views/dashboards/ecommerce/EcommerceTransactions'
import EcommerceWebsiteStatistics from '@/views/dashboards/ecommerce/EcommerceWebsiteStatistics'

const EcommerceDashboard = () => {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={8} sx={{ order: 0, alignSelf: 'flex-end' }}>
                    <EcommerceCongratulations />
                </Grid>
                <Grid item xs={12} sm={6} md={2} sx={{ order: 0 }}>
                    <CardStatisticsVerticalComponent
                        stats="1.2k"
                        color="info"
                        trendNumber="+38%"
                        title="Transactions"
                        subtitle="Daily Transactions"
                        icon={<Icon icon="mdi:trending-up" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2} sx={{ order: 0 }}>
                    <CardStatisticsVerticalComponent
                        stats="$95.2k"
                        color="success"
                        title="Revenue"
                        trendNumber="+16%"
                        subtitle="Revenue Increase"
                        icon={<Icon icon="mdi:currency-usd" />}
                    />
                </Grid>
                <Grid item xs={12} md={8} sx={{ order: 0 }}>
                    <EcommerceTotalProfit />
                </Grid>
                <Grid item xs={12} md={4} sx={{ order: 0 }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <EcommerceTotalSalesDonut />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EcommerceTotalRevenue />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EcommerceTotalSalesRadial />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ order: 0 }}>
                    <EcommerceTransactions />
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ order: 0 }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <CardStatisticsVerticalComponent
                                stats="4.1k"
                                color="error"
                                title="Logistics"
                                trendNumber="+25%"
                                subtitle="Regional Logistics"
                                icon={<Icon icon="mdi:truck-outline" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardStatisticsVerticalComponent
                                stats="268"
                                color="warning"
                                title="Reports"
                                trend="negative"
                                trendNumber="-8%"
                                subtitle="System Bugs"
                                icon={<Icon icon="mdi:check" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <EcommerceNewVisitors />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ order: 0 }}>
                    <EcommerceWebsiteStatistics />
                </Grid>
                <Grid item xs={12} lg={8} sx={{ order: [1, 1, 1, 0] }}>
                    <EcommerceTable />
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ order: 0 }}>
                    <EcommerceMeetingSchedule />
                </Grid>
            </Grid>
        </ApexChartWrapper>
    )
}

export default EcommerceDashboard
