// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Types
import { ThemeColor } from '@/core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from '@/core/components/mui/avatar'
import OptionsMenu from '@/core/components/option-menu'

interface DataType {
  title: string
  imgAlt: string
  imgSrc: string
  subtitle: string
  imgWidth: number
  imgHeight: number
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    imgWidth: 22,
    imgHeight: 20,
    title: '42.8k',
    imgAlt: 'heart',
    avatarColor: 'primary',
    subtitle: 'Number of like',
    imgSrc: '/images/cards/heart-medical.png'
  },
  {
    imgWidth: 20,
    imgHeight: 21,
    title: '21.2k',
    imgAlt: 'bar-graph',
    avatarColor: 'warning',
    subtitle: 'Number of Followers',
    imgSrc: '/images/cards/graph-bar.png'
  },
  {
    imgWidth: 20,
    title: '2.4k',
    imgHeight: 19,
    imgAlt: 'comments',
    avatarColor: 'info',
    subtitle: 'Number of Comments',
    imgSrc: '/images/cards/comment-alt-lines.png'
  },
  {
    imgWidth: 20,
    imgHeight: 20,
    imgAlt: 'user',
    title: '389.50k',
    avatarColor: 'success',
    subtitle: 'Number of Visits',
    imgSrc: '/images/cards/user.png'
  }
]

const CardSocialAnalytics = () => {
  return (
    <Card>
      <CardHeader
        title='Social Analytics'
        action={
          <OptionsMenu
            options={['Refresh', 'Share', 'Update']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(1.5)} !important` }}>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: index !== data.length - 1 ? 4 : undefined
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar
                  skin='light'
                  color={item.avatarColor}
                  sx={{ mr: 3.75, width: '2.5rem', height: '2.5rem' }}
                >
                  <img alt={item.imgAlt} src={item.imgSrc} width={item.imgWidth} height={item.imgHeight} />
                </CustomAvatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardSocialAnalytics
