import Icon from '@/core/components/icon'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'

interface TableHeaderProps {
    plan: string
    value: string
    handleFilter: (val: string) => void
    handlePlanChange: (e: SelectChangeEvent) => void
}

const TableHeader = (props: TableHeaderProps) => {
    // ** Props
    const { plan, handlePlanChange, handleFilter, value } = props

    return (
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
            <Button
                sx={{ mr: 4, mb: 2 }}
                color="secondary"
                variant="outlined"
                startIcon={<Icon icon="mdi:export-variant" />}
            >
                Export
            </Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <TextField
                    size="small"
                    value={value}
                    placeholder="Search User"
                    sx={{ mr: 4, mb: 2 }}
                    onChange={(e) => handleFilter(e.target.value)}
                />
                <FormControl size="small" sx={{ mb: 2 }}>
                    <InputLabel id="plan-select">Select Plan</InputLabel>
                    <Select
                        size="small"
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
            </Box>
        </Box>
    )
}

export default TableHeader
