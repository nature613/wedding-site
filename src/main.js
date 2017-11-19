import Vue from 'vue'
import VueForm from 'vue-form'
import * as VueFire from 'vuefire'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueRouter from 'vue-router'

import './vendor/font-awesome/css/font-awesome-core.css'
import './vendor/font-awesome/css/font-awesome-brands.css'
import './vendor/font-awesome/css/font-awesome-light.css'
import './vendor/font-awesome/css/font-awesome-regular.css'
import './vendor/font-awesome/css/font-awesome-solid.css'

import '../node_modules/semantic-ui/dist/semantic.min.css'
import '../node_modules/semantic-ui/dist/semantic.min.js'

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
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAJSrbwlx67yX40elnm0t0BWArwttGY1LE',
		libraries: 'places'
	},
	installComponents: true
})

// set up router and app

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active'
})
const app = new Vue({ router }).$mount('#app')
