<template>
	<div id="header">
		<div class="container">
			<div class="ui brand">
				<div class="item">
					<router-link class="ui" to="/home"><h1>Dacia <span>+</span> David</h1></router-link>
					<br />
					<span>#davidanddacia</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data: function () {
			return {
				showMenu: false
			}
		}
	}

</script>

<style scoped lang="sass">

	#header
		@include animation(1s fadeIn forwards)
		@include rem(margin-bottom, 15px)
		@include rem(padding, 10px 20px 20px)
		@include size(100%, 90px)
		background: linear-gradient($background3, transparent)
		pointer-events: none
		position: relative
		z-index: 3

		&.disappear
			@include animation-name(fadeOut)

		.container
			margin: 0 auto
			max-width: 1400px

			span
				@include abs-pos(auto, auto, -22px, 0)
				@include rem(letter-spacing, .5px)
				clear: both
				color: $text8
				font-family: $font-stack-sans-serif

			.brand
				@include animation(1s fadeIn forwards)
				float: left
				pointer-events: all

				.item
					margin-bottom: 0
					position: relative

					a
						&:before
							background: transparent

						h1
							@include rem(margin, 0)
							@include transition (all 1s)
							color: $text
							font-size: 42px
							font-weight: normal
							line-height: 1.2

							span
								@include bold()
								@include rel-pos(auto, auto, auto, auto)
								clear: none
								color: $text
								font-size: 62.5%
								font-style: normal

			.launch
				background: transparent
				box-shadow: none !important
				color: $text
				font-family: $font-stack-sans-serif2
				font-size: 17px
				padding: 0
				pointer-events: all

				em
					@include rel-pos(-1px, auto, auto, auto)

				.item
					@include transform(1px, 0)
					@include transition(all 1s)
					color: $text
					font-family: $font-stack-sans-serif2
					overflow: hidden
					padding-right: 0
					pointer-events: all
					z-index: 16

				.menu
					@include abs-pos(0, auto, auto, 0)
					@include rem(padding, 40px 10px)
					background-color: $background3
					pointer-events: all
					position: fixed
					text-align: center
					z-index: 15

					a
						@include rem(margin, 0 15px 10px)
						@include rem(padding-bottom, 5px)
						color: $text
						cursor: pointer
						display: inline-block
						font-size: 1.7rem
						font-weight: normal

						@include mobile
							@include rem(margin-top, 10px)

						@include mobile-small
							@include rem(margin-left, 10px)
							@include rem(margin-right, 10px)
							font-size: 1.5rem

						@include mobile-xsmall
							@include rem(margin-left, 7.5px)
							@include rem(margin-right, 7.5px)

						&:before
							@include transition(all 1s ease-out)

						&:hover,
						&.active
							color: $anchor-text2

							&:before
								background: $background5

			.desktop-only
				&.menu
					pointer-events: all

					a
						@include rem(padding, 7.5px 20px 10px)
						color: $text
						cursor: pointer
						display: inline-block
						font-size: 20px

						&:before
							@include transition(all 1s ease-out)

						&:hover,
						&.active
							color: $anchor-text2

							&:before
								background: $background5

</style>
