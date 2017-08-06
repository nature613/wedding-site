import Chicago from './chicago'
import Home from './home'
import RSVP from './rsvp'
import Thanks from './thanks'
import Wrapper from './wrapper'
import Wedding from './wedding'

export default [
	{
		path: '/',
		redirect: '/home'
	},
	{
		component: Wrapper,
		path: '/wrapper',
		children: [
			{
				component: Home,
				path: '/home'
			},
			{
				component: RSVP,
				path: '/rsvp'
			},
			{
				component: Thanks,
				path: '/thanks'
			},
			{
				component: Wedding,
				path: '/wedding'
			}
		]
	},
	{
		component: Chicago,
		path: '/chicago'
	}
]
