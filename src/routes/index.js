import Chicago from './chicago'
import Home from './home'
import Registry from './registry'
import RSVP from './rsvp'
import Wedding from './wedding'

export default [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Home },
	{ path: '/chicago', component: Chicago },
	{ path: '/registry', component: Registry },
	{ path: '/rsvp', component: RSVP },
	{ path: '/wedding', component: Wedding }
]
