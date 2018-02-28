<template>
	<div>
		<router-link to="/home" v:on.onmousedown="runAnalytics('Home')">Home</router-link>
		<router-link to="/wedding" v:on.onmousedown="runAnalytics('Wedding')">Wedding</router-link>
		<router-link to="/family" v:on.onmousedown="runAnalytics('Family')">Family</router-link>
		<router-link to="/chicago" v:on.onmousedown="runAnalytics('Chicago')">Chicago</router-link>
		<router-link to="/vendors" v:on.onmousedown="runAnalytics('Vendors')">Vendors</router-link>
		<router-link to="/ours" v:on.onmousedown="runAnalytics('Ours')">Ours</router-link>
	</div>
</template>

<script>

	export default {
		methods: {
			runAnalytics(title) {
				this.$ga.event('Navigation', 'click', title)
			}
		},
		watch: {
			'$route': function () {
				$('.sidebar').sidebar('hide')
			}
		}
	}

</script>
