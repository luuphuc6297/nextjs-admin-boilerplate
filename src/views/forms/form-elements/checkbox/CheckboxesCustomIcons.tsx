// ** MUI Imports
import Icon from '@/core/components/icon'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

// ** Icon Imports


const CheckboxesCustomIcons = () => {
    return (
        <FormGroup row>
            <FormControlLabel
                label="Heart"
                control={
                    <Checkbox
                        defaultChecked
                        name="size-small"
                        checkedIcon={<Icon icon="mdi:heart" fontSize={24} />}
                        icon={<Icon icon="mdi:heart-outline" fontSize={24} />}
                    />
                }
            />
            <FormControlLabel
                label="Star"
                control={
                    <Checkbox
                        defaultChecked
                        name="size-small"
                        checkedIcon={<Icon icon="mdi:star" fontSize={24} />}
                        icon={<Icon icon="mdi:star-outline" fontSize={24} />}
                    />
                }
            />
        </FormGroup>
    )
}

export default CheckboxesCustomIcons
