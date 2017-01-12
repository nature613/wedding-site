import Chicago from './chicago'
import Home from './home'
import Family from './family'
import Guestbook from './guestbook'
import RSVP from './rsvp'
import Wedding from './wedding'

export default [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Home },
	{ path: '/chicago', component: Chicago },
	{ path: '/family', component: Family },
	{ path: '/guestbook', component: Guestbook },
	{ path: '/rsvp', component: RSVP },
	{ path: '/wedding', component: Wedding }
]
