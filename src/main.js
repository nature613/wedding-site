import Vue from 'vue'
import VueForm from 'vue-form'
import VueFire from 'vuefire'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import App from './routes/app.vue'
import Sidebar from './components/sidebar.vue'

import './vendor/font-awesome/css/font-awesome-core.css'
import './vendor/font-awesome/css/font-awesome-brands.css'
import './vendor/font-awesome/css/font-awesome-light.css'
import './vendor/font-awesome/css/font-awesome-regular.css'
import './vendor/font-awesome/css/font-awesome-solid.css'

import '../node_modules/reframe.js/dist/jquery.reframe.min.js'

import '../node_modules/semantic-ui/dist/semantic.min.css'
import '../node_modules/semantic-ui/dist/semantic.min.js'
import '../node_modules/helper-css/src/helper-css.min.css'

import routes from './routes'

// load vue plug-ins
Vue.use(VueForm, {
	inputClasses: {
		valid: 'form-control-success',
		invalid: 'form-control-danger'
	}
})
Vue.use(VueVirtualScroller)
Vue.use(VueYouTubeEmbed)
Vue.use(VueFire)
Vue.use(VueAnalytics, {
	id: 'UA-110494908-1',
	checkDuplicatedScript: true,
	router,
	autotracking: {
		untracked: true,
		pageviewOnLoad: true,
		pageviewTemplate (route) {
			return {
			  page: route.path,
			  title: document.title,
			  location: window.location.href
			}
		},
		shouldRouterUpdate (to, from) {
			return to.path !== from.path
		}
	}
})
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAJSrbwlx67yX40elnm0t0BWArwttGY1LE',
		libraries: 'places'
	},
	installComponents: true
})

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

router.beforeEach(function (to, from, next) {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 100)
	next()
})

// set up router and app
new Vue({
	components: { Sidebar },
	el: '#sidebar',
	router,
	template: '<sidebar />'
})

new Vue({
	components: { App },
	el: '#content',
	router,
	template: '<app />'
})
