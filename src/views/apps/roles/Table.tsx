import CustomChip from '@/components/base/chip'
import Icon from '@/core/components/icon'
import CustomAvatar from '@/core/components/mui/avatar'
import { ThemeColor } from '@/core/layouts/types'
import { getInitials } from '@/core/utils/get-initials'
import { useFetchData } from '@/services/mockup/user'
import { UsersType } from '@/types/app/user'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import TableHeader from './TableHeader'

interface UserRoleType {
    [key: string]: { icon: string; color: string }
}

interface UserStatusType {
    [key: string]: ThemeColor
}

interface CellType {
    row: UsersType
}

// ** Vars
const userRoleObj: UserRoleType = {
    admin: { icon: 'mdi:laptop', color: 'error.main' },
    author: { icon: 'mdi:cog-outline', color: 'warning.main' },
    editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
    maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
    subscriber: { icon: 'mdi:account-outline', color: 'primary.main' },
}

const userStatusObj: UserStatusType = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary',
}

// ** renders client column
const renderClient = (row: UsersType) => {
    if (row.avatar.length) {
        return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 30, height: 30 }} />
    } else {
        return (
            <CustomAvatar
                skin="light"
                color={row.avatarColor}
                sx={{ mr: 3, width: 30, height: 30, fontSize: '.875rem' }}
            >
                {getInitials(row.fullName ? row.fullName : 'John Doe')}
            </CustomAvatar>
        )
    }
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
                        <Typography
                            noWrap
                            variant="body2"
                            component={Link}
                            href="/apps/user/view/overview/"
                            sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                textDecoration: 'none',
                                '&:hover': { color: (theme) => theme.palette.primary.main },
                            }}
                        >
                            {fullName}
                        </Typography>
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
                <Typography variant="body2" noWrap>
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
        minWidth: 100,
        sortable: false,
        field: 'actions',
        headerName: 'Actions',
        renderCell: () => (
            <IconButton component={Link} href="/apps/user/view/overview/">
                <Icon icon="mdi:eye-outline" />
            </IconButton>
        ),
    },
]

const UserList = () => {
    // ** State
    const [plan, setPlan] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [pageSize, setPageSize] = useState<number>(10)

    const { data, isFetching } = useFetchData({
        role: '',
        q: value,
        status: '',
        currentPlan: plan,
    })

    const handleFilter = useCallback((val: string) => {
        setValue(val)
    }, [])

    const handlePlanChange = useCallback((e: SelectChangeEvent) => {
        setPlan(e.target.value)
    }, [])

    const renderTableState = React.useCallback(() => {
        if (isFetching) return <div>Loading</div>
        else {
            return (
                <DataGrid
                    autoHeight
                    rows={data.users}
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
                <Card>
                    <TableHeader
                        plan={plan}
                        value={value}
                        handleFilter={handleFilter}
                        handlePlanChange={handlePlanChange}
                    />
                    {renderTableState()}
                </Card>
            </Grid>
        </Grid>
    )
}

export default UserList
