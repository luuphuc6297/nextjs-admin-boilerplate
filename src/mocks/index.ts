import mock from './mock'

import './app-bar-search'
import './apps/email'
import './apps/permissions'
import './apps/user-list'
import './auth/jwt'
import './autocomplete'
import './cards'
import './iconify-icons'
import './pages/faq'
import './pages/help-center'
import './pages/pricing'
import './pages/profile'
import './server-side-menu/horizontal'
import './server-side-menu/vertical'
import './table'

mock.onAny().passThrough()