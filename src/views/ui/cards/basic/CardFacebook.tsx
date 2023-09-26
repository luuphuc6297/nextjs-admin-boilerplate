// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from '@/core/components/icon'

const CardFacebook = () => {
    return (
        <Card
            sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}
        >
            <CardContent sx={{ p: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                <Typography
                    variant="h6"
                    sx={{
                        display: 'flex',
                        mb: 2.75,
                        alignItems: 'center',
                        color: 'common.white',
                        '& svg': { mr: 2.5 },
                    }}
                >
                    <Icon icon="mdi:facebook" />
                    Facebook Card
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'common.white' }}>
                    You’ve read about the importance of being courageous, rebellious and
                    imaginative. These are all vital ingredients in an effective.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            alt="Eugene Clarke"
                            src="/images/avatars/1.png"
                            sx={{ width: 34, height: 34, mr: 2.75 }}
                        />
                        <Typography variant="body2" sx={{ color: 'common.white' }}>
                            Eugene Clarke
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mr: 3.5,
                                '& svg': { mr: 1.25 },
                            }}
                        >
                            <Icon icon="mdi:heart" />
                            <Typography variant="body2" sx={{ color: 'common.white' }}>
                                3.2k
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.25 } }}>
                            <Icon icon="mdi:share-variant" />
                            <Typography variant="body2" sx={{ color: 'common.white' }}>
                                49
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardFacebook
