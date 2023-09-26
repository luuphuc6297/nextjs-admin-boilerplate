// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Custom Components Imports
import CustomChip from '@/core/components/mui/chip'
import OptionsMenu from '@/core/components/option-menu'
import { ProfileConnectionsType, ProfileTeamsTechType } from '@/mocks/types'

// ** Types

interface Props {
    teams: ProfileTeamsTechType[]
    connections: ProfileConnectionsType[]
}

const ConnectionsTeams = ({ connections, teams }: Props) => {
    return (
        <>
            <Grid item md={6} xs={12}>
                <Card>
                    <CardHeader
                        title="Connections"
                        action={
                            <OptionsMenu
                                iconButtonProps={{ size: 'small' }}
                                options={[
                                    'Share connections',
                                    'Suggest edits',
                                    { divider: true },
                                    'Report bug',
                                ]}
                            />
                        }
                    />
                    <CardContent>
                        {connections &&
                            connections.map((connection: ProfileConnectionsType, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            '&:not(:last-of-type)': { mb: 4 },
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar
                                                src={connection.avatar}
                                                sx={{ mr: 3.5, width: 38, height: 38 }}
                                            />
                                            <div>
                                                <Typography
                                                    sx={{ fontSize: '0.875rem', fontWeight: 600 }}
                                                >
                                                    {connection.name}
                                                </Typography>
                                                <Typography variant="caption">
                                                    {connection.connections} Connections
                                                </Typography>
                                            </div>
                                        </Box>
                                        <Button
                                            size="small"
                                            color="primary"
                                            variant={connection.isFriend ? 'contained' : 'outlined'}
                                            sx={{
                                                minWidth: 38,
                                                p: (theme) => `${theme.spacing(1.5)} !important`,
                                            }}
                                        >
                                            <Icon icon="mdi:account-outline" />
                                        </Button>
                                    </Box>
                                )
                            })}
                        <Box sx={{ mt: 3.5, width: '100%', textAlign: 'center' }}>
                            <Typography
                                href="/"
                                component={Link}
                                onClick={(e: SyntheticEvent) => e.preventDefault()}
                                sx={{ color: 'primary.main', textDecoration: 'none' }}
                            >
                                View all connections
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card>
                    <CardHeader
                        title="Teams"
                        action={
                            <OptionsMenu
                                iconButtonProps={{ size: 'small' }}
                                options={[
                                    'Share teams',
                                    'Suggest edits',
                                    { divider: true },
                                    'Report bug',
                                ]}
                            />
                        }
                    />
                    <CardContent>
                        {teams &&
                            teams.map((team: ProfileTeamsTechType, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            '&:not(:last-of-type)': { mb: 4 },
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar
                                                src={team.avatar}
                                                sx={{ mr: 3.5, width: 38, height: 38 }}
                                            />
                                            <div>
                                                <Typography
                                                    sx={{ fontSize: '0.875rem', fontWeight: 600 }}
                                                >
                                                    {team.title}
                                                </Typography>
                                                <Typography variant="caption">
                                                    {team.members} Members
                                                </Typography>
                                            </div>
                                        </Box>
                                        <Box
                                            href="/"
                                            component={Link}
                                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                                            sx={{
                                                height: 0,
                                                textDecoration: 'none',
                                                '& .MuiChip-root': { cursor: 'pointer' },
                                            }}
                                        >
                                            <CustomChip
                                                size="small"
                                                skin="light"
                                                color={team.ChipColor}
                                                label={team.chipText}
                                            />
                                        </Box>
                                    </Box>
                                )
                            })}
                        <Box sx={{ width: '100%', textAlign: 'center' }}>
                            <Typography
                                href="/"
                                component={Link}
                                onClick={(e: SyntheticEvent) => e.preventDefault()}
                                sx={{ color: 'primary.main', textDecoration: 'none' }}
                            >
                                View all teams
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default ConnectionsTeams
