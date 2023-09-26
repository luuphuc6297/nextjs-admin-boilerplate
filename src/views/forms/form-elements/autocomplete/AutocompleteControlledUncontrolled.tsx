// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import { top100Films } from '@/mocks/autocomplete'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// ** Data

interface FilmOptionType {
    year: number
    title: string
}

const AutocompleteControlledUncontrolled = () => {
    // ** State
    const [value, setValue] = useState<FilmOptionType | null>(null)

    const handleChange = (event: SyntheticEvent, newValue: FilmOptionType | null) => {
        setValue(newValue)
    }

    return (
        <Box className="demo-space-x" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Autocomplete
                value={value}
                sx={{ width: 250 }}
                options={top100Films}
                onChange={handleChange}
                id="autocomplete-controlled"
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Controlled" />}
            />
            <Autocomplete
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-uncontrolled"
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Uncontrolled" />}
            />
        </Box>
    )
}

export default AutocompleteControlledUncontrolled