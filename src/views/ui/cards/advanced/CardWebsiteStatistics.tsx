// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from '@/core/components/icon'

// ** Third Party Component Imports
import { BarChart, Bar, ResponsiveContainer } from 'recharts'

// ** Types
import { ThemeColor } from '@/core/layouts/types'

// ** Custom Components Imports
import OptionsMenu from '@/core/components/option-menu'

interface DataType {
    title: string
    sales: string
    trend: ReactNode
    color: ThemeColor
    trendNumber: string
}

const data: DataType[] = [
    {
        sales: '86,471',
        title: 'Direct',
        color: 'success',
        trendNumber: '15%',
        trend: (
            <Box
                component="span"
                sx={{ color: 'error.main', '& svg': { verticalAlign: 'bottom' } }}
            >
                <Icon icon="mdi:chevron-down" />
            </Box>
        ),
    },
    {
        sales: '57,484',
        title: 'Organic',
        color: 'primary',
        trendNumber: '85%',
        trend: (
            <Box
                component="span"
                sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}
            >
                <Icon icon="mdi:chevron-up" />
            </Box>
        ),
    },
    {
        sales: '2,534',
        color: 'warning',
        title: 'Referral',
        trendNumber: '48%',
        trend: (
            <Box
                component="span"
                sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}
            >
                <Icon icon="mdi:chevron-up" />
            </Box>
        ),
    },
    {
        sales: '977',
        title: 'Mail',
        color: 'error',
        trendNumber: '36%',
        trend: (
            <Box
                component="span"
                sx={{ color: 'error.main', '& svg': { verticalAlign: 'bottom' } }}
            >
                <Icon icon="mdi:chevron-down" />
            </Box>
        ),
    },
    {
        sales: '92',
        color: 'info',
        title: 'Social',
        trendNumber: '55%',
        trend: (
            <Box
                component="span"
                sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}
            >
                <Icon icon="mdi:chevron-up" />
            </Box>
        ),
    },
    {
        sales: '28',
        title: 'Other',
        color: 'secondary',
        trendNumber: '12%',
        trend: (
            <Box
                component="span"
                sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}
            >
                <Icon icon="mdi:chevron-up" />
            </Box>
        ),
    },
]

const chartData = [
    { value: 50 },
    { value: 30 },
    { value: 100 },
    { value: 75 },
    { value: 40 },
    { value: 75 },
    { value: 20 },
]

const CardWebsiteStats = () => {
    // ** Hook
    const theme = useTheme()

    return (
        <Card>
            <CardHeader
                title="Website Statistics"
                action={
                    <OptionsMenu
                        options={['Last 28 Days', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
            />
            <CardContent>
                <Box
                    sx={{
                        mb: 4.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h3" sx={{ mb: 0.5 }}>
                            4,590
                        </Typography>
                        <Typography variant="caption">Total Traffic</Typography>
                    </Box>
                    <Box sx={{ height: 75, width: '100%', maxWidth: '120px' }}>
                        <ResponsiveContainer>
                            <BarChart height={100} data={chartData}>
                                <Bar
                                    dataKey="value"
                                    fill={theme.palette.primary.main}
                                    radius={4}
                                    barSize={5}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {data.map((row: DataType) => {
                                return (
                                    <TableRow
                                        key={row.title}
                                        sx={{
                                            '&:last-of-type td': { border: 0, pb: 0 },
                                            '& .MuiTableCell-root': {
                                                '&:last-of-type': { pr: 0 },
                                                '&:first-of-type': { pl: 0 },
                                                py: (theme) => `${theme.spacing(2.75)} !important`,
                                            },
                                            '&:first-of-type td': {
                                                borderTop: (theme) =>
                                                    `1px solid ${theme.palette.divider}`,
                                            },
                                        }}
                                    >
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    '& svg': {
                                                        mr: 1.8,
                                                        color: `${row.color}.main`,
                                                    },
                                                }}
                                            >
                                                <Icon icon="mdi:circle" fontSize="1rem" />
                                                <Typography sx={{ fontSize: '0.875rem' }}>
                                                    {row.title}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography
                                                sx={{ fontWeight: 600, fontSize: '0.875rem' }}
                                            >
                                                {row.sales}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        mr: 1.5,
                                                        fontWeight: 600,
                                                        fontSize: '0.875rem',
                                                    }}
                                                >
                                                    {row.trendNumber}
                                                </Typography>
                                                {row.trend}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default CardWebsiteStats
