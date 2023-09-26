// ** MUI Imports
import DatePickerWrapper from '@/core/styles/libs/react-datepicker'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import FormLayoutsAlignment from '@/views/forms/form-layouts/FormLayoutsAlignment'
import FormLayoutsBasic from '@/views/forms/form-layouts/FormLayoutsBasic'
import FormLayoutsCollapsible from '@/views/forms/form-layouts/FormLayoutsCollapsible'
import FormLayoutsIcons from '@/views/forms/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from '@/views/forms/form-layouts/FormLayoutsSeparator'
import FormLayoutsTabs from '@/views/forms/form-layouts/FormLayoutsTabs'

const FormLayouts = () => {
    return (
        <DatePickerWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <FormLayoutsBasic />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormLayoutsIcons />
                </Grid>
                <Grid item xs={12}>
                    <FormLayoutsSeparator />
                </Grid>
                <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(8)} !important` }}>
                    <Typography variant="h6">Form with Tabs</Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(4)} !important` }}>
                    <FormLayoutsTabs />
                </Grid>
                <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(8)} !important` }}>
                    <Typography variant="h6">Collapsible Sections</Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: (theme) => `${theme.spacing(4)} !important` }}>
                    <FormLayoutsCollapsible />
                </Grid>
                <Grid item xs={12}>
                    <FormLayoutsAlignment />
                </Grid>
            </Grid>
        </DatePickerWrapper>
    )
}

export default FormLayouts
