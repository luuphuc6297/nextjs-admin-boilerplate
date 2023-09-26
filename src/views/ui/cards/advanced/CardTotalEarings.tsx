// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Types
import { ThemeColor } from '@/core/layouts/types'

// ** Custom Components Imports
import OptionsMenu from '@/core/components/option-menu'

interface DataType {
    title: string
    imgSrc: string
    amount: string
    imgWidth: number
    progress: number
    subtitle: string
    color: ThemeColor
    imgHeight: number
}

const data: DataType[] = [
    {
        imgWidth: 22,
        progress: 75,
        imgHeight: 20,
        title: 'Zipcar',
        color: 'primary',
        amount: '$24,895.65',
        subtitle: 'Vuejs, React & HTML',
        imgSrc: '/images/cards/logo-zipcar.png',
    },
    {
        imgWidth: 19,
        progress: 50,
        color: 'info',
        imgHeight: 27,
        title: 'Bitbank',
        amount: '$8,650.20',
        subtitle: 'Sketch, Figma & XD',
        imgSrc: '/images/cards/logo-bitbank.png',
    },
    {
        imgWidth: 21,
        progress: 20,
        imgHeight: 20,
        title: 'Aviato',
        color: 'secondary',
        amount: '$1,245.80',
        subtitle: 'HTML & Angular',
        imgSrc: '/images/cards/logo-aviato.png',
    },
]

const CardTotalEarnings = () => {
    return (
        <Card>
            <CardHeader
                title="Total Earning"
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
            />
            <CardContent sx={{ pt: (theme) => `${theme.spacing(2.5)} !important` }}>
                <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}
                    >
                        $24,895
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                        <Icon icon="mdi:menu-up" fontSize="1.875rem" />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                            10%
                        </Typography>
                    </Box>
                </Box>

                <Typography component="p" variant="caption" sx={{ mb: 5 }}>
                    Compared to $84,325 last year
                </Typography>

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
                            <Avatar
                                variant="rounded"
                                sx={{
                                    mr: 3,
                                    backgroundColor: (theme) =>
                                        `rgba(${theme.palette.customColors.main}, 0.04)`,
                                }}
                            >
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    width={item.imgWidth}
                                    height={item.imgHeight}
                                />
                            </Avatar>
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
                                    <Typography
                                        variant="body2"
                                        sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="caption">{item.subtitle}</Typography>
                                </Box>

                                <Box
                                    sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
                                    >
                                        {item.amount}
                                    </Typography>
                                    <LinearProgress
                                        color={item.color}
                                        value={item.progress}
                                        variant="determinate"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default CardTotalEarnings
