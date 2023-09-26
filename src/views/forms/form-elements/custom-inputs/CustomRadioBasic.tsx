import { ChangeEvent, useState } from 'react'
import CustomRadioBasic from '@/core/components/custom-radio/basic'
import { CustomRadioBasicData } from '@/core/components/custom-radio/types'
import Grid from '@mui/material/Grid'

const data: CustomRadioBasicData[] = [
    {
        meta: 'Free',
        title: 'Basic',
        value: 'basic',
        isSelected: true,
        content: 'Get 1 project with 1 team member.',
    },
    {
        meta: '$5.00',
        title: 'Premium',
        value: 'premium',
        content: 'Get 5 projects with 5 team members.',
    },
]

const BasicCustomRadio = () => {
    const initialSelected: string = data.filter((item) => item.isSelected)[
        data.filter((item) => item.isSelected).length - 1
    ].value

    // ** State
    const [selected, setSelected] = useState<string>(initialSelected)

    const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
        if (typeof prop === 'string') {
            setSelected(prop)
        } else {
            setSelected((prop.target as HTMLInputElement).value)
        }
    }

    return (
        <Grid container spacing={4}>
            {data.map((item, index) => (
                <CustomRadioBasic
                    key={index}
                    data={data[index]}
                    selected={selected}
                    name="custom-radios-basic"
                    handleChange={handleChange}
                    gridProps={{ sm: 6, xs: 12 }}
                />
            ))}
        </Grid>
    )
}

export default BasicCustomRadio
