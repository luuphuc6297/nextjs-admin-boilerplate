// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from '@/core/components/option-menu'
import ReactApexcharts from '@/core/components/react-apexcharts'

const CrmTotalSales = () => {
    // ** Hook
    const theme = useTheme()

    const options: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false }
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityTo: 0.2,
                opacityFrom: 1,
                shadeIntensity: 0,
                type: 'horizontal',
                stops: [0, 100, 100]
            }
        },
        stroke: {
            width: 5,
            curve: 'smooth',
            lineCap: 'round'
        },
        legend: { show: false },
        colors: [theme.palette.success.main],
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
                bottom: -10
            }
        },
        xaxis: {
            axisTicks: { show: false },
            axisBorder: { show: false },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                style: {
                    fontSize: '0.875rem',
                    colors: theme.palette.text.disabled
                }
            }
        },
        yaxis: {
            labels: { show: false }
        }
    }

    return (
        <Card>
            <CardHeader
                title='Total Sales'
                subheader='$21,845'
                subheaderTypographyProps={{
                    sx: { mt: 1, fontWeight: 500, lineHeight: '2rem', color: 'text.primary', fontSize: '1.25rem !important' }
                }}
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
                titleTypographyProps={{
                    sx: {
                        fontSize: '1rem !important',
                        fontWeight: '600 !important',
                        lineHeight: '1.5rem !important',
                        letterSpacing: '0.15px !important'
                    }
                }}
            />
            <CardContent>
                <ReactApexcharts
                    type='line'
                    height={206}
                    options={options}
                    series={[{ name: 'Total Sales', data: [0, 258, 30, 240, 150, 400] }]}
                />
            </CardContent>
        </Card>
    )
}

export default CrmTotalSales
