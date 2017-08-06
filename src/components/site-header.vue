<template>
	<b-navbar id="header" type="dark" variant="default">
		<div class="col-xl-4">
			<a class="navbar-brand" href="#"><h1>Dacia <span>+</span> David</h1></a><br />
			<span>#davidanddacia</span>
		</div>
		<div class="col-xl-8">
			<b-nav is-nav-bar class="pull-xs-left">
				<li class="nav-item"><router-link class="nav-link" to="/home">Home</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/wedding">Wedding</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/rsvp">RSVP</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/chicago">Chicago</router-link></li>
			</b-nav>
		</div>
	</b-navbar>
</template>

<script>

	export default {

	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	#header
		@include animation(1s fadeIn forwards)
		background: linear-gradient($background3, transparent)
		pointer-events: none
		width: 100%
		z-index: 3

		&.disappear
			@include animation-name(fadeOut)

		span
			@include abs-pos(auto, auto, -25px, 16px)
			clear: both
			color: $text8
			font-style: italic

			@include desktop-large
				top: -42px

		.navbar-brand
			@include animation(1s fadeIn forwards)
			color: $text
			float: none
			padding: 0
			pointer-events: all

			@include tablet-small
				float: left

			h1
				font-size: 40px
				@include rem(margin, 0)
				@include transition (all 1s)

				&:hover
					color: $text
					cursor: pointer
					font-size: 48px

				span
					@include bold()
					@include rel-pos(auto, auto, auto, auto)
					clear: none
					color: $text
					font-size: 62.5%
					font-style: normal

		.nav
			float: right

			.nav-link
				@include transform(1px, 0)
				@include transition(all 1s)
				box-shadow: 0 0 1px transparent
				color: $text
				display: inline-block
				font-family: $font-stack-sans-serif2
				opacity: 1
				overflow: hidden
				pointer-events: all
				position: relative
				text-decoration: none
				vertical-align: top

				&:before
					@include abs-pos(auto, 100%, 0, 0)
					@include transition(right 1s ease-out)
					background: $text
					content: ""
					height: 2px
					z-index: -1

				&:hover,
				&:focus,
				&.active
					opacity: 1

					&:before
						right: 0

				&.active
					color: $text

					&:before
						background: $text

				&:hover
					color: $anchor-text2

					&:before
						background: $anchor-text2

</style>
