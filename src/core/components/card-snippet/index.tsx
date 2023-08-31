import Icon from '@/core/components/icon'
import useClipboard from '@/core/hooks/use-clipboard'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Prism from 'prismjs'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CardSnippetProps } from './types'

const CardSnippet = (props: CardSnippetProps) => {
    // ** Props
    const { id, sx, code, title, children, className } = props

    // ** States
    const [showCode, setShowCode] = useState<boolean>(false)
    const [tabValue, setTabValue] = useState<'tsx' | 'jsx'>(code.tsx !== null ? 'tsx' : 'jsx')

    // ** Hooks
    const clipboard = useClipboard()
    const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

    // ** Highlight code on mount
    useEffect(() => {
        Prism.highlightAll()
    }, [showCode, tabValue])

    const codeToCopy = () => {
        if (code.tsx !== null && tabValue === 'tsx') {
            return code.tsx.props.children.props.children
        } else if (code.jsx !== null && tabValue === 'jsx') {
            return code.jsx.props.children.props.children
        } else {
            return ''
        }
    }

    const handleClick = () => {
        clipboard.copy(codeToCopy())
        toast.success('The source code has been copied to your clipboard.', {
            duration: 2000
        })
    }

    const renderCode = () => {
        if (code[tabValue] !== null) {
            return code[tabValue]
        } else {
            return null
        }
    }

    return (
        <Card
            className={className}
            sx={{ '& .MuiCardHeader-action': { lineHeight: 0.8 }, ...sx }}
            id={id || `card-snippet--${title.toLowerCase().replace(/ /g, '-')}`}
        >
            <CardHeader
                title={title}
                {...(hidden
                    ? {}
                    : {
                        action: (
                            <IconButton onClick={() => setShowCode(!showCode)}>
                                <Icon icon='mdi:code-tags' fontSize={20} />
                            </IconButton>
                        )
                    })}
            />
            <CardContent>{children}</CardContent>
            {hidden ? null : (
                <Collapse in={showCode}>
                    <Divider sx={{ my: '0 !important' }} />

                    <CardContent sx={{ position: 'relative', '& pre': { m: '0 !important', maxHeight: 500 } }}>
                        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <ToggleButtonGroup
                                exclusive
                                size='small'
                                color='primary'
                                value={tabValue}
                                onChange={(e, newValue) => (newValue !== null ? setTabValue(newValue) : null)}
                            >
                                {code.tsx !== null ? (
                                    <ToggleButton value='tsx'>
                                        <Icon icon='mdi:language-typescript' fontSize={20} />
                                    </ToggleButton>
                                ) : null}
                                {code.jsx !== null ? (
                                    <ToggleButton value='jsx'>
                                        <Icon icon='mdi:language-javascript' fontSize={20} />
                                    </ToggleButton>
                                ) : null}
                            </ToggleButtonGroup>
                        </Box>
                        <Tooltip title='Copy the source' placement='top'>
                            <IconButton
                                onClick={handleClick}
                                sx={{
                                    top: '5rem',
                                    color: 'grey.100',
                                    right: '2.5625rem',
                                    position: 'absolute'
                                }}
                            >
                                <Icon icon='mdi:content-copy' fontSize={20} />
                            </IconButton>
                        </Tooltip>
                        <div>{renderCode()}</div>
                    </CardContent>
                </Collapse>
            )}
        </Card>
    )
}

export default CardSnippet
