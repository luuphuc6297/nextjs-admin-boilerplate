import Icon from '@/core/components/icon'
import CustomChip from '@/core/components/mui/chip'
import PageHeader from '@/core/components/page-header'
import { ThemeColor } from '@/core/layouts/types'
import { PermissionRowType } from '@/types/app/permission'
import TableHeader from '@/views/apps/permissions/TableHeader'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FormEvent, useCallback, useState } from 'react'

interface Colors {
    [key: string]: ThemeColor
}

interface CellType {
    row: PermissionRowType
}

const colors: Colors = {
    support: 'info',
    users: 'success',
    manager: 'warning',
    administrator: 'primary',
    'restricted-user': 'error',
}

const defaultColumns = [
    {
        flex: 0.25,
        field: 'name',
        minWidth: 240,
        headerName: 'Name',
        renderCell: ({ row }: CellType) => <Typography>{row.name}</Typography>,
    },
    {
        flex: 0.35,
        minWidth: 280,
        field: 'assignedTo',
        headerName: 'Assigned To',
        renderCell: ({ row }: CellType) => {
            return row.assignedTo.map((assignee: string, index: number) => (
                <CustomChip
                    size="small"
                    key={index}
                    skin="light"
                    color={colors[assignee]}
                    label={assignee.replace('-', ' ')}
                    sx={{
                        '& .MuiChip-label': { textTransform: 'capitalize' },
                        '&:not(:last-of-type)': { mr: 3 },
                    }}
                />
            ))
        },
    },
    {
        flex: 0.25,
        minWidth: 215,
        field: 'createdDate',
        headerName: 'Created Date',
        renderCell: ({ row }: CellType) => <Typography>{row.createdDate}</Typography>,
    },
]

const PermissionsTable = () => {
    // ** State
    const [value, setValue] = useState<string>('')
    const [pageSize, setPageSize] = useState<number>(10)
    const [editValue, setEditValue] = useState<string>('')
    const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false)

    // useEffect(() => {
    //     dispatch(
    //         fetchData({
    //             q: value,
    //         })
    //     )
    // }, [dispatch, value])

    const handleFilter = useCallback((val: string) => {
        setValue(val)
    }, [])

    const handleEditPermission = (name: string) => {
        setEditValue(name)
        setEditDialogOpen(true)
    }

    const handleDialogToggle = () => setEditDialogOpen(!editDialogOpen)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        setEditDialogOpen(false)
        e.preventDefault()
    }

    const columns = [
        ...defaultColumns,
        {
            flex: 0.15,
            minWidth: 115,
            sortable: false,
            field: 'actions',
            headerName: 'Actions',
            renderCell: ({ row }: CellType) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => handleEditPermission(row.name)}>
                        <Icon icon="mdi:pencil-outline" fontSize={20} />
                    </IconButton>
                    <IconButton>
                        <Icon icon="mdi:delete-outline" fontSize={20} />
                    </IconButton>
                </Box>
            ),
        },
    ]

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <PageHeader
                        title={<Typography variant="h5">Permissions List</Typography>}
                        subtitle={
                            <Typography variant="body2">
                                Each category (Basic, Professional, and Business) includes the four
                                predefined roles shown below.
                            </Typography>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <TableHeader value={value} handleFilter={handleFilter} />
                        {/* <DataGrid
                            autoHeight
                            rows={store.data}
                            columns={columns}
                            pageSize={pageSize}
                            disableSelectionOnClick
                            rowsPerPageOptions={[10, 25, 50]}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        /> */}
                    </Card>
                </Grid>
            </Grid>
            <Dialog maxWidth="sm" fullWidth onClose={handleDialogToggle} open={editDialogOpen}>
                <DialogTitle sx={{ mx: 'auto', textAlign: 'center' }}>
                    <Typography variant="h5" component="span" sx={{ mb: 2 }}>
                        Edit Permission
                    </Typography>
                    <Typography variant="body2">
                        Edit permission as per your requirements.
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ mx: 'auto' }}>
                    <Alert severity="warning" sx={{ maxWidth: '500px' }}>
                        <AlertTitle>Warning!</AlertTitle>
                        By editing the permission name, you might break the system permissions
                        functionality. Please ensure you're absolutely certain before proceeding.
                    </Alert>

                    <Box component="form" sx={{ mt: 8 }} onSubmit={onSubmit}>
                        <FormGroup
                            sx={{
                                mb: 2,
                                alignItems: 'center',
                                flexDirection: 'row',
                                flexWrap: ['wrap', 'nowrap'],
                            }}
                        >
                            <TextField
                                fullWidth
                                size="small"
                                value={editValue}
                                label="Permission Name"
                                sx={{ mr: [0, 4], mb: [3, 0] }}
                                placeholder="Enter Permission Name"
                                onChange={(e) => setEditValue(e.target.value)}
                            />

                            <Button type="submit" variant="contained">
                                Update
                            </Button>
                        </FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Set as core permission" />
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PermissionsTable
