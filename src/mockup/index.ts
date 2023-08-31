import mock from './mock'

import './auth/jwt'
import './cards'

mock.onAny().passThrough()