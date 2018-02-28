import Chicago from './chicago'
import Family from './family'
import Home from './home'
import Ours from './ours'
import RSVP from './rsvp'
import Thanks from './thanks'
import Vendors from './vendors'
import VendorCaterer from '../components/vendor-caterer.vue'
import VendorDecor from '../components/vendor-decor.vue'
import VendorMusic from '../components/vendor-music.vue'
import VendorPhotos from '../components/vendor-photos.vue'
import VendorPlanner from '../components/vendor-planner.vue'
import VendorVenue from '../components/vendor-venue.vue'
import VendorVideo from '../components/vendor-video.vue'
import VendorUnassigned from '../components/vendor-unassigned.vue'
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
			},
			{
				component: Family,
				path: '/family',
				beforeEnter: (to, from, next) => {
					const keyword = prompt('I hope you\'re family. If so, password please')

					if (keyword != '4148') {
						next(false)
					} else {
						next()
					}
				}
			}
		]
	},
	{
		component: Vendors,
		path: '/vendors',
		children: [
			{
				component: VendorUnassigned,
				path: '/',
			},
			{
				component: VendorCaterer,
				path: 'caterer'
			},
			{
				component: VendorDecor,
				path: 'decor'
			},
			{
				component: VendorMusic,
				path: 'music'
			},
			{
				component: VendorPhotos,
				path: 'photos'
			},
			{
				component: VendorPlanner,
				path: 'planner'
			},
			{
				component: VendorVenue,
				path: 'venue'
			},
			{
				component: VendorVideo,
				path: 'video'
			}
		]
	},
	{
		component: Ours,
		path: '/ours'
		// beforeEnter: (to, from, next) => {
		// 	const keyword = prompt('Keyword please')

		// 	if (keyword != 'eugirdor') {
		// 		next(false)
		// 	} else {
		// 		next()
		// 	}
		// }
	},
	{
		component: Chicago,
		path: '/chicago'
	}
]
