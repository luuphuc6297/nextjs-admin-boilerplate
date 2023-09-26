import Icon from '@/core/components/icon'
import CustomAvatar from '@/core/components/mui/avatar'
import OptionsMenu from '@/core/components/option-menu'
import ReactDraftWysiwyg from '@/core/components/react-draft-wysiwyg'
import { EditorWrapper } from '@/core/styles/libs/react-draft-wysiwyg'
import { getInitials } from '@/core/utils/get-initials'
import { FieldMenuItems, MailComposeType } from '@/types/app/email'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Chip from '@mui/material/Chip'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { HTMLAttributes, useRef, useState } from 'react'
import { EditorState } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface MailFields {
    cc: boolean
    bcc: boolean
}

const menuItemsArr = [
    {
        name: 'Ross Geller',
        value: 'ross',
        src: '/images/avatars/1.png',
    },
    {
        name: 'Pheobe Buffay',
        value: 'pheobe',
        src: '/images/avatars/2.png',
    },
    {
        name: 'Joey Tribbiani',
        value: 'joey',
        src: '/images/avatars/3.png',
    },
    {
        name: 'Rachel Green',
        value: 'rachel',
        src: '/images/avatars/4.png',
    },
    {
        name: 'Chandler Bing',
        value: 'chandler',
        src: '/images/avatars/5.png',
    },
    {
        name: 'Monica Geller',
        value: 'monica',
        src: '/images/avatars/8.png',
    },
]

const filter = createFilterOptions()

