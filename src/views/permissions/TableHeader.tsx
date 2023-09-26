// ** React Imports
import { FormEvent, useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

interface TableHeaderProps {
    value: string
    handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
    // ** Props
    const { value, handleFilter } = props

    // ** State
    const [open, setOpen] = useState<boolean>(false)

    const handleDialogToggle = () => setOpen(!open)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        setOpen(false)
        e.preventDefault()
    }

    return (
        <>
            <Box
                sx={{
                    p: 5,
                    pb: 3,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <TextField
                    size="small"
                    value={value}
                    sx={{ mr: 4, mb: 2 }}
                    placeholder="Search Permission"
                    onChange={(e) => handleFilter(e.target.value)}
                />
                <Button sx={{ mb: 2 }} variant="contained" onClick={handleDialogToggle}>
                    Add Permission
                </Button>
            </Box>
            <Dialog fullWidth maxWidth="sm" onClose={handleDialogToggle} open={open}>
                <DialogTitle sx={{ pt: 12, mx: 'auto', textAlign: 'center' }}>
                    <Typography variant="h5" component="span" sx={{ mb: 2 }}>
                        Add New Permission
                    </Typography>
                    <Typography variant="body2">
                        Permissions you may use and assign to your users.
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ pb: 12, mx: 'auto' }}>
                    <Box
                        component="form"
                        onSubmit={(e) => onSubmit(e)}
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Permission Name"
                            sx={{ mb: 1, maxWidth: 360 }}
                            placeholder="Enter Permission Name"
                        />
                        <FormControlLabel control={<Checkbox />} label="Set as core permission" />
                        <Box
                            className="demo-space-x"
                            sx={{ '& > :last-child': { mr: '0 !important' } }}
                        >
                            <Button size="large" type="submit" variant="contained">
                                Create Permission
                            </Button>
                            <Button
                                type="reset"
                                size="large"
                                variant="outlined"
                                color="secondary"
                                onClick={handleDialogToggle}
                            >
                                Discard
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default TableHeader
