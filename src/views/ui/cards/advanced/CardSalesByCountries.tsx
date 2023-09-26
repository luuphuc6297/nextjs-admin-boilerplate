// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Types
import { ThemeColor } from '@/core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from '@/core/components/mui/avatar'
import OptionsMenu from '@/core/components/option-menu'

interface DataType {
    sales: string
    title: string
    subtitle: string
    trendDir: string
    avatarText: string
    trendNumber: string
    avatarColor: ThemeColor
}

const data: DataType[] = [
    {
        sales: '894k',
        trendDir: 'up',
        title: '$8,656k',
        avatarText: 'US',
        trendNumber: '25.8%',
        avatarColor: 'success',
        subtitle: 'United states of america',
    },
    {
        sales: '645k',
        title: '$2,415k',
        trendDir: 'down',
        avatarText: 'UK',
        trendNumber: '6.2%',
        avatarColor: 'error',
        subtitle: 'United Kingdom',
    },
    {
        sales: '148k',
        title: '865k',
        trendDir: 'up',
        avatarText: 'IN',
        subtitle: 'India',
        trendNumber: '12.4%',
        avatarColor: 'warning',
    },
    {
        sales: '86k',
        title: '$745k',
        trendDir: 'down',
        avatarText: 'JA',
        subtitle: 'Japan',
        trendNumber: '11.9%',
        avatarColor: 'secondary',
    },
    {
        sales: '42k',
        title: '$45k',
        trendDir: 'up',
        avatarText: 'KO',
        subtitle: 'Korea',
        trendNumber: '16.2%',
        avatarColor: 'error',
    },
    {
        sales: '8k',
        title: '$12k',
        trendDir: 'up',
        avatarText: 'CH',
        subtitle: 'China',
        trendNumber: '14.8%',
        avatarColor: 'primary',
    },
]

const CardSalesByCountries = () => {
    return (
        <Card>
            <CardHeader
                title="Sales by Countries"
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
            />
            <CardContent>
                {data.map((item: DataType, index: number) => {
                    return (
                        <Box
                            key={item.title}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: index !== data.length - 1 ? 5 : undefined,
                            }}
                        >
                            <CustomAvatar
                                skin="light"
                                color={item.avatarColor}
                                sx={{ mr: 3, fontSize: '1.125rem' }}
                            >
                                {item.avatarText}
                            </CustomAvatar>

                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'center' }}>
                                        <Typography
                                            sx={{ mr: 0.5, fontWeight: 600, fontSize: '0.875rem' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                component="span"
                                                sx={{
                                                    mr: 0.5,
                                                    '& svg': {
                                                        verticalAlign: 'bottom',
                                                        color:
                                                            item.trendDir === 'down'
                                                                ? 'error.main'
                                                                : 'success.main',
                                                    },
                                                }}
                                            >
                                                <Icon
                                                    icon={
                                                        item.trendDir === 'down'
                                                            ? 'mdi:chevron-down'
                                                            : 'mdi:chevron-up'
                                                    }
                                                />
                                            </Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color:
                                                        item.trendDir === 'down'
                                                            ? 'error.main'
                                                            : 'success.main',
                                                }}
                                            >
                                                {item.trendNumber}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="caption">{item.subtitle}</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        textAlign: 'end',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        sx={{ mb: 0.5, fontWeight: 600, fontSize: '0.875rem' }}
                                    >
                                        {item.sales}
                                    </Typography>
                                    <Typography variant="caption">Sales</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default CardSalesByCountries
