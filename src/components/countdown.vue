<template>
	<div>
		<div class="block">
			<p class="digit">{{ days  | two_digits }}<span>:</span>{{ hours | two_digits }}<span>:</span>{{ minutes | two_digits }}</p>
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
		.digit
			@include rem(font-size, 90px);
			@include rem(margin-bottom, 20px);
			font-family: $font-stack-sans-serif;
			font-weight: 600;
			line-height: 1;
			text-shadow: 0.15rem 0.1rem 6px #888;

			span
				@include rem(font-size, 60px);
				animation: blink 1s linear infinite;
				position: relative;
				top: -20px;

			@keyframes blink
				0%
					opacity: 1;
				45%
					opacity: 0;
				55%
					opacity: 1;

</style>
