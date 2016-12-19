import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({ routes, linkActiveClass: 'active' })
const app = new Vue({ router }).$mount('#app')

require('assets/favicons/favicon.ico')
require('assets/favicons/favicon-57x57.png')
require('assets/favicons/favicon-144x144.png')
require('assets/favicons/favicon-72x72.png')
require('assets/favicons/favicon-144x144.png')
require('assets/favicons/favicon-60x60.png')
require('assets/favicons/favicon-120x120.png')
require('assets/favicons/favicon-76x76.png')
require('assets/favicons/favicon-152x152.png')
require('assets/favicons/favicon-196x196.png')
require('assets/favicons/favicon-160x160.png')
require('assets/favicons/favicon-96x96.png')
require('assets/favicons/favicon-16x16.png')
require('assets/favicons/favicon-32x32.png')
