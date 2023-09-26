import Icon from '@/core/components/icon'
import CustomChip from '@/core/components/mui/chip'
import OptionsMenu from '@/core/components/option-menu'
import { TeamsTabType } from '@/mocks/types'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { SyntheticEvent } from 'react'

const Teams = ({ data }: { data: TeamsTabType[] }) => {
    return (
        <Grid container spacing={6}>
            {data &&
                Array.isArray(data) &&
                data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} md={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar
                                                src={item.avatar}
                                                sx={{ mr: 2.5, height: 38, width: 38 }}
                                            />
                                            <Typography variant="h6">{item.title}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton
                                                size="small"
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                <Icon icon="mdi:star-outline" />
                                            </IconButton>
                                            <OptionsMenu
                                                iconButtonProps={{ size: 'small' }}
                                                options={[
                                                    'Rename Team',
                                                    'View Details',
                                                    'Add to Favorites',
                                                    { divider: true },
                                                    {
                                                        text: 'Delete Team',
                                                        menuItemProps: {
                                                            sx: { color: 'error.main' },
                                                        },
                                                    },
                                                ]}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ my: 5, color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            gap: 2,
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AvatarGroup
                                                className="pull-up"
                                                sx={{ zIndex: 1, alignItems: 'center' }}
                                            >
                                                {item.avatarGroup.map((person, index) => {
                                                    return (
                                                        <Tooltip key={index} title={person.name}>
                                                            <Avatar
                                                                src={person.avatar}
                                                                alt={person.name}
                                                                sx={{ height: 32, width: 32 }}
                                                            />
                                                        </Tooltip>
                                                    )
                                                })}
                                            </AvatarGroup>
                                            <Avatar
                                                sx={{
                                                    ml: -1,
                                                    height: 32,
                                                    width: 32,
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                +{item.extraMembers}
                                            </Avatar>
                                        </Box>
                                        <Box
                                            sx={{
                                                ml: 'auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
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
                                                            '&:not(:last-of-type)': { mr: 3 },
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
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
        </Grid>
    )
}

export default Teams
