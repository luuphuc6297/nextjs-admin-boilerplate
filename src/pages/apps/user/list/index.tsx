import CardStatisticsHorizontal from '@/core/components/card-statistics/card-stats-horizontal'
import { CardStatsHorizontalProps } from '@/core/components/card-statistics/types'
import Icon from '@/core/components/icon'
import CustomAvatar from '@/core/components/mui/avatar'
import CustomChip from '@/core/components/mui/chip'
import { ThemeColor } from '@/core/layouts/types'
import { getInitials } from '@/core/utils/get-initials'
import { CardStatsType } from '@/mocks/types'
import { useFetchData } from '@/services/mockup/user'
import { UsersType } from '@/types/app/user'
import AddUserDrawer from '@/views/apps/user/list/AddUserDrawer'
import TableHeader from '@/views/apps/user/list/TableHeader'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import React from 'react'
import { MouseEvent, useCallback, useState } from 'react'

interface UserRoleType {
    [key: string]: { icon: string; color: string }
}

interface UserStatusType {
    [key: string]: ThemeColor
}

// ** Vars
const userRoleObj: UserRoleType = {
    admin: { icon: 'mdi:laptop', color: 'error.main' },
    author: { icon: 'mdi:cog-outline', color: 'warning.main' },
    editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
    maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
    subscriber: { icon: 'mdi:account-outline', color: 'primary.main' },
}

interface CellType {
    row: UsersType
}

const userStatusObj: UserStatusType = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary',
}

const StyledLink = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    '&:hover': {
        color: theme.palette.primary.main,
    },
}))

// ** renders client column
const renderClient = (row: UsersType) => {
    if (row.avatar.length) {
        return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 30, height: 30 }} />
    } else {
        return (
            <CustomAvatar
                skin="light"
                color={row.avatarColor || 'primary'}
                sx={{ mr: 3, width: 30, height: 30, fontSize: '.875rem' }}
            >
                {getInitials(row.fullName ? row.fullName : 'John Doe')}
            </CustomAvatar>
        )
    }
}

const RowOptions = ({ id }: { id: number | string }) => {
    // ** State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const rowOptionsOpen = Boolean(anchorEl)

    const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleRowOptionsClose = () => {
        setAnchorEl(null)
    }

    const handleDelete = () => {
        // dispatch(deleteUser(id))
        handleRowOptionsClose()
    }

    return (
        <>
            <IconButton size="small" onClick={handleRowOptionsClick}>
                <Icon icon="mdi:dots-vertical" />
            </IconButton>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={rowOptionsOpen}
                onClose={handleRowOptionsClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{ style: { minWidth: '8rem' } }}
            >
                <MenuItem
                    component={Link}
                    sx={{ '& svg': { mr: 2 } }}
                    onClick={handleRowOptionsClose}
                    href="/apps/user/view/overview/"
                >
                    <Icon icon="mdi:eye-outline" fontSize={20} />
                    View
                </MenuItem>
                <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
                    <Icon icon="mdi:pencil-outline" fontSize={20} />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
                    <Icon icon="mdi:delete-outline" fontSize={20} />
                    Delete
                </MenuItem>
            </Menu>
        </>
    )
}

const columns = [
    {
        flex: 0.2,
        minWidth: 230,
        field: 'fullName',
        headerName: 'User',
        renderCell: ({ row }: CellType) => {
            const { fullName, username } = row

            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {renderClient(row)}
                    <Box
                        sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}
                    >
                        <StyledLink href="/apps/user/view/overview/">{fullName}</StyledLink>
                        <Typography noWrap variant="caption">
                            {`@${username}`}
                        </Typography>
                    </Box>
                </Box>
            )
        },
    },
    {
        flex: 0.2,
        minWidth: 250,
        field: 'email',
        headerName: 'Email',
        renderCell: ({ row }: CellType) => {
            return (
                <Typography noWrap variant="body2">
                    {row.email}
                </Typography>
            )
        },
    },
    {
        flex: 0.15,
        field: 'role',
        minWidth: 150,
        headerName: 'Role',
        renderCell: ({ row }: CellType) => {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { mr: 3, color: userRoleObj[row.role].color },
                    }}
                >
                    <Icon icon={userRoleObj[row.role].icon} fontSize={20} />
                    <Typography
                        noWrap
                        sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
                    >
                        {row.role}
                    </Typography>
                </Box>
            )
        },
    },
    {
        flex: 0.15,
        minWidth: 120,
        headerName: 'Plan',
        field: 'currentPlan',
        renderCell: ({ row }: CellType) => {
            return (
                <Typography noWrap sx={{ textTransform: 'capitalize' }}>
                    {row.currentPlan}
                </Typography>
            )
        },
    },
    {
        flex: 0.1,
        minWidth: 110,
        field: 'status',
        headerName: 'Status',
        renderCell: ({ row }: CellType) => {
            return (
                <CustomChip
                    skin="light"
                    size="small"
                    label={row.status}
                    color={userStatusObj[row.status]}
                    sx={{ textTransform: 'capitalize' }}
                />
            )
        },
    },
    {
        flex: 0.1,
        minWidth: 90,
        sortable: false,
        field: 'actions',
        headerName: 'Actions',
        renderCell: ({ row }: CellType) => <RowOptions id={row.id} />,
    },
]

