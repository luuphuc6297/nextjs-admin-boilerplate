// ** React Imports
import { SyntheticEvent, useEffect, useState } from 'react'

// ** MUI Imports
import Icon from '@/core/components/icon'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

// ** Icon Imports

interface CardDataType {
    title: string
    avatars: string[]
    totalUsers: number
}

const cardData: CardDataType[] = [
    { totalUsers: 4, title: 'Administrator', avatars: ['1.png', '2.png', '3.png', '4.png'] },
    {
        totalUsers: 7,
        title: 'Manager',
        avatars: ['5.png', '6.png', '7.png', '8.png', '1.png', '2.png', '3.png'],
    },
    { totalUsers: 5, title: 'Users', avatars: ['4.png', '5.png', '6.png', '7.png', '8.png'] },
    { totalUsers: 3, title: 'Support', avatars: ['1.png', '2.png', '3.png'] },
    { totalUsers: 2, title: 'Restricted User', avatars: ['4.png', '5.png'] },
]

const rolesArr: string[] = [
    'User Management',
    'Content Management',
    'Disputes Management',
    'Database Management',
    'Financial Management',
    'Reporting',
    'API Control',
    'Repository Management',
    'Payroll',
]

const RolesCards = () => {
    // ** States
    const [open, setOpen] = useState<boolean>(false)
    const [dialogTitle, setDialogTitle] = useState<'Add' | 'Edit'>('Add')
    const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([])
    const [isIndeterminateCheckbox, setIsIndeterminateCheckbox] = useState<boolean>(false)

    const handleClickOpen = () => setOpen(true)

    const handleClose = () => {
        setOpen(false)
        setSelectedCheckbox([])
        setIsIndeterminateCheckbox(false)
    }

    const togglePermission = (id: string) => {
        const arr = selectedCheckbox
        if (selectedCheckbox.includes(id)) {
            arr.splice(arr.indexOf(id), 1)
            setSelectedCheckbox([...arr])
        } else {
            arr.push(id)
            setSelectedCheckbox([...arr])
        }
    }

    const handleSelectAllCheckbox = () => {
        if (isIndeterminateCheckbox) {
            setSelectedCheckbox([])
        } else {
            rolesArr.forEach((row) => {
                const id = row.toLowerCase().split(' ').join('-')
                togglePermission(`${id}-read`)
                togglePermission(`${id}-write`)
                togglePermission(`${id}-create`)
            })
        }
    }

    useEffect(() => {
        if (selectedCheckbox.length > 0 && selectedCheckbox.length < rolesArr.length * 3) {
            setIsIndeterminateCheckbox(true)
        } else {
            setIsIndeterminateCheckbox(false)
        }
    }, [selectedCheckbox])

    const renderCards = () =>
        cardData.map((item, index: number) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card>
                    <CardContent>
                        <Box
                            sx={{
                                mb: 3,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="body2">{`Total ${item.totalUsers} users`}</Typography>
                            <AvatarGroup
                                max={4}
                                sx={{
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        fontSize: '0.875rem',
                                    },
                                }}
                            >
                                {item.avatars.map((img, index: number) => (
                                    <Avatar
                                        key={index}
                                        alt={item.title}
                                        src={`/images/avatars/${img}`}
                                    />
                                ))}
                            </AvatarGroup>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography
                                    href="/"
                                    variant="body2"
                                    component={Link}
                                    sx={{ color: 'primary.main' }}
                                    onClick={(e: SyntheticEvent) => {
                                        e.preventDefault()
                                        handleClickOpen()
                                        setDialogTitle('Edit')
                                    }}
                                >
                                    Edit Role
                                </Typography>
                            </Box>
                            <IconButton sx={{ color: 'text.secondary' }}>
                                <Icon icon="mdi:content-copy" fontSize={20} />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        ))

    return (
        <Grid container spacing={6} className="match-height">
            {renderCards()}
            <Grid item xs={12} sm={6} lg={4}>
                <Card
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        handleClickOpen()
                        setDialogTitle('Add')
                    }}
                >
                    <Grid container sx={{ height: '100%' }}>
                        <Grid item xs={5}>
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    width={65}
                                    height={130}
                                    alt="add-role"
                                    src="/images/cards/pose_m1.png"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <CardContent>
                                <Box sx={{ textAlign: 'right' }}>
                                    <Button
                                        variant="contained"
                                        sx={{ mb: 3, whiteSpace: 'nowrap' }}
                                        onClick={() => {
                                            handleClickOpen()
                                            setDialogTitle('Add')
                                        }}
                                    >
                                        Add Role
                                    </Button>
                                    <Typography>Add role, if it doesn't exist.</Typography>
                                </Box>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Dialog fullWidth maxWidth="md" scroll="body" onClose={handleClose} open={open}>
                <DialogTitle sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="span">
                        {`${dialogTitle} Role`}
                    </Typography>
                    <Typography variant="body2">Set Role Permissions</Typography>
                </DialogTitle>
                <DialogContent sx={{ p: { xs: 6, sm: 12 } }}>
                    <Box sx={{ my: 4 }}>
                        <FormControl fullWidth>
                            <TextField label="Role Name" placeholder="Enter Role Name" />
                        </FormControl>
                    </Box>
                    <Typography variant="h6">Role Permissions</Typography>
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ pl: '0 !important' }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                fontSize: '0.875rem',
                                                whiteSpace: 'nowrap',
                                                alignItems: 'center',
                                                textTransform: 'capitalize',
                                                '& svg': { ml: 1, cursor: 'pointer' },
                                            }}
                                        >
                                            Administrator Access
                                            <Tooltip
                                                placement="top"
                                                title="Allows a full access to the system"
                                            >
                                                <Box sx={{ display: 'flex' }}>
                                                    <Icon
                                                        icon="mdi:information-outline"
                                                        fontSize="1rem"
                                                    />
                                                </Box>
                                            </Tooltip>
                                        </Box>
                                    </TableCell>
                                    <TableCell colSpan={3}>
                                        <FormControlLabel
                                            label="Select All"
                                            sx={{
                                                '& .MuiTypography-root': {
                                                    textTransform: 'capitalize',
                                                },
                                            }}
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    onChange={handleSelectAllCheckbox}
                                                    indeterminate={isIndeterminateCheckbox}
                                                    checked={
                                                        selectedCheckbox.length ===
                                                        rolesArr.length * 3
                                                    }
                                                />
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rolesArr.map((i: string, index: number) => {
                                    const id = i.toLowerCase().split(' ').join('-')

                                    return (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '& .MuiTableCell-root:first-of-type': {
                                                    pl: '0 !important',
                                                },
                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap',
                                                    color: (theme) =>
                                                        `${theme.palette.text.primary} !important`,
                                                }}
                                            >
                                                {i}
                                            </TableCell>
                                            <TableCell>
                                                <FormControlLabel
                                                    label="Read"
                                                    control={
                                                        <Checkbox
                                                            size="small"
                                                            id={`${id}-read`}
                                                            onChange={() =>
                                                                togglePermission(`${id}-read`)
                                                            }
                                                            checked={selectedCheckbox.includes(
                                                                `${id}-read`
                                                            )}
                                                        />
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <FormControlLabel
                                                    label="Write"
                                                    control={
                                                        <Checkbox
                                                            size="small"
                                                            id={`${id}-write`}
                                                            onChange={() =>
                                                                togglePermission(`${id}-write`)
                                                            }
                                                            checked={selectedCheckbox.includes(
                                                                `${id}-write`
                                                            )}
                                                        />
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <FormControlLabel
                                                    label="Create"
                                                    control={
                                                        <Checkbox
                                                            size="small"
                                                            id={`${id}-create`}
                                                            onChange={() =>
                                                                togglePermission(`${id}-create`)
                                                            }
                                                            checked={selectedCheckbox.includes(
                                                                `${id}-create`
                                                            )}
                                                        />
                                                    }
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions sx={{ pt: 0, display: 'flex', justifyContent: 'center' }}>
                    <Box className="demo-space-x">
                        <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            onClick={handleClose}
                        >
                            Submit
                        </Button>
                        <Button
                            size="large"
                            color="secondary"
                            variant="outlined"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default RolesCards
