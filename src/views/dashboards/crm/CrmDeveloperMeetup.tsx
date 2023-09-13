// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Custom Components Imports
import CustomAvatar from '@/core/components/mui/avatar'

const CrmDeveloperMeetup = () => {
    return (
        <Card>
            <CardMedia sx={{ height: '11.25rem' }} image='/images/cards/workstation.png' />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, width: '3rem', height: '3.375rem' }}>
                        <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography
                                variant='body2'
                                sx={{ fontWeight: 500, lineHeight: 1.29, color: 'primary.main', letterSpacing: '0.47px' }}
                            >
                                Jan
                            </Typography>
                            <Typography variant='h6' sx={{ mt: -0.75, fontWeight: 600, color: 'primary.main' }}>
                                24
                            </Typography>
                        </Box>
                    </CustomAvatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 600 }}>Developer Meetup</Typography>
                        <Typography variant='caption' sx={{ letterSpacing: '0.4px' }}>
                            The WordPress open source, free software project is the community behind the…
                        </Typography>
                    </Box>
                </Box>

                <Divider
                    sx={{ mb: theme => `${theme.spacing(4)} !important`, mt: theme => `${theme.spacing(4.75)} !important` }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& svg': { fontSize: '1.75rem' } }}
                    >
                        <Icon icon='mdi:star-outline' />
                        <Typography sx={{ fontSize: '0.875rem' }}>Interested</Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& svg': { fontSize: '1.75rem' } }}
                    >
                        <Icon icon='mdi:check-circle-outline' />
                        <Typography sx={{ fontSize: '0.875rem' }}>Joined</Typography>
                    </Box>
                    <Box
                        sx={{
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& svg': { fontSize: '1.75rem' }
                        }}
                    >
                        <Icon icon='mdi:account-outline' />
                        <Typography sx={{ fontSize: '0.875rem', color: 'primary.main' }}>Invited</Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& svg': { fontSize: '1.75rem' } }}
                    >
                        <Icon icon='mdi:dots-horizontal' />
                        <Typography sx={{ fontSize: '0.875rem' }}>More</Typography>
                    </Box>
                </Box>

                <Divider
                    sx={{ mt: theme => `${theme.spacing(2.75)} !important`, mb: theme => `${theme.spacing(3.25)} !important` }}
                />

                <Box sx={{ mb: 2, display: 'flex', '& svg': { mr: 3, mt: 1, fontSize: '1.375rem', color: 'text.secondary' } }}>
                    <Icon icon='mdi:clock-time-three-outline' />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '0.875rem' }}>Tuesday, 24 january, 10:20 - 12:30</Typography>
                        <Typography variant='caption'>After 1 Week</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', '& svg': { mr: 3, mt: 1, fontSize: '1.375rem', color: 'text.secondary' } }}>
                    <Icon icon='mdi:map-marker-outline' />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '0.875rem' }}>The Rochard NYC</Typography>
                        <Typography variant='caption'>1305 Lexington Ave, New York</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CrmDeveloperMeetup
