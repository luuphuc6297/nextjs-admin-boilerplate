// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Custom Components Imports
import CustomAvatar from '@/core/components/mui/avatar'

const CardDeveloperMeetup = () => {
  return (
    <Card>
      <CardMedia sx={{ height: 168 }} image='/images/cards/workstation.png' />
      <CardContent sx={{ pt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, width: 50, height: 56 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='body2' sx={{ color: 'primary.main' }}>
                Jan
              </Typography>
              <Typography variant='h6' sx={{ color: 'primary.main' }}>
                24
              </Typography>
            </Box>
          </CustomAvatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb: 0.5, fontWeight: 600 }}>Developer Meetup</Typography>
            <Typography variant='caption'>
              The WordPress open source, free software project is the community behind the…
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& svg': { mb: 0.5 } }}>
            <Icon icon='mdi:star-outline' />
            <Typography variant='caption'>Interested</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& svg': { mb: 0.5 } }}>
            <Icon icon='mdi:check-circle-outline' />
            <Typography variant='caption'>Joined</Typography>
          </Box>
          <Box
            sx={{
              color: 'primary.main',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& svg': { mb: 0.5 }
            }}
          >
            <Icon icon='mdi:account-outline' />
            <Typography variant='caption' sx={{ color: 'primary.main' }}>
              Invited
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& svg': { mb: 0.5 } }}>
            <Icon icon='mdi:dots-horizontal' />
            <Typography variant='caption'>More</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />

        <Box sx={{ mb: 2, display: 'flex', '& svg': { mr: 2.5, mt: 1, color: 'text.secondary' } }}>
          <Icon icon='mdi:clock-time-three-outline' fontSize='1.25rem' />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>Tuesday, 24 january, 10:20 - 12:30</Typography>
            <Typography variant='caption'>After 1 Week</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', '& svg': { mr: 2.5, mt: 1, color: 'text.secondary' } }}>
          <Icon icon='mdi:map-marker-outline' fontSize='1.25rem' />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>The Rochard NYC</Typography>
            <Typography variant='caption'>1305 Lexington Ave, New York</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardDeveloperMeetup
