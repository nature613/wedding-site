<template>
	<div class="wrapper" ref="vendorCategories">
		<div class="poster"></div>
		<div class="overlay"></div>
		<div class="embed-container">
			<main>
				<site-header></site-header>
				<section>
					<div id="vendor-categories" class="ui clearing">
						<router-view></router-view>
						<p><router-link :to="{ path: '/vendors' }" @click.native="scrollToTop" class="button-link button" v:on.onmousedown="runAnalytics('All vendors')"><span>All Vendors</span></router-link></p>
					</div>
				</section>
			</main>
		</div>
		<site-footer></site-footer>
	</div>
</template>

<script>

	import * as firebase from 'firebase'
	import { db, categoriesRef } from '../datastore'
	import SiteFooter from '../components/site-footer.vue'
	import SiteHeader from '../components/site-header.vue'

	const methods = require('../scripts/common.js')

	export default {

		components: {
			SiteFooter,
			SiteHeader,
		},
		firebase: {
			categories: categoriesRef
		},
		mounted() {
			this.$ga.page(this.$router)
		},
		methods: {
			methods,
			runAnalytics(title) {
				this.$ga.event('Vendor', 'click', title)
			},
			scrollToTop() {
				this.$nextTick(() => this.$refs.vendorCategories.scrollIntoView())
			}
		}
	}

</script>

<style scoped lang="sass">

	.wrapper
		@include size(100%, 100%)
		background: transparent url('../assets/stock/chicago-sports-museum-location.jpg') no-repeat 50% 0 fixed
		background-size: cover
		color: $text
		position: relative

		.overlay
			@include rem(margin, 0)
			background-color: $background3b

		main
			@include rem(margin, 0 auto)
			@include rem(padding, 20px 20px 45px)
			@include size(100%, 100%)
			max-width: 1400px
			overflow-y: auto
			position: relative
			text-align: left
			z-index: 3

			@include tablet-xlarge
				@include rem(padding-top, 3px)
				height: 100%

			@include tablet
				padding-left: 0
				padding-right: 0

			section
				@include rem(margin, 0 80px 50px auto)
				max-width: 76%

				@include desktop
					@include rem(margin-right, 70px)

				@include tablet-xlarge
					margin: 0
					max-width: none

				#vendor-categories
					@include rem(margin-top, 10px)

					section
						margin: 0
						max-width: 100%

						+ p
							@include rem(margin-top, 30px)
							a
								color: $text

								&:hover,
								&:focus
									color: $anchor-text2

									&:before
										background-color: $anchor-text2

								span
									white-space: nowrap

				.ui.raised.segment
					@include rem(margin, 0 auto 20px)
					@include rem(padding, 25px 30px 25px)
					background: $background3b

					@include phablet-large
						@include rem(padding-left, 20px)
						@include rem(padding-right, 20px)

					&:last-of-type
						@include phablet-large
							@include rem(margin, 0 auto 30px)

					em
						color: $text8

					strong
						em
							text-transform: uppercase

</style>
