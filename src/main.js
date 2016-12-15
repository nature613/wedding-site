import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './app'

// Globally register bootstrap-vue components
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
