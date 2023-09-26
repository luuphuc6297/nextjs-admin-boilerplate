import Icon from '@/core/components/icon'
import CustomChip from '@/core/components/mui/chip'
import OptionsMenu from '@/core/components/option-menu'
import { ConnectionsTabType } from '@/mocks/types'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { SyntheticEvent } from 'react'

const Connections = ({ data }: { data: ConnectionsTabType[] }) => {
    return (
        <Grid container spacing={6}>
            {data &&
                Array.isArray(data) &&
                data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Card sx={{ position: 'relative' }}>
                                <OptionsMenu
                                    iconButtonProps={{
                                        size: 'small',
                                        sx: { top: 12, right: 12, position: 'absolute' },
                                    }}
                                    options={[
                                        'Share Connection',
                                        'Block Connection',
                                        { divider: true },
                                        {
                                            text: 'Delete',
                                            menuItemProps: { sx: { color: 'error.main' } },
                                        },
                                    ]}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            mt: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Avatar
                                            src={item.avatar}
                                            sx={{ mb: 6, width: 100, height: 100 }}
                                        />
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography sx={{ mb: 6, color: 'text.secondary' }}>
                                            {item.designation}
                                        </Typography>
                                        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                                            {item.chips &&
                                                item.chips.map((chip, index) => (
                                                    <Box
                                                        href="/"
                                                        key={index}
                                                        component={Link}
                                                        onClick={(e: SyntheticEvent) =>
                                                            e.preventDefault()
                                                        }
                                                        sx={{
                                                            textDecoration: 'none',
                                                            '&:not(:last-of-type)': { mr: 4 },
                                                            '& .MuiChip-root': {
                                                                cursor: 'pointer',
                                                            },
                                                        }}
                                                    >
                                                        <CustomChip
                                                            size="small"
                                                            skin="light"
                                                            color={chip.color}
                                                            label={chip.title}
                                                        />
                                                    </Box>
                                                ))}
                                        </Box>
                                        <Box
                                            sx={{
                                                mb: 6,
                                                gap: 2,
                                                width: '100%',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                justifyContent: 'space-around',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <Typography variant="h5">
                                                    {item.projects}
                                                </Typography>
                                                <Typography sx={{ color: 'text.secondary' }}>
                                                    Projects
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <Typography variant="h5">{item.tasks}</Typography>
                                                <Typography sx={{ color: 'text.secondary' }}>
                                                    Tasks
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <Typography variant="h5">
                                                    {item.connections}
                                                </Typography>
                                                <Typography sx={{ color: 'text.secondary' }}>
                                                    Connections
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Button
                                                sx={{ mr: 4 }}
                                                variant={
                                                    item.isConnected ? 'contained' : 'outlined'
                                                }
                                                startIcon={
                                                    <Icon
                                                        fontSize={20}
                                                        icon={
                                                            item.isConnected
                                                                ? 'mdi:account-check-outline'
                                                                : 'mdi:account-plus-outline'
                                                        }
                                                    />
                                                }
                                            >
                                                {item.isConnected ? 'Connected' : 'Connect'}
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                sx={{ p: 1.5, minWidth: 38 }}
                                            >
                                                <Icon icon="mdi:email-outline" />
                                            </Button>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
        </Grid>
    )
}

export default Connections
