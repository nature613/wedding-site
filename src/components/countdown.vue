<template>
	<div class="block">
		<h4 class="now">Now, Dacia + David are getting married in</h4>
		<p class="digit">
			<span>{{ days  | two_digits }}</span>
			<span>Days</span>
		</p>
		<p class="digit">
			<span>{{ hours | two_digits }}</span>
			<span>Hours</span>
		</p>
		<p class="digit">
			<span>{{ minutes | two_digits }}</span>
			<span>Minutes</span>
		</p>
		<p class="digit">
			<span>{{ seconds | two_digits }}</span>
			<span>Seconds</span>
		</p>
	</div>
</template>

<script>

	import Vue from 'vue'

	Vue.filter('two_digits', function (value) {
		if (value.toString().length <= 1) {
			return '0' + value.toString()
		}

		return value.toString()
	})

	export default {
		mounted() {
			window.setInterval(() => {
				this.now = Math.trunc((new Date()).getTime() / 1000)
			},1000)
		},
		props : {
			to : {
				type: String
			}
		},
		data() {
			return {
				date: Math.trunc((new Date(this.to)).getTime() / 1000),
				now: Math.trunc((new Date()).getTime() / 1000)
			}
		},
		computed: {
			seconds() {
				return (this.date - this.now) % 60
			},
			minutes() {
				return Math.trunc((this.date - this.now) / 60) % 60
			},
			hours() {
				return Math.trunc((this.date - this.now) / 60 / 60) % 24
			},
			days() {
				return Math.trunc((this.date - this.now) / 60 / 60 / 24)
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	.block
		text-align: center

		@include tablet-small
			@include rem(padding, 0 5px)

		h4,
		p
			@include animation(1s fadeIn forwards)

		p
			font-family: $font-stack-sans-serif
			font-weight: 600
			line-height: 1
			text-shadow: 0 0 20px $text5

		.digit
			@include animation(1s fadeIn forwards)
			@include rem(margin, 0 40px 20px 0)
			display: inline-block
			font-size: 60px
			text-align: center

			@include tablet
				font-size: 40px

			@include tablet-small
				font-size: 580%
				margin-right: 4%

			&:last-of-type
				margin-right: 0

			span
				display: block

				&:last-of-type
					color: $text8
					font-size: 22px
</style>
