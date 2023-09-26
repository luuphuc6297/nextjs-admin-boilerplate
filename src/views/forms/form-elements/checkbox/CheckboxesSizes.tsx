// ** MUI Imports
import Icon from '@/core/components/icon'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

// ** Icon Imports

const CheckboxesSizes = () => {
    return (
        <FormGroup row>
            <FormControlLabel
                label="Small"
                control={
                    <Checkbox
                        defaultChecked
                        name="size-small"
                        icon={<Icon icon="mdi:checkbox-blank-outline" fontSize={20} />}
                        checkedIcon={<Icon icon="mdi:checkbox-marked" fontSize={20} />}
                    />
                }
            />
            <FormControlLabel
                label="Default"
                control={<Checkbox defaultChecked name="size-default" />}
            />
        </FormGroup>
    )
}

export default CheckboxesSizes
