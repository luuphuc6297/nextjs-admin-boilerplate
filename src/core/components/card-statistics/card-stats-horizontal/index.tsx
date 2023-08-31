import { CardStatsHorizontalProps } from '@/core/components/card-statistics/types'
import Icon from '@/core/components/icon'
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Styled Avatar component
const Avatar = styled(MuiAvatar)<AvatarProps>(({ theme }) => ({
    width: 44,
    height: 44,
    boxShadow: theme.shadows[3],
    marginRight: theme.spacing(2.75),
    backgroundColor: theme.palette.background.paper,
    '& svg': {
        fontSize: '1.75rem'
    }
}))

const CardStatsHorizontal = (props: CardStatsHorizontalProps) => {
    // ** Props
    const { title, icon, stats, trendNumber, color = 'primary', trend = 'positive' } = props

    return (
        <Card
            sx={{
                backgroundColor: 'transparent !important',
                boxShadow: theme => `${theme.shadows[0]} !important`,
                border: theme => `1px solid ${theme.palette.divider}`
            }}
        >
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar variant='rounded' sx={{ color: `${color}.main` }}>
                        {icon}
                    </Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='caption'>{title}</Typography>
                        <Box sx={{ mt: 0.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Typography variant='h6' sx={{ mr: 1, fontWeight: 600, lineHeight: 1.05 }}>
                                {stats}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    component='span'
                                    sx={{ display: 'inline-flex', color: trend === 'positive' ? 'success.main' : 'error.main' }}
                                >
                                    <Icon icon={trend === 'positive' ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
                                </Box>
                                <Typography
                                    variant='caption'
                                    sx={{ fontWeight: 600, color: trend === 'positive' ? 'success.main' : 'error.main' }}
                                >
                                    {trendNumber}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardStatsHorizontal
