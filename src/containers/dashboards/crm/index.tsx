import CardStatisticsVerticalComponent from '@/core/components/card-statistics/card-stats-vertical'
import CardStatisticsCharacter from '@/core/components/card-statistics/card-stats-with-image'
import Icon from '@/core/components/icon'
import ApexChartWrapper from '@/core/styles/libs/react-apexcharts'
import { Grid } from '@mui/material'

// ** CRM
import { CardStatsCharacterProps } from '@/core/components/card-statistics/types'
import CrmActivityTimeline from '@/views/dashboards/crm/CrmActivityTimeline'
import CrmDeveloperMeetup from '@/views/dashboards/crm/CrmDeveloperMeetup'
import CrmMeetingSchedule from '@/views/dashboards/crm/CrmMeetingSchedule'
import CrmRevenueReport from '@/views/dashboards/crm/CrmRevenueReport'
import CrmSalesOverview from '@/views/dashboards/crm/CrmSalesOverview'
import CrmTotalGrowth from '@/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalSales from '@/views/dashboards/crm/CrmTotalSales'
import CrmTransactions from '@/views/dashboards/crm/CrmTransactions'
import CrmUpgradePlan from '@/views/dashboards/crm/CrmUpgradePlan'
import CrmWeeklySales from '@/views/dashboards/crm/CrmWeeklySales'

const data: CardStatsCharacterProps[] = [
    {
        stats: '13.7k',
        title: 'Ratings',
        trendNumber: '+38%',
        chipColor: 'primary',
        chipText: 'Year of 2022',
        src: '/images/cards/pose_f9.png',
    },
    {
        stats: '24.5k',
        trend: 'negative',
        title: 'Sessions',
        trendNumber: '-22%',
        chipText: 'Last Week',
        chipColor: 'secondary',
        src: '/images/cards/pose_m18.png',
    },
]

const CRMDashboard = () => {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{ pt: (theme) => `${theme.spacing(12.25)} !important` }}
                >
                    <CardStatisticsCharacter data={data[0]} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{ pt: (theme) => `${theme.spacing(12.25)} !important` }}
                >
                    <CardStatisticsCharacter data={data[1]} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CrmTransactions />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CrmTotalSales />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CrmRevenueReport />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CrmSalesOverview />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CrmActivityTimeline />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={8}>
                            <CrmWeeklySales />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container spacing={6}>
                                <Grid item xs={6} sm={12}>
                                    <CrmTotalGrowth />
                                </Grid>
                                <Grid item xs={6} sm={12}>
                                    <CardStatisticsVerticalComponent
                                        stats="862"
                                        trend="negative"
                                        trendNumber="-18%"
                                        title="New Project"
                                        subtitle="Yearly Project"
                                        icon={<Icon icon="mdi:briefcase-variant-outline" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <CrmUpgradePlan />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <CrmMeetingSchedule />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <CrmDeveloperMeetup />
                </Grid>
            </Grid>
        </ApexChartWrapper>
    )
}

export default CRMDashboard;