const ComposePopup = (props: MailComposeType) => {
    // ** Props
    const { mdAbove, composeOpen, composePopupWidth, toggleComposeOpen } = props

    // ** States
    const [emailTo, setEmailTo] = useState<FieldMenuItems[]>([])
    const [ccValue, setccValue] = useState<FieldMenuItems[]>([])
    const [subjectValue, setSubjectValue] = useState<string>('')
    const [bccValue, setbccValue] = useState<FieldMenuItems[]>([])
    const [sendBtnOpen, setSendBtnOpen] = useState<boolean>(false)
    const [messageValue, setMessageValue] = useState(EditorState.createEmpty())
    const [visibility, setVisibility] = useState<MailFields>({
        cc: false,
        bcc: false,
    })

    // ** Ref
    const anchorRefSendBtn = useRef<HTMLDivElement>(null)

    const toggleVisibility = (value: 'cc' | 'bcc') =>
        setVisibility({ ...visibility, [value]: !visibility[value] })

    const handleSendMenuItemClick = () => {
        setSendBtnOpen(false)
    }

    const handleSendBtnToggle = () => {
        setSendBtnOpen((prevOpen) => !prevOpen)
    }

    const handleMailDelete = (
        value: string,
        state: FieldMenuItems[],
        setState: (val: FieldMenuItems[]) => void
    ) => {
        const arr = state
        const index = arr.findIndex((i: FieldMenuItems) => i.value === value)
        arr.splice(index, 1)
        setState([...arr])
    }

    const handlePopupClose = () => {
        toggleComposeOpen()
        setEmailTo([])
        setccValue([])
        setbccValue([])
        setSubjectValue('')
        setMessageValue(EditorState.createEmpty())
        setVisibility({
            cc: false,
            bcc: false,
        })
    }

    const handleMinimize = () => {
        toggleComposeOpen()
        setEmailTo(emailTo)
        setccValue(ccValue)
        setbccValue(bccValue)
        setVisibility(visibility)
        setMessageValue(messageValue)
        setSubjectValue(subjectValue)
    }

    const renderCustomChips = (
        array: FieldMenuItems[],
        getTagProps: ({ index }: { index: number }) => {},
        state: FieldMenuItems[],
        setState: (val: FieldMenuItems[]) => void
    ) => {
        return array.map((item, index) => (
            <Chip
                size="small"
                key={item.value}
                label={item.name}
                {...(getTagProps({ index }) as {})}
                deleteIcon={<Icon icon="mdi:close" />}
                onDelete={() => handleMailDelete(item.value, state, setState)}
            />
        ))
    }

    const renderListItem = (
        props: HTMLAttributes<HTMLLIElement>,
        option: FieldMenuItems,
        array: FieldMenuItems[],
        setState: (val: FieldMenuItems[]) => void
    ) => {
        return (
            <ListItem
                key={option.value}
                sx={{ cursor: 'pointer' }}
                onClick={() => setState([...array, option])}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {option.src.length ? (
                        <CustomAvatar
                            src={option.src}
                            alt={option.name}
                            sx={{ mr: 3, width: 22, height: 22 }}
                        />
                    ) : (
                        <CustomAvatar
                            skin="light"
                            color="primary"
                            sx={{ mr: 3, width: 22, height: 22, fontSize: '.75rem' }}
                        >
                            {getInitials(option.name)}
                        </CustomAvatar>
                    )}
                    <Typography sx={{ fontSize: '0.875rem' }}>{option.name}</Typography>
                </Box>
            </ListItem>
        )
    }

    const addNewOption = (options: FieldMenuItems[], params: any): FieldMenuItems[] => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some((option) => inputValue === option.name)

        if (inputValue !== '' && !isExisting) {
            filtered.push({
                name: inputValue,
                value: inputValue,
                src: '',
            })
        }

        // @ts-ignore
        return filtered
    }

    return (
        <Drawer
            hideBackdrop
            anchor="bottom"
            open={composeOpen}
            variant="temporary"
            onClose={toggleComposeOpen}
            sx={{
                top: 'auto',
                left: 'auto',
                right: mdAbove ? '1.5rem' : '1rem',
                bottom: '1.5rem',
                display: 'block',
                zIndex: (theme) => `${theme.zIndex.drawer} + 1`,
                '& .MuiDrawer-paper': {
                    borderRadius: 1,
                    position: 'static',
                    width: composePopupWidth,
                },
            }}
        >
            <Box
                sx={{
                    px: 4,
                    py: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: (theme) => `rgba(${theme.palette.customColors.main}, 0.08)`,
                }}
            >
                <Typography sx={{ fontWeight: 500 }}>Compose Mail</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ p: 1, mr: 2 }} onClick={handleMinimize}>
                        <Icon icon="mdi:minus" fontSize={20} />
                    </IconButton>
                    <IconButton sx={{ p: 1 }} onClick={handlePopupClose}>
                        <Icon icon="mdi:close" fontSize={20} />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    py: 1,
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
            >
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <InputLabel sx={{ mr: 3, fontSize: '0.875rem' }} htmlFor="email-to-select">
                            To:
                        </InputLabel>
                    </div>
                    <Autocomplete
                        multiple
                        freeSolo
                        value={emailTo}
                        clearIcon={false}
                        id="email-to-select"
                        filterSelectedOptions
                        options={menuItemsArr}
                        ListboxComponent={List}
                        filterOptions={addNewOption}
                        getOptionLabel={(option) => (option as FieldMenuItems).name as string}
                        renderOption={(props, option) =>
                            renderListItem(props, option, emailTo, setEmailTo)
                        }
                        renderTags={(array: FieldMenuItems[], getTagProps) =>
                            renderCustomChips(array, getTagProps, emailTo, setEmailTo)
                        }
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': { p: 2 },
                            '& .MuiAutocomplete-endAdornment': { display: 'none' },
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                autoComplete="new-password"
                                sx={{
                                    border: 0,
                                    '& fieldset': { border: '0 !important' },
                                    '& .MuiOutlinedInput-root': { p: '0 !important' },
                                }}
                            />
                        )}
                    />
                </Box>
                <Typography>
                    <Box
                        component="span"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => toggleVisibility('cc')}
                    >
                        Cc
                    </Box>
                    <Box component="span" sx={{ mx: 2 }}>
                        |
                    </Box>
                    <Box
                        component="span"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => toggleVisibility('bcc')}
                    >
                        Bcc
                    </Box>
                </Typography>
            </Box>
            {visibility.cc ? (
                <Box
                    sx={{
                        py: 1,
                        px: 4,
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <div>
                        <InputLabel sx={{ mr: 3, fontSize: '0.875rem' }} htmlFor="email-cc-select">
                            Cc:
                        </InputLabel>
                    </div>
                    <TextField
                        fullWidth
                        size="small"
                        sx={{
                            border: 0,
                            '& fieldset': { border: '0 !important' },
                            '& .MuiOutlinedInput-root': { p: '0 !important' },
                        }}
                    />
                </Box>
            ) : null}
            {visibility.bcc ? (
                <Box
                    sx={{
                        py: 1,
                        px: 4,
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <div>
                        <InputLabel sx={{ mr: 3, fontSize: '0.875rem' }} htmlFor="email-bcc-select">
                            Bcc:
                        </InputLabel>
                    </div>
                    <TextField
                        fullWidth
                        size="small"
                        sx={{
                            border: 0,
                            '& fieldset': { border: '0 !important' },
                            '& .MuiOutlinedInput-root': { p: '0 !important' },
                        }}
                    />
                </Box>
            ) : null}
            <Box
                sx={{
                    py: 1,
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
            >
                <div>
                    <InputLabel sx={{ mr: 3, fontSize: '0.875rem' }} htmlFor="email-subject-input">
                        Subject:
                    </InputLabel>
                </div>
                <Input
                    fullWidth
                    value={subjectValue}
                    id="email-subject-input"
                    onChange={(e) => setSubjectValue(e.target.value)}
                    sx={{
                        '&:before, &:after': { display: 'none' },
                        '& .MuiInput-input': { py: 1.875 },
                    }}
                />
            </Box>
            <EditorWrapper sx={{ '& .rdw-editor-wrapper': { border: 0 } }}>
                <ReactDraftWysiwyg
                    editorState={messageValue}
                    onEditorStateChange={(editorState) => setMessageValue(editorState)}
                    placeholder="Message"
                    toolbar={{
                        options: ['inline', 'textAlign'],
                        inline: {
                            inDropdown: false,
                            options: ['bold', 'italic', 'underline', 'strikethrough'],
                        },
                    }}
                />
            </EditorWrapper>
            <Box
                sx={{
                    py: 2,
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ButtonGroup
                        variant="contained"
                        ref={anchorRefSendBtn}
                        aria-label="split button"
                    >
                        <Button onClick={handlePopupClose}>Send</Button>
                        <Button
                            size="small"
                            aria-haspopup="true"
                            onClick={handleSendBtnToggle}
                            aria-label="select merge strategy"
                            aria-expanded={sendBtnOpen ? 'true' : undefined}
                            aria-controls={sendBtnOpen ? 'email-send-menu' : undefined}
                        >
                            <Icon icon="mdi:chevron-up" fontSize="1.25rem" />
                        </Button>
                    </ButtonGroup>
                    <Menu
                        keepMounted
                        open={sendBtnOpen}
                        id="email-send-menu"
                        onClose={handleSendMenuItemClick}
                        anchorEl={anchorRefSendBtn.current}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleSendMenuItemClick}>Schedule Send</MenuItem>
                        <MenuItem onClick={handleSendMenuItemClick}>Save as Draft</MenuItem>
                    </Menu>
                    <IconButton size="small" sx={{ ml: 3, color: 'text.secondary' }}>
                        <Icon icon="mdi:attachment" fontSize="1.375rem" />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <OptionsMenu
                        iconButtonProps={{ size: 'small' }}
                        iconProps={{ fontSize: '1.375rem' }}
                        options={['Print', 'Check spelling', 'Plain text mode']}
                        menuProps={{
                            anchorOrigin: { vertical: 'top', horizontal: 'right' },
                            transformOrigin: { vertical: 'bottom', horizontal: 'right' },
                        }}
                    />
                    <IconButton size="small" onClick={handlePopupClose}>
                        <Icon icon="mdi:delete-outline" fontSize="1.375rem" />
                    </IconButton>
                </Box>
            </Box>
        </Drawer>
    )
}

export default ComposePopup
