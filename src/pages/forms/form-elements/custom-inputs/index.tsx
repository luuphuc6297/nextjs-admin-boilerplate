// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CustomCheckboxBasic from '@/views/forms/form-elements/custom-inputs/CustomCheckboxBasic'
import CustomCheckboxIcons from '@/views/forms/form-elements/custom-inputs/CustomCheckboxIcons'
import CustomCheckboxImg from '@/views/forms/form-elements/custom-inputs/CustomCheckboxImg'
import CustomRadioBasic from '@/views/forms/form-elements/custom-inputs/CustomRadioBasic'
import CustomRadioIcons from '@/views/forms/form-elements/custom-inputs/CustomRadioIcons'
import CustomRadioImg from '@/views/forms/form-elements/custom-inputs/CustomRadioImg'

// ** Source code imports
import CardSnippet from '@/core/components/card-snippet'
import * as source from '@/views/forms/form-elements/custom-inputs/CustomInputsSourceCode'

const CustomInputs = () => {
    return (
        <Grid container spacing={6} className="match-height">
            <Grid item xs={12} lg={6}>
                <CardSnippet
                    title="Custom Radios"
                    code={{
                        tsx: source.CustomRadioBasicTSXCode,
                        jsx: source.CustomRadioBasicJSXCode,
                    }}
                >
                    <CustomRadioBasic />
                </CardSnippet>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CardSnippet
                    title="Custom Checkboxes"
                    code={{
                        tsx: source.CustomCheckboxBasicTSXCode,
                        jsx: source.CustomCheckboxBasicJSXCode,
                    }}
                >
                    <CustomCheckboxBasic />
                </CardSnippet>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CardSnippet
                    title="Custom Radios with Icons"
                    code={{
                        tsx: source.CustomRadioIconsTSXCode,
                        jsx: source.CustomRadioIconsJSXCode,
                    }}
                >
                    <CustomRadioIcons />
                </CardSnippet>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CardSnippet
                    title="Custom Checkboxes with Icons"
                    code={{
                        tsx: source.CustomCheckboxIconsTSXCode,
                        jsx: source.CustomCheckboxIconsJSXCode,
                    }}
                >
                    <CustomCheckboxIcons />
                </CardSnippet>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CardSnippet
                    title="Custom Radios with Images"
                    code={{
                        tsx: source.CustomRadioImgTSXCode,
                        jsx: source.CustomRadioImgJSXCode,
                    }}
                >
                    <CustomRadioImg />
                </CardSnippet>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CardSnippet
                    title="Custom Checkboxes with Images"
                    code={{
                        tsx: source.CustomCheckboxImgTSXCode,
                        jsx: source.CustomCheckboxImgJSXCode,
                    }}
                >
                    <CustomCheckboxImg />
                </CardSnippet>
            </Grid>
        </Grid>
    )
}

export default CustomInputs
