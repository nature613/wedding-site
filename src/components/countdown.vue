<template>
	<div class="block">
		<div class="ui statistics">
			<div class="ui huge statistic">
				<div class="value">
					{{ days  | two_digits }}
				</div>
				<div class="label">
					Days
				</div>
			</div>
			<div class="ui huge statistic">
				<div class="value">
					{{ hours | two_digits }}
				</div>
				<div class="label">
					Hours
				</div>
			</div>
			<div class="ui huge statistic">
				<div class="value">
					{{ minutes | two_digits }}
				</div>
				<div class="label">
					Minutes
				</div>
			</div>
			<div class="ui huge statistic">
				<div class="value">
					{{ seconds | two_digits }}
				</div>
				<div class="label">
					Seconds
				</div>
			</div>
		</div>
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

<style scoped lang="sass">

	.block
		align-items: center
		display: flex
		justify-content: center
		margin: auto
		text-align: center

		@include tablet-small
			@include rem(padding, 0 10px)

		@include phablet-large
			@include rem(padding, 0 15px)

		@include mobile-small
			@include rem(padding, 0 5px)

		p
			@include animation(2s fadeIn forwards)
			font-family: $font-stack
			font-weight: 600
			line-height: 1
			text-shadow: 0 0 20px $text5

		.ui.statistic,
		.ui.statistics .statistic
			&:first-of-type
				margin-left: 0

			&:last-of-type
				@include mobile
					display: none

			&.huge
				> .value
					font-size: 10rem !important

					@include tablet
						font-size: 8rem !important

					@include tablet-small
						font-size: 6rem !important

					@include mobile-small
						font-size: 4.5rem !important

					@include mobile-xsmall
						font-size: 3.5rem !important

			> .value
				@include animation(2s fadeIn forwards)
				color: $text
				font-weight: bold

				~ .label
					color: $text8

</style>