const UserList = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
    // ** State
    const [role, setRole] = useState<string>('')
    const [plan, setPlan] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [pageSize, setPageSize] = useState<number>(10)
    const [addUserOpen, setAddUserOpen] = useState<boolean>(false)

    const { data, isFetching } = useFetchData({
        role,
        status,
        q: value,
        currentPlan: plan,
    })

    const handleFilter = useCallback((val: string) => {
        setValue(val)
    }, [])

    const handleRoleChange = useCallback((e: SelectChangeEvent) => {
        setRole(e.target.value)
    }, [])

    const handlePlanChange = useCallback((e: SelectChangeEvent) => {
        setPlan(e.target.value)
    }, [])

    const handleStatusChange = useCallback((e: SelectChangeEvent) => {
        setStatus(e.target.value)
    }, [])

    const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

    const renderTableState = React.useCallback(() => {
        if (isFetching) return <div>Loading</div>
        else {
            return (
                <DataGrid
                    autoHeight
                    rows={data?.users}
                    columns={columns}
                    checkboxSelection
                    pageSize={pageSize}
                    disableSelectionOnClick
                    rowsPerPageOptions={[10, 25, 50]}
                    onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
                />
            )
        }
    }, [isFetching])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                {apiData && (
                    <Grid container spacing={6}>
                        {apiData.statsHorizontal.map(
                            (item: CardStatsHorizontalProps, index: number) => {
                                return (
                                    <Grid item xs={12} md={3} sm={6} key={index}>
                                        <CardStatisticsHorizontal
                                            {...item}
                                            icon={<Icon icon={item.icon as string} />}
                                        />
                                    </Grid>
                                )
                            }
                        )}
                    </Grid>
                )}
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title="Search Filters" />
                    <CardContent>
                        <Grid container spacing={6}>
                            <Grid item sm={4} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="role-select">Select Role</InputLabel>
                                    <Select
                                        fullWidth
                                        value={role}
                                        id="select-role"
                                        label="Select Role"
                                        labelId="role-select"
                                        onChange={handleRoleChange}
                                        inputProps={{ placeholder: 'Select Role' }}
                                    >
                                        <MenuItem value="">Select Role</MenuItem>
                                        <MenuItem value="admin">Admin</MenuItem>
                                        <MenuItem value="author">Author</MenuItem>
                                        <MenuItem value="editor">Editor</MenuItem>
                                        <MenuItem value="maintainer">Maintainer</MenuItem>
                                        <MenuItem value="subscriber">Subscriber</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="plan-select">Select Plan</InputLabel>
                                    <Select
                                        fullWidth
                                        value={plan}
                                        id="select-plan"
                                        label="Select Plan"
                                        labelId="plan-select"
                                        onChange={handlePlanChange}
                                        inputProps={{ placeholder: 'Select Plan' }}
                                    >
                                        <MenuItem value="">Select Plan</MenuItem>
                                        <MenuItem value="basic">Basic</MenuItem>
                                        <MenuItem value="company">Company</MenuItem>
                                        <MenuItem value="enterprise">Enterprise</MenuItem>
                                        <MenuItem value="team">Team</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="status-select">Select Status</InputLabel>
                                    <Select
                                        fullWidth
                                        value={status}
                                        id="select-status"
                                        label="Select Status"
                                        labelId="status-select"
                                        onChange={handleStatusChange}
                                        inputProps={{ placeholder: 'Select Role' }}
                                    >
                                        <MenuItem value="">Select Role</MenuItem>
                                        <MenuItem value="pending">Pending</MenuItem>
                                        <MenuItem value="active">Active</MenuItem>
                                        <MenuItem value="inactive">Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <TableHeader
                        value={value}
                        handleFilter={handleFilter}
                        toggle={toggleAddUserDrawer}
                    />
                    {/* <DataGrid
                        autoHeight
                        rows={data?.users}
                        columns={columns}
                        checkboxSelection
                        paginationModel={{
                            page: 1,
                            pageSize: pageSize,
                        }}
                        pageSizeOptions={[10, 25, 50]}
                        // onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
                    /> */}

                    {renderTableState()}
                </Card>
            </Grid>

            <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
        </Grid>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get('/cards/statistics')
    const apiData: CardStatsType = res.data

    return {
        props: {
            apiData,
        },
    }
}

export default UserList
