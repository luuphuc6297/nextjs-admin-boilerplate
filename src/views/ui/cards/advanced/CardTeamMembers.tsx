// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CircularProgress from '@mui/material/CircularProgress'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

// ** Types
import { ThemeColor } from '@/core/layouts/types'

// ** Custom Components Imports
import CustomChip from '@/core/components/mui/chip'
import OptionsMenu from '@/core/components/option-menu'

interface DataType {
    src: string
    name: string
    post: string
    value: number
    tasks: number
    project: string
    color: ThemeColor
    completedTasks: number
}

const data: DataType[] = [
    {
        value: 60,
        tasks: 135,
        color: 'primary',
        project: 'Zipcar',
        name: 'Dean Hogan',
        completedTasks: 87,
        post: 'IOS developer',
        src: '/images/avatars/1.png',
    },
    {
        value: 80,
        tasks: 420,
        color: 'success',
        project: 'Brandi',
        name: 'Hilda Rice',
        completedTasks: 340,
        post: 'Laravel developer',
        src: '/images/avatars/8.png',
    },
    {
        value: 50,
        tasks: 82,
        color: 'warning',
        project: 'Payers',
        completedTasks: 50,
        name: "Andrew O'Brian",
        post: 'React developer',
        src: '/images/avatars/5.png',
    },
    {
        value: 70,
        tasks: 260,
        color: 'error',
        project: 'Bitbank',
        completedTasks: 98,
        name: 'Elanor Price',
        post: 'Angular developer',
        src: '/images/avatars/2.png',
    },
    {
        value: 60,
        tasks: 25,
        project: 'Aviato',
        color: 'secondary',
        completedTasks: 12,
        name: 'Carl Oliver',
        post: 'VueJs developer',
        src: '/images/avatars/3.png',
    },
]

const CardTeamMembers = () => {
    return (
        <Card>
            <CardHeader
                title="Team Members"
                action={
                    <OptionsMenu
                        options={['Refresh', 'Share', 'Update']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
                    />
                }
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ '& .MuiTableCell-root': { py: 0.75 } }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Project</TableCell>
                            <TableCell>Tasks</TableCell>
                            <TableCell>Progress</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: DataType) => {
                            return (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        '&:last-child .MuiTableCell-root': {
                                            pb: (theme) => `${theme.spacing(4)} !important`,
                                        },
                                        '& .MuiTableCell-root': {
                                            border: 0,
                                            py: (theme) => `${theme.spacing(2.5)} !important`,
                                        },
                                    }}
                                >
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar
                                                src={row.src}
                                                alt={row.name}
                                                sx={{
                                                    width: '2.375rem',
                                                    height: '2.375rem',
                                                    mr: 3,
                                                }}
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography
                                                    noWrap
                                                    variant="body2"
                                                    sx={{
                                                        mb: 0.5,
                                                        fontWeight: 600,
                                                        color: 'text.primary',
                                                    }}
                                                >
                                                    {row.name}
                                                </Typography>
                                                <Typography noWrap variant="caption">
                                                    {row.post}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <CustomChip
                                            skin="light"
                                            size="small"
                                            color={row.color}
                                            label={row.project}
                                            sx={{
                                                height: 20,
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontWeight: 600, color: 'primary.main' }}
                                            >
                                                {`${row.completedTasks}/`}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                {row.tasks}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            display: 'flex',
                                            position: 'relative',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <CircularProgress
                                            size={32}
                                            value={100}
                                            thickness={5}
                                            variant="determinate"
                                            sx={{
                                                position: 'absolute',
                                                color: 'customColors.trackBg',
                                            }}
                                        />
                                        <CircularProgress
                                            size={32}
                                            thickness={5}
                                            value={row.value}
                                            color={row.color}
                                            variant="determinate"
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default CardTeamMembers
