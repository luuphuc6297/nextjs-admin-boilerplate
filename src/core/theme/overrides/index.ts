import { Settings } from '@/core/context/setting'
import { Theme } from '@mui/material/styles'
import MuiAccordion from './accordion'
import MuiAlerts from './alerts'
import MuiAutocomplete from './autocomplete'
import MuiAvatar from './avatars'
import MuiBackdrop from './backdrop'
import MuiButton from './button'
import MuiCard from './card'
import MuiChip from './chip'
import MuiDataGrid from './dataGrid'
import MuiDialog from './dialog'
import MuiDivider from './divider'
import MuiInput from './input'
import MuiLink from './link'
import MuiList from './list'
import MuiMenu from './menu'
import MuiPagination from './pagination'
import MuiPaper from './paper'
import MuiPopover from './popover'
import MuiRating from './rating'
import MuiSelect from './select'
import MuiSnackbar from './snackbar'
import MuiSwitches from './switches'
import MuiTable from './table'
import MuiTabs from './tabs'
import MuiTimeline from './timeline'
import MuiToggleButton from './toggleButton'
import MuiTooltip from './tooltip'
import MuiTypography from './typography'

const Overrides = (theme: Theme, settings: Settings) => {
    const { skin } = settings

    const button = MuiButton(theme)
    const chip = MuiChip(theme)
    const list = MuiList(theme)
    const tabs = MuiTabs(theme)
    const input = MuiInput(theme)
    const tables = MuiTable(theme)
    const alerts = MuiAlerts(theme)
    const rating = MuiRating(theme)
    const avatars = MuiAvatar(theme)
    const divider = MuiDivider(theme)
    const menu = MuiMenu(theme, skin)
    const tooltip = MuiTooltip(theme)
    const cards = MuiCard(theme, skin)
    const backdrop = MuiBackdrop(theme)
    const dataGrid = MuiDataGrid(theme)
    const switches = MuiSwitches(theme)
    const timeline = MuiTimeline(theme)
    const accordion = MuiAccordion(theme)
    const dialog = MuiDialog(theme, skin)
    const pagination = MuiPagination(theme)
    const popover = MuiPopover(theme, skin)
    const snackbar = MuiSnackbar(theme, skin)
    const autocomplete = MuiAutocomplete(theme, skin)

    return Object.assign(
        chip,
        list,
        menu,
        tabs,
        cards,
        input,
        alerts,
        button,
        dialog,
        rating,
        tables,
        avatars,
        divider,
        MuiLink,
        popover,
        tooltip,
        backdrop,
        dataGrid,
        MuiPaper,
        snackbar,
        switches,
        timeline,
        accordion,
        MuiSelect,
        pagination,
        autocomplete,
        MuiTypography,
        MuiToggleButton
    )
}

export default Overrides
