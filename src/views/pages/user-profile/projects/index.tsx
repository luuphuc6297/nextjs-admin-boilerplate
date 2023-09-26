// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Types

// ** Utils Import
import { getInitials } from '@/core/utils/get-initials'

// ** Custom Components Imports
import CustomAvatar from '@/core/components/mui/avatar'
import CustomChip from '@/core/components/mui/chip'
import OptionsMenu from '@/core/components/option-menu'
import { ProjectsTabType } from '@/mocks/types'

const ProjectAvatar = ({ project }: { project: ProjectsTabType }) => {
    const { title, avatar, avatarColor = 'primary' } = project

    if (avatar.length) {
        return <CustomAvatar src={avatar} sx={{ width: 38, height: 38 }} />
    } else {
        return (
            <CustomAvatar skin="light" color={avatarColor} sx={{ width: 38, height: 38 }}>
                {getInitials(title)}
            </CustomAvatar>
        )
    }
}

const Projects = ({ data }: { data: ProjectsTabType[] }) => {
    return (
        <Grid container spacing={6}>
            {data &&
                Array.isArray(data) &&
                data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} md={6} lg={4}>
                            <Card>
                                <CardHeader
                                    avatar={<ProjectAvatar project={item} />}
                                    sx={{
                                        pb: 4,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        '& .MuiCardHeader-avatar': { mr: 3 },
                                    }}
                                    subheader={
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <Box component="span" sx={{ fontWeight: 600 }}>
                                                Client:
                                            </Box>{' '}
                                            {item.client}
                                        </Typography>
                                    }
                                    action={
                                        <OptionsMenu
                                            iconButtonProps={{ size: 'small' }}
                                            options={[
                                                'Rename Project',
                                                'View Details',
                                                'Add to Favorites',
                                                { divider: true },
                                                {
                                                    text: 'Leave Project',
                                                    menuItemProps: { sx: { color: 'error.main' } },
                                                },
                                            ]}
                                        />
                                    }
                                    title={
                                        <Typography
                                            href="/"
                                            variant="h6"
                                            component={Link}
                                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                                            sx={{
                                                textDecoration: 'none',
                                                '&:hover': { color: 'primary.main' },
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    }
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            mb: 4,
                                            gap: 2,
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <CustomChip
                                            rounded
                                            size="small"
                                            skin="light"
                                            sx={{ height: 60 }}
                                            label={
                                                <>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontWeight: 600 }}>
                                                            {item.budgetSpent}
                                                        </Typography>
                                                        <Typography
                                                            sx={{ color: 'text.secondary' }}
                                                        >{`/${item.budget}`}</Typography>
                                                    </Box>
                                                    <Typography sx={{ color: 'text.secondary' }}>
                                                        Total Budget
                                                    </Typography>
                                                </>
                                            }
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex' }}>
                                                <Typography sx={{ mr: 1, fontWeight: 600 }}>
                                                    Start Date:
                                                </Typography>
                                                <Typography sx={{ color: 'text.secondary' }}>
                                                    {item.startDate}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex' }}>
                                                <Typography sx={{ mr: 1, fontWeight: 600 }}>
                                                    Deadline:
                                                </Typography>
                                                <Typography sx={{ color: 'text.secondary' }}>
                                                    {item.deadline}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <Divider sx={{ my: '0 !important' }} />
                                <CardContent sx={{ pt: 6 }}>
                                    <Box
                                        sx={{
                                            mb: 3.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography sx={{ mr: 1, fontWeight: 600 }}>
                                                All Hours:
                                            </Typography>
                                            <Typography sx={{ color: 'text.secondary' }}>
                                                {item.hours}
                                            </Typography>
                                        </Box>
                                        <CustomChip
                                            size="small"
                                            skin="light"
                                            color={item.chipColor}
                                            label={`${item.daysLeft} days left`}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            mb: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Typography variant="caption">{`Tasks: ${item.completedTask}/${item.totalTask}`}</Typography>
                                        <Typography variant="caption">
                                            {`${Math.round(
                                                (item.completedTask / item.totalTask) * 100
                                            )}% Completed`}
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        color="primary"
                                        variant="determinate"
                                        value={Math.round(
                                            (item.completedTask / item.totalTask) * 100
                                        )}
                                        sx={{
                                            mb: 3.5,
                                            height: 8,
                                            borderRadius: 2,
                                            '& .MuiLinearProgress-bar': { borderRadius: 2 },
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AvatarGroup className="pull-up" sx={{ mr: 2 }}>
                                                {item.avatarGroup &&
                                                    item.avatarGroup.map((person, index) => {
                                                        return (
                                                            <Tooltip
                                                                key={index}
                                                                title={person.name}
                                                            >
                                                                <CustomAvatar
                                                                    src={person.avatar}
                                                                    alt={person.name}
                                                                    sx={{ height: 32, width: 32 }}
                                                                />
                                                            </Tooltip>
                                                        )
                                                    })}
                                            </AvatarGroup>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.disabled' }}
                                            >
                                                {item.members}
                                            </Typography>
                                        </Box>
                                        <Box
                                            href="/"
                                            component={Link}
                                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                textDecoration: 'none',
                                                '& svg': { mr: 1, color: 'text.disabled' },
                                            }}
                                        >
                                            <Icon icon="mdi:message-outline" />
                                            <Typography sx={{ color: 'text.disabled' }}>
                                                {item.comments}
                                            </Typography>
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

export default Projects
