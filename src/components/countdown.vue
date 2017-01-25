<template>
	<div>
		<div class="block">
			<div class="now"><p>Now, they're getting married in</p></div>
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
	</div>
</template>

<script>

	import Vue from 'vue'

	Vue.filter('two_digits', function (value) {
		if (value.toString().length <= 1) {
			return '0' + value.toString();
		}

		return value.toString();
	});

	export default {
		mounted() {
			window.setInterval(() => {
				this.now = Math.trunc((new Date()).getTime() / 1000);
			},1000);
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
				return (this.date - this.now) % 60;
			},
			minutes() {
				return Math.trunc((this.date - this.now) / 60) % 60;
			},
			hours() {
				return Math.trunc((this.date - this.now) / 60 / 60) % 24;
			},
			days() {
				return Math.trunc((this.date - this.now) / 60 / 60 / 24);
			}
		}
	}

</script>

<style lang="sass">

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	.block
		p
			font-family: $font-stack-sans-serif;
			font-weight: 600;
			line-height: 1;
			text-shadow: 0.15rem 0.1rem 6px #888;

		.now
			@include rem(font-size, 16px);

		.digit
			@include rem(font-size, 60px);
			@include rem(margin, 0 40px 20px 0);
			display: inline-block;
			text-align: center;

			@include tablet
				@include rem(font-size, 40px);

			&:last-of-type
				margin-right: 0;

			span
				display: block;

				&:last-of-type
					@include rem(font-size, 16px);
</style>
