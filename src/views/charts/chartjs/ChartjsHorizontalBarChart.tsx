// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

// ** Third Party Imports
import { ChartData, ChartOptions } from 'chart.js'
import { Bar } from 'react-chartjs-2'

interface HorizontalBarProps {
    info: string
    warning: string
    labelColor: string
    borderColor: string
    legendColor: string
}

const ChartjsHorizontalBarChart = (props: HorizontalBarProps) => {
    // ** Props
    const { info, warning, labelColor, borderColor, legendColor } = props

    const options: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        elements: {
            bar: {
                borderRadius: {
                    topRight: 15,
                    bottomRight: 15
                }
            }
        },
        layout: {
            padding: { top: -4 }
        },
        scales: {
            x: {
                min: 0,
                grid: {
                    ...(borderColor ? { borderColor } : {}),
                    drawBorder: false,
                    color: borderColor
                } as any,
                ticks: { color: labelColor }
            },
            y: {
                grid: {
                    ...(borderColor ? { borderColor } : {}),
                    drawBorder: false,
                    color: borderColor
                } as any,
                ticks: { color: labelColor }
            }
        },
        plugins: {
            legend: {
                align: 'end',
                position: 'top',
                labels: { color: legendColor }
            }
        }
    }

    const data: ChartData<'bar'> = {
        labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI'],
        datasets: [
            {
                maxBarThickness: 15,
                label: 'Market Data',
                backgroundColor: warning,
                borderColor: 'transparent',
                data: [710, 350, 580, 460, 120]
            },
            {
                maxBarThickness: 15,
                backgroundColor: info,
                label: 'Personal Data',
                borderColor: 'transparent',
                data: [430, 590, 510, 240, 360]
            }
        ]
    }

    return (
        <Card>
            <CardHeader title='Balance' subheader='$74,123' />
            <CardContent>
                <Bar data={data} height={400} options={options} />
            </CardContent>
        </Card>
    )
}

export default ChartjsHorizontalBarChart
