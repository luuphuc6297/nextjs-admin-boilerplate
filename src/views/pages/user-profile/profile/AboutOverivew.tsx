// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from '@/core/components/icon'
import { ProfileTabCommonType, ProfileTeamsType } from '@/mocks/types'

// ** Types


interface Props {
    teams: ProfileTeamsType[]
    about: ProfileTabCommonType[]
    contacts: ProfileTabCommonType[]
    overview: ProfileTabCommonType[]
}

const renderList = (arr: ProfileTabCommonType[]) => {
    if (arr && arr.length) {
        return arr.map((item, index) => {
            return (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '&:not(:last-of-type)': { mb: 4 },
                        '& svg': { color: 'text.secondary' }
                    }}
                >
                    <Icon icon={item.icon} />

                    <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>
                        {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
                    </Typography>
                </Box>
            )
        })
    } else {
        return null
    }
}

const renderTeams = (arr: ProfileTeamsType[]) => {
    if (arr && arr.length) {
        return arr.map((item, index) => {
            return (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '&:not(:last-of-type)': { mb: 4 },
                        '& svg': { color: `${item.color}.main` }
                    }}
                >
                    <Icon icon='item.icon' />

                    <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>
                        {item.property.charAt(0).toUpperCase() + item.property.slice(1)}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
                    </Typography>
                </Box>
            )
        })
    } else {
        return null
    }
}

const AboutOverivew = (props: Props) => {
    const { teams, about, contacts, overview } = props

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Box sx={{ mb: 6 }}>
                            <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                                About
                            </Typography>
                            {renderList(about)}
                        </Box>
                        <Box sx={{ mb: 6 }}>
                            <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                                Contacts
                            </Typography>
                            {renderList(contacts)}
                        </Box>
                        <div>
                            <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                                Teams
                            </Typography>
                            {renderTeams(teams)}
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <div>
                            <Typography variant='caption' sx={{ mb: 5, display: 'block', textTransform: 'uppercase' }}>
                                Overview
                            </Typography>
                            {renderList(overview)}
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default AboutOverivew
