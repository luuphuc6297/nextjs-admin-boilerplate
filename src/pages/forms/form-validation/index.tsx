// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from '@/core/components/page-header'

// ** Demo Components Imports
import FormValidationAsync from '@/views/forms/form-validation/FormValidationAsync'
import FormValidationBasic from '@/views/forms/form-validation/FormValidationBasic'
import FormValidationSchema from '@/views/forms/form-validation/FormValidationSchema'

// ** Styled Component
import DatePickerWrapper from '@/core/styles/libs/react-datepicker'

const FormValidation = () => {
    return (
        <DatePickerWrapper>
            <Grid container spacing={6} className="match-height">
                <PageHeader
                    title={
                        <Typography variant="h5">
                            <Link
                                href="https://github.com/react-hook-form/react-hook-form"
                                target="_blank"
                            >
                                React Hook Form
                            </Link>
                        </Typography>
                    }
                    subtitle={
                        <Typography variant="body2">
                            React Hooks for forms validation (Web + React Native)
                        </Typography>
                    }
                />
                <Grid item xs={12}>
                    <FormValidationBasic />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormValidationSchema />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormValidationAsync />
                </Grid>
            </Grid>
        </DatePickerWrapper>
    )
}

export default FormValidation
