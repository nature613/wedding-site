import Chicago from './chicago'
import Home from './home'
import Family from './family'
import RSVP from './rsvp'
import Wedding from './wedding'

export default [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Home },
	{ path: '/chicago', component: Chicago },
	{ path: '/family', component: Family },
	{ path: '/rsvp', component: RSVP },
	{ path: '/wedding', component: Wedding }
]
