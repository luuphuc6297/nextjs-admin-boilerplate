import Icon from '@/core/components/icon'
import CustomAvatar from '@/core/components/mui/avatar'
import OptionsMenu from '@/core/components/option-menu'
import { ThemeColor } from '@/core/layouts/types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ReactElement } from 'react'

interface DataType {
    stats: string
    title: string
    color: ThemeColor
    icon: ReactElement
}

const salesData: DataType[] = [
    {
        stats: '245k',
        title: 'Sales',
        color: 'primary',
        icon: <Icon icon="mdi:trending-up" />,
    },
    {
        stats: '12.5k',
        title: 'Customers',
        color: 'success',
        icon: <Icon icon="mdi:account-outline" />,
    },
    {
        stats: '1.54k',
        color: 'warning',
        title: 'Products',
        icon: <Icon icon="mdi:cellphone-link" />,
    },
    {
        stats: '$88k',
        color: 'info',
        title: 'Revenue',
        icon: <Icon icon="mdi:currency-usd" />,
    },
]

const renderStats = () => {
    return salesData.map((item: DataType, index: number) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar
                    variant="rounded"
                    color={item.color}
                    sx={{
                        mr: 3,
                        boxShadow: 3,
                        width: 44,
                        height: 44,
                        '& svg': { fontSize: '1.75rem' },
                    }}
                >
                    {item.icon}
                </CustomAvatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption">{item.title}</Typography>
                    <Typography variant="h6">{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const AnalyticsTransactionsCard = () => {
    return (
        <Card>
            <CardHeader
                title="Transactions"
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
                subheader={
                    <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            Total 48.5% growth
                        </Box>{' '}
                        😎 this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '0.15px !important',
                    },
                }}
            />
            <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default AnalyticsTransactionsCard
