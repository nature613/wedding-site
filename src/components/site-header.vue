<template>
	<div id="header">
		<div class="main">
			<div class="ui brand">
				<div class="item">
					<router-link class="ui" to="/home" @click="runAnalytics('David + Dacia')"><h1><span>David + Dacia</span></h1></router-link>
				</div>
				<p>#davidanddacia</p>
			</div>
			<div class="navigation-menu" @click="openSidebar" v:on.onmousedown="runAnalytics('Show Menu')">
				<i class="content icon"></i>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		methods: {
			openSidebar() {
				$('.sidebar').sidebar('show')
			},
			runAnalytics(title) {
				this.$ga.event('Header', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">

	#header
		@include animation(2s fadeIn forwards)
		pointer-events: none
		position: relative
		z-index: 43

		&.disappear
			@include animation-name(fadeOut)

		@include mobile-xsmall
			@include rem(padding, 10px 10px 0 0)

		.main
			@include rem(margin-bottom, 20px)
			@include rem(padding, 0 20px)
			margin-left: auto
			margin-right: auto
			max-width: 1400px
			position: relative

			@include tablet-large
				@include rem(margin-bottom, 10px)
				@include rem(margin-top, 0)
				max-width: 90%

			@include mobile
				max-width: 100%

			.brand
				@include animation(2s fadeIn forwards)
				pointer-events: none

				p
					@include rem(letter-spacing, .5px)
					@include rem(margin, -5px auto 0 5px)
					clear: both

				.item
					margin-bottom: 0
					pointer-events: none
					position: relative

					a
						outline: none
						pointer-events: all

						&:before
							background: transparent

						&:hover,
						&:focus
							outline: none

						h1
							@include rem(margin, 0)
							@include size(200px, 74px)
							@include transition (all 2s)
							background: url('../assets/d+d.png') 1px top no-repeat

							span
								text-indent: -10000em
								visibility: hidden

			.navigation-menu
				@include abs-pos(17px, 22px, auto, auto)
				@include transition(all 2s)
				color: $text
				cursor: pointer
				padding-right: 0
				pointer-events: all
				z-index: 16

				@include mobile-xsmall
					@include rem(padding-left, 2px)

				i.icon
					font-size: 2.8rem
					margin-right: 0

					&:hover,
					&:focus,
					&.active
						color: $anchor-text2

</style>
