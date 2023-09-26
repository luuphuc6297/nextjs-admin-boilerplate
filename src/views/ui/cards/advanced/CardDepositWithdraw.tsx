// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import MuiDivider, { DividerProps } from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface DataType {
    logo: string
    title: string
    amount: string
    subtitle: string
    logoWidth: number
    logoHeight: number
}

const depositData = [
    {
        logoWidth: 28,
        logoHeight: 29,
        amount: '+$4,650',
        subtitle: 'Sell UI Kit',
        title: 'Gumroad Account',
        logo: '/images/logos/gumroad.png',
    },
    {
        logoWidth: 38,
        logoHeight: 38,
        amount: '+$92,705',
        title: 'Mastercard',
        subtitle: 'Wallet deposit',
        logo: '/images/logos/mastercard-label.png',
    },
    {
        logoWidth: 20,
        logoHeight: 28,
        amount: '+$957',
        title: 'Stripe Account',
        subtitle: 'iOS Application',
        logo: '/images/logos/stripe.png',
    },
    {
        logoWidth: 34,
        logoHeight: 32,
        amount: '+$6,837',
        title: 'American Bank',
        subtitle: 'Bank Transfer',
        logo: '/images/logos/american-bank.png',
    },
    {
        logoWidth: 33,
        logoHeight: 22,
        amount: '+$446',
        title: 'Bank Account',
        subtitle: 'Wallet deposit',
        logo: '/images/logos/citi-bank.png',
    },
]

const withdrawData = [
    {
        logoWidth: 29,
        logoHeight: 30,
        amount: '-$145',
        title: 'Google Adsense',
        subtitle: 'Paypal deposit',
        logo: '/images/logos/google.png',
    },
    {
        logoWidth: 34,
        logoHeight: 34,
        amount: '-$1870',
        title: 'Github Enterprise',
        logo: '/images/logos/github.png',
        subtitle: 'Security & compliance',
    },
    {
        logoWidth: 30,
        logoHeight: 30,
        amount: '-$450',
        title: 'Upgrade Slack Plan',
        subtitle: 'Debit card deposit',
        logo: '/images/logos/slack.png',
    },
    {
        logoWidth: 30,
        logoHeight: 30,
        amount: '-$540',
        title: 'Digital Ocean',
        subtitle: 'Cloud Hosting',
        logo: '/images/logos/digital-ocean.png',
    },
    {
        logoWidth: 36,
        logoHeight: 21,
        amount: '-$21',
        title: 'AWS Account',
        logo: '/images/logos/aws.png',
        subtitle: 'Choosing a Cloud Platform',
    },
]

// Styled Divider component
const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
    margin: `${theme.spacing(5, 0)} !important`,
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: {
        borderRight: 'none',
        margin: `${theme.spacing(0, 5)} !important`,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}))

const CardDepositWithdraw = () => {
    return (
        <Card
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: ['column', 'column', 'row'],
            }}
        >
            <Box sx={{ width: '100%' }}>
                <CardHeader
                    title="Deposit"
                    sx={{ '& .MuiCardHeader-action': { mt: -0.8 } }}
                    action={
                        <Box
                            href="/"
                            component={Link}
                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                            sx={{
                                fontSize: '.75rem',
                                color: 'primary.main',
                                textDecoration: 'none',
                            }}
                        >
                            View All
                        </Box>
                    }
                />
                <CardContent>
                    {depositData.map((item: DataType, index: number) => {
                        return (
                            <Box
                                key={item.title}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: index !== depositData.length - 1 ? 7.3125 : 0,
                                }}
                            >
                                <Box
                                    sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}
                                >
                                    <img
                                        src={item.logo}
                                        alt={item.title}
                                        width={item.logoWidth}
                                        height={item.logoHeight}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        ml: 4,
                                        width: '100%',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Typography
                                            sx={{ mb: 0.5, fontWeight: 600, fontSize: '0.875rem' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography variant="caption">{item.subtitle}</Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontWeight: 600, color: 'success.main' }}
                                    >
                                        {item.amount}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </CardContent>
            </Box>

            <Divider flexItem />

            <Box sx={{ width: '100%' }}>
                <CardHeader
                    title="Withdraw"
                    sx={{ '& .MuiCardHeader-action': { mt: -0.8 } }}
                    action={
                        <Box
                            href="/"
                            component={Link}
                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                            sx={{
                                fontSize: '.75rem',
                                color: 'primary.main',
                                textDecoration: 'none',
                            }}
                        >
                            View All
                        </Box>
                    }
                />
                <CardContent>
                    {withdrawData.map((item: DataType, index: number) => {
                        return (
                            <Box
                                key={item.title}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: index !== depositData.length - 1 ? 7.3125 : 0,
                                }}
                            >
                                <Box
                                    sx={{ minWidth: 36, display: 'flex', justifyContent: 'center' }}
                                >
                                    <img
                                        src={item.logo}
                                        alt={item.title}
                                        width={item.logoWidth}
                                        height={item.logoHeight}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        ml: 4,
                                        width: '100%',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Typography
                                            sx={{ mb: 0.5, fontWeight: 600, fontSize: '0.875rem' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography variant="caption">{item.subtitle}</Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontWeight: 600, color: 'error.main' }}
                                    >
                                        {item.amount}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </CardContent>
            </Box>
        </Card>
    )
}

export default CardDepositWithdraw
